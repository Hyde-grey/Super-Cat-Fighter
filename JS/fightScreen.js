
var draw = document.getElementById("draw");
var drawnCards = document.querySelector(".drawnCards");
var submitSelection = document.querySelector(".submit-selection");

var pHPBlock = document.querySelector(".player-hp");
var npcHPBlock = document.querySelector(".npc-hp");
var npcSprite = document.querySelector(".npc");
var currentCharacter = document.querySelector(".player");


var threeCards = [];
var selectedCards = [];


var current = 0; 
var npcHealth = npcsArr[0].hp;
var pHealth = whatCharacter.hp;





var min = 0;
var max = 10;

var playerCards = [];
var npcCards = [];

/////////////////////////////////////////PLAYER CARDS/////////////////////////////////

var atkCard = {

    cardName : "Attack",

    hitPoints :  0

}

var defCard = {

    cardName : "Defence",

    hitPoints : 0

}

var evaCard = {

    cardName : "Evasion",

    hitPoints : 0

}

var healCard = {

    cardName : "Heal",

    hitPoints : 0

}

var specialAtk = {

    cardName : "special",

    hitPoints : 25

}

//////////////////////////////NPCCARDS///////////////////////////////////////////////

var natkCard = {

    cardName : "Attack",

    hitPoints :  0

}

var ndefCard = {

    cardName : "Defence",

    hitPoints : 0

}

var nevaCard = {

    cardName : "Evasion",

    hitPoints : 0

}

var nhealCard = {

    cardName : "Heal",

    hitPoints : 0

}

var nspecialAtk = {

    cardName : "special",

    hitPoints : 25

}

var cardList = [atkCard,defCard,evaCard,healCard,specialAtk]; 
var npcCardList = [natkCard,ndefCard,nevaCard,nhealCard,nspecialAtk];


///////////////////////////////////DODGING ANIMATIONS////////////////////////////////////

function npcDodge(){

    npcSprite.animate([

        { transform: "translatex(50%)" },
        { transform: "translatex(55%)" },
        { transform: "translatex(50%)" }
        
    ],
    {duration: 400});

// setTimeout(function(){

//     npcSprite.animate([

//         { transform: "translatex(55%)" },
//         { transform: "translatex(50%)" }
//     ],
//     {duration: 500});


// }, 1000);


}

function playerDodge(){

    currentCharacter.animate([

        { transform: "translatex(-50%)" },
        { transform: "translatex(-55%)" },
        { transform: "translatex(-50%)" }
    ],
    {duration: 500});


}

function playerTakesDMG(npcCard){

    pHealth -= npcCard;
    
    pHPBlock.innerHTML = pHealth;
    console.log("The enemy hits you with " + npcCard + " hitpoints.");

}

function npcTakesDMG(pCard){

    npcHealth -= pCard;
    npcHPBlock.innerHTML = npcHealth;
    console.log("You hit the enemy with " + pCard + " hitpoints.");

}

////////////////////////////////////////END OF DODGING ANIMATION/////////////////////////////////////

function submitCardsSelection(){

    let pMaxHealth = whatCharacter.hp;
    let npcMaxHealth = npcsArr[0].hp;

    console.log("Current NPC card is " + npcCards[current].cardName + " with " + npcCards[current].hitPoints + ".");
    console.log("Current Players card is " + threeCards[current].cardName + " with " + threeCards[current].hitPoints + ".");

        switch(threeCards[current].cardName){

            case "Attack":
            
                if(npcCards[current].cardName === "Attack"){

                    npcTakesDMG(threeCards[current].hitPoints)
                    playerTakesDMG(npcCards[current].hitPoints);

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

                    console.log("You're attacking with " + threeCards[current].hitPoints + " and " + npcsArr[0].firstName + " defends with " + npcCards[current].hitPoints + " points.");

                    let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                    pHealth -= dmg;

                    pHPBlock.innerHTML = pHealth;

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints == threeCards[current].hitPoints){

                    console.log("The enemy has successfully blocked your attack no DMG was dealt !")


                }else if(npcCards[current].cardName === "Evasion"){

                    console.log("the enemy attemps to evade your attack with " + npcCards[current].hitPoints + "0% chance of success.")

                    let successRate = 10 - npcCards[current].hitPoints;

                    if(npcCards[current].hitPoints >= 10){

                        successRate = 10;

                    }

                    let calcEvaChance = Math.floor(Math.random() * ( max - 1) +1);

                    console.log(" npc rolled " + calcEvaChance);

                    if(calcEvaChance > successRate || calcEvaChance == 10){

                        npcDodge();
                        console.log("The enemy evades your attack !");

                    }else{

                        console.log("The enemy was too slow !");

                        npcHealth -= threeCards[current].hitPoints;
                        npcHPBlock.innerHTML = npcHealth;

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    console.log("You deal " + threeCards[current].hitPoints + " hitpoints.");

                    npcHealth -= threeCards[current].hitPoints;
                    npcHPBlock.innerHTML = npcHealth;

                    if(npcHPBlock.innerHTML >= npcMaxHealth){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcMaxHealth){

                        npcHealth += npcCards[current].hitPoints;

                        if(npcHealth <= npcMaxHealth){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy healed right after you attacked.");
                            

                        }else{

                            npcHPBlock.innerHTML = npcMaxHealth;
                            console.log("The enemy healed after you attacked and reached max HP.");

                        }

                    }

                }

            break;

            case "Defence":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    if(threeCards[current].hitPoints < npcCards[current].hitPoints){

                        let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                        pHealth -= dmg;

                        console.log("The enemy attacks you for " + npcCards[current].hitPoints + " hitpoints but you've blocked " + threeCards[current].hitPoints + " of DMG ");

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
                    npcDodge();

                }else if( npcCards[current].cardName === "Heal"){

                    if(npcHPBlock.innerHTML > npcHealth){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcHealth){

                        npcHealth += npcCards[current].hitPoints;

                        if(npcHealth <= npcHealth){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy feinted an attack and healed");

                        }else{

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy feinted an attack and healed");

                        }

                    }

                }

            break;

            case "Evasion":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){
    
                    console.log("The enemy attacks with " + npcCards[current].hitPoints + " You attemps to evade the enemy's attack with " + threeCards[current].hitPoints + "0% chance of success.")

                    let successRate = 10 - threeCards[current].hitPoints;

                    if(threeCards[current].hitPoints >= 10){

                        successRate = 10;

                    }

                    let calcEvaChance = Math.floor(Math.random() * ( 10 - 1) +1);

                    console.log(" You rolled " + calcEvaChance);

                    if(calcEvaChance > successRate){

                        console.log("You evade the attack !");
                        playerDodge();

                    }else{

                        console.log("You were too slow and took the attack !");

                        pHealth -= npcCards[current].hitPoints;
                        pHPBlock.innerHTML = pHealth;

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    playerDodge();
  
                    if(npcHPBlock.innerHTML >= npcMaxHealth){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcMaxHealth){

                        npcHealth += (npcHPBlock.innerHTML - npcCards[current].hitPoints);

                        if(npcHealth <= npcMaxHealth){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy feinted an attack and healed");

                        }else{

                            npcHPBlock.innerHTML = npcMaxHealth;
                            console.log("The enemy feinted an attack and healed");

                        }
                    }

                }else if(npcCards[current].cardName === "Evasion"){

                    console.log("You both though the other was going to attack and moved to dodge.");
                    npcDodge();
                    playerDodge();

                }else if(npcCards[current].cardName === "Defence"){

                    playerDodge();
                    console.log("You moved while the enemy puts his guard up.");

                }       

            break;

            case "Heal":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    pHealth -= npcCards[current].hitPoints;
                    pHPBlock.innerHTML = pHealth;

                    if(pHPBlock.innerHTML == pMaxHealth){

                        console.log("You tried to heal but nothing happened...");

                    }else if(pHPBlock.innerHTML < pMaxHealth){

                        pHealth += (pHPBlock.innerHTML - threeCards[current].hitPoints);

                        if(pHealth < pMaxHealth){

                            pHPBlock.innerHTML = pHealth;
                            console.log("The Enemy hits you with " + npcCards[current].hitPoints + " hitpoints but you healed for " + threeCards[current].hitPoints + " HP." );

                        }else{

                            pHPBlock.innerHTML = pMaxHealth;
                            console.log("The Enemy hits you with " + npcCards[current].hitPoints + " hitpoints but You healed and reached your max HP." );

                        }
                    }

                }else if(npcCards[current].cardName === "Defence"){
                    
                    if(pHPBlock.innerHTML == pMaxHealth){

                        console.log("You tried to heal but nothing happened...");

                    }else if(pHPBlock.innerHTML < pMaxHealth){


                        pHealth += (pHPBlock.innerHTML - threeCards[current].hitPoints);

                        if(pHealth < pMaxHealth){

                            pHPBlock.innerHTML = pHealth;
                            console.log("You took the chance while you enemy is blocking to heal by " + threeCards[current].hitPoints + "HP.")

                        }else{

                            pHPBlock.innerHTML = pMaxHealth;
                            console.log("You took the chance while you enemy is blocking to heal and reached your max HP.")

                        }
                    }

                }else if(npcCards[current].cardName === "Evasion"){

                    npcDodge();
   
                    if(pHPBlock.innerHTML == pMaxHealth){

                        console.log("You tried to heal but nothing happened...");

                    }else if(pHPBlock.innerHTML < pMaxHealth){

                        pHealth += (pHPBlock.innerHTML - threeCards[current].hitPoints);

                        if(pHealth < pMaxHealth){

                            pHPBlock.innerHTML = pHealth;
                            console.log("The enemy flinched while you healed for " + threeCards[current].hitPoints);

                        }else{

                            pHPBlock.innerHTML = pMaxHealth;
                            console.log("The enemy flinched while you healed and reached your max HP.");

                        }
                    }

                }else if(npcCards[current].cardName === "Heal"){

                    console.log("Looks like you both needed a heal");

                    if(npcCards[current].cardName === "Heal"){
    
                        if(npcHPBlock.innerHTML == npcMaxHealth){
    
                            console.log("The enemy tries to heal but nothing happened");
    
                        }else if(npcHPBlock.innerHTML < npcMaxHealth){
    
                            npcHealth += (npcHPBlock.innerHTML - npcCards[current].hitPoints);
    
                            if(npcHealth < npcMaxHealth){
    
                                npcHPBlock.innerHTML = npcHealth;
                                console.log("The enemy feinted an attack and healed");
    
                            }else{
    
                                npcHPBlock.innerHTML = npcMaxHealth;
                                console.log("The enemy feinted an attack and healed");
    
                            }
                        }

                        if(pHPBlock.innerHTML == pMaxHealth){

                            console.log("You tried to heal but nothing happened...");
    
                        }else if(pHPBlock.innerHTML < pMaxHealth){
    
                            pHealth += (pHPBlock.innerHTML - threeCards[current].hitPoints);
    
                            if(pHealth < pMaxHealth){
    
                                pHPBlock.innerHTML = pHealth;
                                console.log("You healed for " + threeCards[current].hitPoints);
    
                            }else{
    
                                pHPBlock.innerHTML = pMaxHealth;
                                console.log("You healed and reached your max HP.");
    
                            }
                        }

                    }
                }    

            break;
            
            case "special":

                if(npcCards[current].cardName === "Attack"){

                    console.log("The enemy hits you with " + npcCards[current].hitPoints + " hitpoints.");
                    console.log("You hit the enemy with a Ki Blast ===o) dealing " + threeCards[current].hitPoints + " hitpoints.");

                    pHealth -= npcCards[current].hitPoints;
                    npcHealth -= threeCards[current].hitPoints;
                    
                    npcHPBlock.innerHTML = npcHealth;
                    pHPBlock.innerHTML = pHealth;
                    

                }else if(npcCards[current].cardName === "special"){

                    console.log("You both launch a ki blast! ===o)(o=== ");

                    var hitChance = Math.floor(Math.random() * ( 10 - 0));

                    if(hitChance > 5){

                        pHealth -= npcCards[current].hitPoints;
                        pHPBlock.innerHTML = pHealth;
                        console.log("Your ki blast ====O) was stronger and the enemy took 25 points of DMG!!")

                    }else if(hitChance == 5){

                        console.log("You both attacked with equal amount of force and no one took DMG !");

                    }else if(hitChance < 5){

                        npcHealth -= threeCards[current].hitPoints;
                    
                        npcHPBlock.innerHTML = npcHealth;

                        console.log("Your Ki blast was weaker =o)(O=== and you ended up taking the enemy's attack T.T");

                    }

                    
                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints < threeCards[current].hitPoints ){

                    console.log("You're attacking with a Ki blast ===o) and " + npcsArr[0].firstName + " defends with " + npcCards[current].hitPoints + " points some of the dammage was negated.");

                    let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;

                    npcHealth -= dmg;

                    npcHPBlock.innerHTML = npcHealth;

                }else if(npcCards[current].cardName === "Defence" && npcCards[current].hitPoints > threeCards[current].hitPoints ){

                    console.log("You're attacking with a Ki blast ===o) " + threeCards[current].hitPoints + "and " + npcsArr[0].firstName + "defends with " + npcCards[current].hitPoints + " points.");

                    let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                    pHealth -= dmg;

                    pHPBlock.innerHTML = pHealth;

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints == threeCards[current].hitPoints){

                    console.log("The enemy has successfully blocked your attack no DMG was dealt !")


                }else if(npcCards[current].cardName === "Evasion"){

                    console.log("the enemy attemps to evade your Ki blast ===o) with " + npcCards[current].hitPoints + "0% chance of success.")

                    let successRate = 10 - npcCards[current].hitPoints;

                    if(npcCards[current].hitPoints >= 10){

                        successRate = 10;

                    }

                    let calcEvaChance = Math.floor(Math.random() * ( max - 1));

                    console.log(" npc rolled " + calcEvaChance);

                    if(calcEvaChance > successRate){

                        npcDodge();
                        console.log("The enemy evades your attack !");

                    }else{

                        console.log("The enemy was too slow !");

                        npcHealth -= threeCards[current].hitPoints;
                        npcHPBlock.innerHTML = npcHealth;

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    console.log("You're attacking with a Ki blast ===o)");

                    npcHealth -= threeCards[current].hitPoints;
                    npcHPBlock.innerHTML = npcHealth;

                    if(npcHPBlock.innerHTML >= npcMaxHealth){

                        console.log("The enemy tries to heal but nothing happened");

                    }else if(npcHPBlock.innerHTML < npcMaxHealth){

                        npcHealth += npcCards[current].hitPoints;

                        if(npcHealth < npcMaxHealth){

                            npcHPBlock.innerHTML = npcHealth;
                            console.log("The enemy healed right after you attacked.");
                            

                        }else{

                            npcHPBlock.innerHTML = npcMaxHealth;
                            console.log("The enemy healed after you attacked and reached max HP.");

                        }

                    }

                }

            break;

        }


        ///////////Get Health from each turn and display it on screen///////////

        console.log("The current NPC health is " + npcHPBlock.innerHTML);         
        var npchpDecrease =  npcMaxHealth - npcHPBlock.innerHTML;
        var npcPercentage = (npchpDecrease/npcMaxHealth) * 100;

        var npcBar = document.getElementById("npc-health");
        npcBar.style.width = (100 - npcPercentage) +"%";

        console.log("The current Player health is " + pHPBlock.innerHTML);  
        var phpDecrease =  pMaxHealth - pHPBlock.innerHTML;
        var pPercentage = (phpDecrease/pMaxHealth) * 100;
        
        var pBar = document.getElementById("player-health");
        pBar.style.width = (100 - pPercentage) +"%";

        //////////////////////////////////////////////////////////////////////

        if(pHPBlock.innerHTML <= 0){

            console.log("Your health reached 0...");
            pHPBlock.innerHTML = 0;
            pBar.style.width = "0%";
            alert("Game Over You Lose...");

        }else if(npcHPBlock.innerHTML <= 0){

            console.log("The enemy's health reached 0.")
            npcHPBlock.innerHTML = 0;
            npcBar.style.width = "0%";
            alert("Game Over You Win !!!");

        }

        if(current <= 1){

           
            
            switch(current){

                case 0:

                    submitSelection.innerHTML = "Submit your first Card";

                break;    

                case 1:

                    submitSelection.innerHTML = "Submit your second Card";
                    
                break;  

                case 2:

                    submitSelection.innerHTML = "Submit your third Card";
                    
                break;  

            }
            
            current ++;
            console.log("Card " + (current + 1));

        }else{

            current = 0;
            threeCards = [];
            npcCards = [];

            draw.disabled = false;
            alert("time to draw new cards");
            
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

    var result = Math.floor(Math.random() * ( max - min));

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

function npcCardChance (){

    let min = 1;
    let max = 100; 
    var cardType;

    var result = Math.floor(Math.random() * ( max - min))

    if(result <= 10){

        cardType = nhealCard;

    }else if(result > 10 && result <= 35){

        cardType = nevaCard;

    }else if(result > 35 && result <= 65){

        cardType = ndefCard;

    }else if(result > 65 && result <= 95){

        cardType = natkCard;
    
    }else{

        cardType = nspecialAtk;

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

    var characterBonus = whatCharacter.bonus;
    var characterWeakness = whatCharacter.weakness;

    var atkBonus = 0;
    var defBonus = 0;
    var evaBonus = 0;
    var defDebuf = 0;
    var healDebuf = 0;
    var evaDebuf = 0;

    switch(whatCharacter.firstName){

        case "Miko":

           evaBonus = characterBonus;
           healDebuf = characterWeakness;

        break;  
        
        case "Jack":

           atkBonus = characterBonus;
           defDebuf = characterWeakness;
           
        break;

        case "Tiger":

           defBonus = characterBonus;
           evaDebuf = characterWeakness;
           
        break;

    }


    for( i = 0 ; i <= 4 ; i++ ){
 
        const playerCard = cardChance();
        
        switch(playerCard.cardName){

            case "Attack" :

            playerCard.hitPoints = Math.round(Math.random() * (10 - 1)) + 1;
            playerCard.hitPoints += atkBonus;

            

            playerCards.push(playerCard);

            break;

            case "Defence" : 

            playerCard.hitPoints = Math.round(Math.random() * (10 - 1)) + 1;
            playerCard.hitPoints += defBonus;
            playerCard.hitPoints -= defDebuf;

            

            playerCards.push(playerCard);

            break;

            case "Heal" : 

            playerCard.hitPoints = Math.round(Math.random() * (10 - 5)) + 5;
            playerCard.hitPoints -= healDebuf;

            

            playerCards.push(playerCard);

            break;

            case "Evasion" : 

            playerCard.hitPoints = Math.round(Math.random() * (10 - 3)) + 3;

            playerCard.hitPoints += evaBonus;
            playerCard.hitPoints -= evaDebuf;

            

            playerCards.push(playerCard);

            break;

            case "special" : 

            

            playerCards.push(playerCard);

            break;


        }
        
        console.log(playerCard);
        

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

    for( i = 0 ; i <= 2 ; i++ ){

 
        const npcCard = npcCardChance();
        
        switch(npcCard.cardName){

            case "Attack" :

            npcCard.hitPoints = Math.round(Math.random() * (10 - 1)) + 1;

            

            npcCards.push(npcCard);

            break;

            case "Defence" : 

            npcCard.hitPoints = Math.round(Math.random() * (10 - 1)) + 1;

            

            npcCards.push(npcCard);

            break;

            case "Heal" : 

            npcCard.hitPoints = Math.round(Math.random() * (10 - 5)) + 5;

            

            npcCards.push(npcCard);

            break;

            case "Evasion" : 

            npcCard.hitPoints = Math.round(Math.random() * (10 - 3)) + 3;

            

            npcCards.push(npcCard);

            break;

            case "special" : 

           

            npcCards.push(npcCard);

            break;


        }
    
        console.log(npcCard);

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