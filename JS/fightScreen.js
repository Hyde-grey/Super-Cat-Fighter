
var draw = document.getElementById("draw");
var drawnCards = document.querySelector(".drawnCards");

var pHPBlock = document.querySelector(".player-hp");
var npcHPBlock = document.querySelector(".npc-hp");

var threeCards = [];
var selectedCards = [];


var current = 0; 
var npcHealth = npcsArr[0].hp;



var min = 0;
var max = 10;

var playerCards = [];
var npcCards = [];

var atkCard = {

    cardName : "Attack",

    hitPoints :  Math.round(Math.random() * (10 - 0)) + 0

}

var defCard = {

    cardName : "Defence",

    hitPoints : Math.round(Math.random() * (10 - 0)) + 0

}

var evaCard = {

    cardName : "Evasion",

    hitPoints : Math.round(Math.random() * (10 - 3)) + 3

}

var healCard = {

    cardName : "Heal",

    hitPoints : Math.round(Math.random() * (10 - 5)) + 5

}

var specialAtk = {

    cardName : "special",

    hitPoints : 25

}


var cardList = [atkCard,defCard,evaCard,healCard,specialAtk];


function submitCardsSelection(){

    var pHealth = whatCharacter.hp;
    
        switch(threeCards[current].cardName){

            case "Attack":
            
                if(npcCards[current].cardName === "Attack"){

                    console.log("The Enemy hits you with " + npcCards[current].hitPoints + " hitpoints.");
                    console.log("You hit the enemy with " + threeCards[current].hitPoints + " hitpoints.");

                    pHealth -= npcCards[current].hitPoints;
                    npcHealth -= threeCards[current].hitPoints;
                    
                    npcHPBlock.innerHTML = npcHealth;
                    pHPBlock.innerHTML = pHealth;

                }else if(npcCards[current].cardName === "special"){

                    console.log("The Enemy hits you with " + npcCards[current].hitPoints + " hitpoints.");
                    console.log("You hit the enemy with " + threeCards[current].hitPoints + " hitpoints.");

                    pHealth -= npcCards[current].hitPoints;
                    npcHealth -= threeCards[current].hitPoints;
                    
                    npcHPBlock.innerHTML = npcHealth;
                    pHPBlock.innerHTML = pHealth;

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints < threeCards[current].hitPoints ){

                    console.log("You're attacking with " + threeCards[current].hitPoints + " and " + npcsArr[0].firstName + " defends with " + npcCards[current].hitPoints + " points.");

                    let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;

                    npcHealth -= dmg;

                    npcHPBlock.innerHTML = npcHealth;

                }else if(npcCards[current].cardName === "Defence" && npcCards[current].hitPoints > threeCards[current].hitPoints ){

                    console.log("You're attacking with " + threeCards[current].hitPoints + "and " + npcsArr[0].firstName + "defends with " + npcCards[current].hitPoints + " points.");

                    let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                    pHealth -= dmg;

                    pHPBlock.innerHTML = pHealth;

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints == threeCards[current].hitPoints){

                    console.log("The enemy has successfully blocked your attack no DMG was dealt !")


                }else if(npcCards[current].cardName === "Evasion"){

                    let max =npcCards[current].hitPoints;
                    let success = Math.floor(Math.random() * ( max - min));

                    if(success > npcCards[current].hitPoints){

                        console.log("The enemy tries to evade but was too slow !");

                        npcHealth -= threeCards[current].hitPoints;
                        npcHPBlock.innerHTML = npcHealth;

                    }else{

                        console.log("The enemy evaded your attack !");

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    npcHealth -= threeCards[current].hitPoints;
                    
                    npcHPBlock.innerHTML = npcHealth;

                    if(npcHPBlock.innerHTML > npcsArr[0].hp){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcsArr[0].hp){

                        npcHealth += npcCards[current].hitPoints;

                        if(npcHealth <= npcsArr[0].hp){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy feinted an attack and healed");

                        }else{

                            npcHPBlock.innerHTML = npcsArr[0].hp;
                            console.log("The enemy feinted an attack and healed");

                        }

                    }

                }

            break;

            case "Defence":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    if(threeCards[current].hitPoints < npcCards[current].hitPoints){

                        let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                        pHealth -= dmg;

                        console.log("The enemy attacks you for " + npcCards[current].hitPoints + "You've blocked " + threeCards[current].hitPoints + " of DMG ");

                        pHPBlock.innerHTML = pHealth;

                    }else if(threeCards[current].hitPoints > npcCards[current].hitPoints){

                        let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;;

                        npcHealth -= dmg;

                        console.log("You've managed to counter the enemy some of the dmg is returned!");

                        npcHPBlock.innerHTML = npcHealth;

                    }
                    
                }else if(npcCards[current].cardName === "Defence"){

                    console.log("You both put up your guards");

                }else if(npcCards[current].cardName === "Evasion"){

                    console.log("You feinted an attack and made the enemy flinch.")

                }else if( npcCards[current].cardName === "Heal"){

                    if(npcHPBlock.innerHTML > npcsArr[0].hp){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcsArr[0].hp){

                        npcHealth += npcCards[current].hitPoints;

                        if(npcHealth <= npcsArr[0].hp){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy feinted an attack and healed");

                        }else{

                            npcHPBlock.innerHTML = npcsArr[0].hp;
                            console.log("The enemy feinted an attack and healed");

                        }

                    }


                }else{


                }

            break;

            case "Evasion":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    if(threeCards[current].cardName === "Evasion"){

                        let max = threeCards[current].hitPoints;
                        let success = Math.floor(Math.random() * ( max - min));
    
                        if(success > threeCards[current].hitPoints){
    
                            pHealth -= npcCards[current].hitPoints;
                            pHPBlock.innerHTML = pHealth;
    
                        }else{
    
                            console.log("You've dodged the npc's atk !");
    
                        }
                        
                    }   
                    
                }else if( npcCards[current].cardName === "Heal"){

                            
                    if(npcHPBlock.innerHTML > npcsArr[0].hp){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcsArr[0].hp){

                        npcHealth += npcCards[current].hitPoints;

                        if(npcHealth <= npcsArr[0].hp){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy feinted an attack and healed");

                        }else{

                            npcHPBlock.innerHTML = npcsArr[0].hp;
                            console.log("The enemy feinted an attack and healed");

                        }
                    }
                }       

            break;

            case "Heal":

                pHealth += threeCards[current].hitPoints;

                console.log("You healed by + " + threeCards[current].hitPoints + " HP.");

                pHPBlock.innerHTML = pHealth;

            break;
            
            case "special":

                if(npcCards[current].cardName === "Attack"){

                    console.log("The Enemy hits you with " + npcCards[current].hitPoints + " hitpoints.");
                    console.log("You hit the enemy with a Special attack " + threeCards[current].hitPoints + " hitpoints.");

                    pHealth -= npcCards[current].hitPoints;
                    npcHealth -= threeCards[current].hitPoints;
                    
                    npcHPBlock.innerHTML = npcHealth;
                    pHPBlock.innerHTML = pHealth;

                }else if(npcCards[current].cardName === "special"){

                    console.log("You both launch a ki blast!");

                    var hitChance = Math.floor(Math.random() * ( 10 - 0));

                    if(hitChance > 5){

                        npcHealth -= threeCards[current].hitPoints;
                        pHPBlock.innerHTML = pHealth;

                    }else if(hitChance == 5){

                        console.log("You both attacked with equal amount of force and no one took DMG !");

                    }else{

                        pHealth -= npcCards[current].hitPoints;
                    
                        npcHPBlock.innerHTML = npcHealth;

                    }

                    
                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints < threeCards[current].hitPoints ){

                    console.log("You're attacking with " + threeCards[current].hitPoints + " and " + npcsArr[0].firstName + "defends with " + npcCards[current].hitPoints + " points.");

                    let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;

                    npcHealth -= dmg;

                    npcHPBlock.innerHTML = npcHealth;

                }else if(npcCards[current].cardName === "Defence" && npcCards[current].hitPoints > threeCards[current].hitPoints ){

                    console.log("You're attacking with " + threeCards[current].hitPoints + "and " + npcsArr[0].firstName + "defends with " + npcCards[current].hitPoints + " points.");

                    let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                    pHealth -= dmg;

                    pHPBlock.innerHTML = pHealth;

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints == threeCards[current].hitPoints){

                    console.log("The enemy has successfully blocked your attack no DMG was dealt !")


                }else if(npcCards[current].cardName === "Evasion"){

                    let max =npcCards[current].hitPoints;
                    let success = Math.floor(Math.random() * ( max - min));

                    if(success > npcCards[current].hitPoints){

                        console.log("The enemy tries to evade but was too slow !");

                        npcHealth -= threeCards[current].hitPoints;
                        npcHPBlock.innerHTML = npcHealth;

                    }
                    
                }else{

                    npcHealth -= threeCards[current].hitPoints;
                    
                    npcHPBlock.innerHTML = npcHealth;

                }

            break;

        }

        if(current <= 1){

            current ++;
            console.log("Card " + (current+1));

        }else{

            current = 0;
            draw.disabled = false;
            console.log("time to draw new cards");
            
        }

    }

   

function addToSelection(value){

    let cards = Array.from(document.querySelectorAll(".card"));

    const index = cards.findIndex(element => element == value);

    console.log(index);

    selectedCards.push(value);
    threeCards.push(playerCards[index]);

}

function removeFromSelection(value){
    
    let cards = Array.from(document.querySelectorAll(".card"));
    
    const index = cards.findIndex(element => element == value);

    selectedCards.splice(index,1);
    threeCards.splice(index,1);
    console.log("threeCrads length is " + threeCards.length)

}

function cardChance (){

    let min = 1;
    let max = 100; 
    var cardType;

    var result = Math.floor(Math.random() * ( max - min))

    if(result <= 10){

        cardType = healCard;

    }else if(result > 10 && result <= 35){

        cardType = evaCard;

    }else if(result > 35 && result <= 65){

        cardType = defCard;

    }else if(result > 65 && result <= 95){

        cardType = atkCard;
    
    }else{

        cardType = specialAtk;

    }

    return cardType;
            

}

function playerRandomCards(){

    console.log(whatCharacter.firstName + " was selected");

    playerCards = [];

    if(!drawnCards.innerHTML == ""){
        drawnCards.innerHTML = "";
    }

    playerCards.length = 0;

    let max = cardList.length;
    let min = 0;

    for( i = 0 ; i <= 4 ; i++ ){

 
        let card = cardChance();
        
        switch(card.cardName){

            case "Attack" :

            card.hitPoints = Math.round(Math.random() * (10 - 0)) + 0;
            playerCards.push(card);

            break;

            case "Defence" : 

            card.hitPoints = Math.round(Math.random() * (10 - 0)) + 0;
            playerCards.push(card);

            break;

            case "Heal" : 

            card.hitPoints = Math.round(Math.random() * (10 - 5)) + 5;
            playerCards.push(card);

            break;

            case "Evasion" : 

            card.hitPoints = Math.round(Math.random() * (10 - 3)) + 3;
            playerCards.push(card);

            break;

            case "special" : 

            playerCards.push(card);

            break;


        }
        
        console.log(card);
        

        let selector = document.createElement("div");
        drawnCards.appendChild(selector);
        selector.classList.add("card");
        selector.addEventListener("click", function(event){

            if(!event.target.classList.contains("selected-card") && threeCards.length < 3 ){
        
                this.classList.add("selected-card");
                addToSelection(this);
        
            }else if(event.target.classList.contains("selected-card")){
        
                this.classList.remove("selected-card");
                removeFromSelection(this);

            }else{
        
                selectedCards[0].classList.remove("selected-card");
                selectedCards.shift();
                threeCards.shift();

            }
        
        });

        selector.innerHTML = playerCards[i].cardName + " " + playerCards[i].hitPoints;
        
        console.log( playerCards[i].cardName + " with  " + playerCards[i].hitPoints + " hitPoints" );
        
    }

    
}

function npcRandomCards(){

    npcCards.length = 0;

    let max = cardList.length;
    let min = 0;

    for( i = 0 ; i <= 2 ; i++ ){

        let card = cardChance();

        if(card.cardName != "special"){

            card.hitPoints = Math.round(Math.random() * (10 - 0)) + 0;

            npcCards.push(card);

            console.log("Enemy cards are " + npcCards[i].cardName + " with  " + npcCards[i].hitPoints + " hitPoints");


        }else{

            npcCards.push(card);

            console.log("Enemy cards are " + npcCards[i].cardName + " with  " + npcCards[i].hitPoints + " hitPoints");

        }

        

    }
    

}



function drawCards(){

    npcRandomCards();
    playerRandomCards();

    var submitSelection = document.createElement("div");
    drawnCards.appendChild(submitSelection);
    submitSelection.classList.add("submit-selection");
    submitSelection.innerHTML = "Submit";
    submitSelection.addEventListener("click", submitCardsSelection);
    draw.disabled = true;

}

draw.addEventListener("click", drawCards);
