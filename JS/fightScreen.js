    
var draw = document.getElementById("draw");
var drawnCards = document.querySelector(".drawnCards");
var submitSelection = document.querySelector(".submit-selection");

var pHPBlock = document.querySelector(".player-hp");
var pBar = document.getElementById("player-health");
var npcHPBlock = document.querySelector(".npc-hp");
var npcBar = document.getElementById("npc-health");
var npcSprite = document.querySelector(".npc");
var currentCharacter = document.querySelector(".player");
var characterSprite = document.querySelector(".character-sprite");
var menuContent = document.querySelector(".menu-content");
var fightDialogue = document.querySelector(".fight-dialogue");


var threeCards = [];
var selectedCards = [];

var turns = 0;
var current = 0; 
var npcHealth = 40;

var pHealth;
var pMaxHealth;
var npcMaxHealth;

var currentCharacter;
var nIntervID;


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

function atkSound(){

    sfx.punchSound.play();

}

function playerAtk(){

    let elem;

    switch(whatCharacter.firstName){

        case "Miko":
        console.log("Miko is attaking");
        elem = document.querySelector(".miko_stance");
        elem.src = "IMG/miko_atk.png";

        

        setTimeout(function(){

            elem.src = "IMG/miko_stance.png"

        },700);

        break;

        case "Jack" :
            console.log("Jack is attaking");
            elem = document.querySelector(".jack_stance");
            elem.src = "IMG/jack_atk.png";

            

            setTimeout(function(){

                atkSound();
                npcTakesDMGAnimation();
                let extraHit =Math.round(Math.random() * (3 - 1)) + 1
                npcTakesDMG(extraHit);

            },600);
    
            setTimeout(function(){
    
                elem.src = "IMG/jack_stance.png"
    
            },1000);

        break;

        case "Tiger" : 
        console.log("tiger is attaking");
        elem = document.querySelector(".tiger_stance");
        elem.src = "IMG/tiger_atk.png";

        

        setTimeout(function(){

            elem.src = "IMG/tiger_stance.png"

        },1000);

        break;

    }


}

function playerKiBlast(){


    playerAtk();
    let elem = document.createElement("img");
    elem.classList.add("effect-sprites");
    elem.src = "IMG/player-ki-blast.png";

    currentCharacter.appendChild(elem);

    sfx.kiBlastSound.play();

    setTimeout(function(){

        elem.remove();

    },500);  

}

function playerDef(){

    let elem;

    switch(whatCharacter.firstName){

        case "Miko":
        console.log("Miko is defending");
        elem = document.querySelector(".miko_stance");
        elem.src = "IMG/miko_def.png";

        setTimeout(function(){

            elem.src = "IMG/miko_stance.png"

        },700);

        break;

        case "Jack" :
            console.log("Jack is defending");
            elem = document.querySelector(".jack_stance");
            elem.src = "IMG/jack_def.png";
    
            setTimeout(function(){
    
                elem.src = "IMG/jack_stance.png"
    
            },700);

        break;

        case "Tiger" : 
        console.log("tiger is defending");
        elem = document.querySelector(".tiger_stance");
        elem.src = "IMG/tiger_def.png";

        setTimeout(function(){

            elem.src = "IMG/tiger_stance.png"

        },1000);

        break;

    }


}

function npcAtk(){

    let elem;

    elem = document.querySelector(".mr-mustache");

    elem.src = "IMG/mr_mustache_atk.png";

    setTimeout(function(){

        elem.src = "IMG/mr-mustache.png"

    },700);

}

function npcDef(){

    let elem;

    elem = document.querySelector(".mr-mustache");

    elem.src = "IMG/mr_mustache_def.png";

    setTimeout(function(){

        elem.src = "IMG/mr-mustache.png"

    },600);

}


function npcDodge(){

    npcSprite.animate([

        { transform: "translatex(50%)" },
        { transform: "translatex(55%)" },
        { transform: "translatex(50%)" }
        
    ],
    {duration: 400});

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


    atkSound();
    
    playerTakesDMGAnimation();

    let elem = document.createElement("div");
    elem.classList.add("dmg-info");
    elem.innerHTML = "-" + npcCard + "HP";
    currentCharacter.appendChild(elem);
    
    elem.animate([

        { transform: "translatey(-20%)" },
        { opacity : 0 }
    
    ],
    {duration: 2000});

    setTimeout(function(){

        elem.remove();

    },2000)

    pHealth -= npcCard;
    
    pHPBlock.innerHTML = pHealth;
    

}

function npcTakesDMG(pCard){

    atkSound();

    npcTakesDMGAnimation();

    let elem = document.createElement("div");
    elem.classList.add("npc-dmg-info");
    elem.innerHTML = "-" + pCard + "HP";
    currentCharacter.appendChild(elem);
    
    elem.animate([

        { transform: "translatey(-20%)" },
        { opacity : 0 }
    
    ],
    {duration: 2000});

    setTimeout(function(){

        elem.remove();

    },2000)

    npcHealth -= pCard;
    npcHPBlock.innerHTML = npcHealth;
    

}

function playerHeal(pCard){

    function addHealSprite(){

        var elem = document.createElement("img");
        elem.classList.add("effect-sprites");
        elem.src = 'IMG/player_healing.png';
        currentCharacter.appendChild(elem);

        sfx.healingSound.play();

        setTimeout(function(){

            elem.remove();
            console.log("Elem has been removed.")
            
        }, 1000)

        let healElem = document.createElement("div");
        healElem.classList.add("heal-info");
        healElem.innerHTML = "-" + pCard + "HP";
        currentCharacter.appendChild(healElem);
        
        healElem.animate([
    
            { transform: "translatey(-50%)" },
            { opacity: "0"}
        
        ],
        {duration: 2000});
    
        setTimeout(function(){
    
            healElem.remove();
    
        },2000)

    }

    if(pHPBlock.innerHTML >= pMaxHealth){

        fightDialogue.innerHTML = "You tried to heal but nothing happened";

    }else if(pHPBlock.innerHTML < pMaxHealth){

        pHealth = (pCard + parseInt(pHPBlock.innerHTML));
        console.log("phealth is " + pHealth);

        if(pHealth < pMaxHealth){

            pHPBlock.innerHTML = pHealth;
            fightDialogue.innerHTML = "You healed for " + pCard + " HP.";
            addHealSprite();
            

        }else if(pHealth >= pMaxHealth){

            pHPBlock.innerHTML = pMaxHealth;
            fightDialogue.innerHTML = "You healed for " + pCard + " HP and reached max HP.";
            addHealSprite();

        }

    }

}

function npcHeal(npcCard){

    function addNpcHealingSprite(){

        var elem = document.createElement("img");
            elem.classList.add("effect-sprites");
            elem.src = 'IMG/npc_healing.png';
            npcSprite.appendChild(elem);
    
            sfx.healingSound.play();
    
            setTimeout(function(){
    
                elem.remove();
                console.log("Elem has been removed.")
                
            }, 1000)
    
            let healElem = document.createElement("div");
            healElem.classList.add("npc-heal-info");
            healElem.innerHTML = "-" + npcCard + "HP";
            npcSprite.appendChild(healElem);
            
            healElem.animate([
        
                { transform: "translatey(-30%)" },
                { opacity: "0"}
            
            ],
            {duration: 2000});
        
            setTimeout(function(){
        
                healElem.remove();
        
            },2000)
    
    }


    if(npcHPBlock.innerHTML >= npcMaxHealth){

        fightDialogue.innerHTML = "The enemy tries to heal but nothing happened";

    }else if(npcHPBlock.innerHTML < npcMaxHealth){

        npcHealth = (npcCard + parseInt(npcHPBlock.innerHTML));

        if(npcHealth < npcMaxHealth){

            addNpcHealingSprite();

            npcHPBlock.innerHTML = npcHealth;
            fightDialogue.innerHTML ="The enemy healed for " + npcCard + " HP.";
            

        }else if(npcHealth >= npcMaxHealth){

            addNpcHealingSprite();

            npcHPBlock.innerHTML = npcMaxHealth;
            fightDialogue.innerHTML = "The enemy healed for " + npcCard + " points and reached max HP.";

        }

    }

}

////////////////////////////////////////END OF DODGING ANIMATION/////////////////////////////////////

/////////////////////////////////////////////GETTING HIT ANIMATION///////////////////////////////////////

function playerTakesDMGAnimation(){

    currentCharacter.animate([

        { transform: "translatex(-50%)" },
        { transform: "translatex(-51%)" },
        { transform: "translatex(-49%)" },
        { transform: "translatex(-51%)" },
        { transform: "translatex(-49%)" },
        { transform: "translatex(-50%)" },
    ],
    {duration: 500});

}

function npcTakesDMGAnimation(){

    npcSprite.animate([

        { transform: "translatex(50%)" },
        { transform: "translatex(51%)" },
        { transform: "translatex(49%)" },
        { transform: "translatex(51%)" },
        { transform: "translatex(49%)" },
        { transform: "translatex(50%)" },
    ],
    {duration: 500});

}

/////////////////////////////////////////////GETTING HIT ANIMATION END///////////////////////////////////////

function startRound(){

    menuContent.classList.add("hidden");
    fightDialogue.classList.remove("hidden");

    submitCardsSelection();
    turns ++;

    nIntervID = setInterval(function(){

        
        if( turns < 3){

            submitCardsSelection();
            turns ++;
            console.log("interval is launched");
            console.log("turn is " + turns);
            nIntervID;
    
        }else if(turns == 3){
    
            console.log("interval was stopped");
           
            clearInterval(nIntervID);
            turns = 0;
            menuContent.classList.remove("hidden");
            fightDialogue.classList.add("hidden");

            playerCards = [];
            drawnCards.innerHTML = "";
            playerCards.length = 0;
           
    
        }
    
    }, 4000);

}

function playerHealthChange(){

    console.log("The current Player health is " + pHPBlock.innerHTML);  
    var phpDecrease =  (pMaxHealth - parseInt(pHPBlock.innerHTML));
    var pPercentage = Math.floor((phpDecrease/pMaxHealth) * 100);
    
    
    let newHP = 100 - pPercentage;
   
    pBar.style.width = newHP +"%";

    if ( newHP < 20 ){

        pBar.style.backgroundColor = "#f9332c";

    }else if ( newHP > 20){

        pBar.style.backgroundColor = "aliceblue";

    }

}

function npcHealthChange(){

    
    console.log("The current NPC health is " + npcHPBlock.innerHTML);         
    var npchpDecrease =  (npcMaxHealth - parseInt(npcHPBlock.innerHTML));
    var npcPercentage = Math.floor((npchpDecrease/npcMaxHealth) * 100);

    let newHP = 100 - npcPercentage;
    
    if(newHP > 100){
    
    newHP = 100;
    
    }

    npcBar.style.width = newHP +"%";

    if ( newHP < 20 ){

        npcBar.style.backgroundColor = "#f9332c";

    }else if ( newHP > 20){

        npcBar.style.backgroundColor = "aliceblue";

    }


}



function submitCardsSelection(){

    pHealth = pHPBlock.innerHTML;
    pMaxHealth = whatCharacter.hp;
    npcMaxHealth = 40;

        switch(threeCards[current].cardName){

            case "Attack":
            
                playerAtk();

                if(npcCards[current].cardName === "Attack"){

                    npcAtk();
                    npcTakesDMG(threeCards[current].hitPoints);
                    playerTakesDMG(npcCards[current].hitPoints);

                    fightDialogue.innerHTML = "The enemy hits you with " + npcCards[current].hitPoints + " hitpoints. <br> And you hit the enemy with " + threeCards[current].hitPoints + "  hitpoints";

                }else if(npcCards[current].cardName === "special"){

                    fightDialogue.innerHTML ="The Enemy hits you with a Ki blast of " + npcCards[current].hitPoints + " hitpoints. </br> You hit the enemy with " + threeCards[current].hitPoints + " hitpoints.";

                    playerTakesDMG(npcCards[current].hitPoints);
                    npcTakesDMG(threeCards[current].hitPoints);

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints < threeCards[current].hitPoints ){

                    fightDialogue.innerHTML = "You're attacking with " + threeCards[current].hitPoints + " and " + npcsArr[0].firstName + " defends with " + npcCards[current].hitPoints + " points.";

                    let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;

                    npcDef();
                    npcTakesDMG(dmg);
                    sfx.blockedSound.play();
                    

                }else if(npcCards[current].cardName === "Defence" && npcCards[current].hitPoints > threeCards[current].hitPoints ){

                    fightDialogue.innerHTML = "You're attacking with " + threeCards[current].hitPoints + " and " + npcsArr[0].firstName + " defends with " + npcCards[current].hitPoints + " points.";

                    let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;
                    
                    npcDef();
                    playerTakesDMG(dmg);
                    sfx.blockedSound.play();

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints == threeCards[current].hitPoints){

                    fightDialogue.innerHTML = "The enemy has successfully blocked your attack no DMG was dealt !";
                    npcDef();
                    sfx.blockedSound.play();

                }else if(npcCards[current].cardName === "Evasion"){

                    fightDialogue.innerHTML = "the enemy attemps to evade your attack with " + npcCards[current].hitPoints + "0% chance of success.";

                    let successRate = npcCards[current].hitPoints;
                    let max = 10;
                    let evadeChance = max - successRate;

                    if(npcCards[current].hitPoints > 10){

                        successRate = 10;
                        npcDodge();
                        sfx.dodgingSound.play();
                        fightDialogue.innerHTML = "The enemy evades your attack !";
                        break;

                    }

                    let calcEvaChance = Math.floor(Math.random() * ( max - 1) +1);

                    console.log(" npc rolled " + calcEvaChance);

                    if(calcEvaChance >= evadeChance){

                        npcDodge();
                        sfx.dodgingSound.play();
                        fightDialogue.innerHTML = "The enemy evades your attack !";

                        
                    }else{

                       
                        fightDialogue.innerHTML = "The enemy was too slow and took " + threeCards[current].hitPoints + " hitpoints !";
                        npcTakesDMG(threeCards[current].hitPoints);
                      

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    fightDialogue.innerHTML = "You deal " + threeCards[current].hitPoints + " hitpoints.";

                    npcTakesDMG(threeCards[current].hitPoints);

                    npcHeal(npcCards[current].hitPoints);

                }

            break;

            case "Defence":

                playerDef();
                sfx.blockedSound.play();

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    npcAtk();

                    if(threeCards[current].hitPoints < npcCards[current].hitPoints){

                        let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                        pHealth -= dmg;

                        fightDialogue.innerHTML = "The enemy attacks you for " + npcCards[current].hitPoints + " hitpoints but you've blocked " + threeCards[current].hitPoints + " of DMG ";

                        pHPBlock.innerHTML = pHealth;

                    }else if(threeCards[current].hitPoints > npcCards[current].hitPoints){

                        let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;;

                        npcTakesDMG(dmg);

                        fightDialogue.innerHTML = "You've managed to counter the enemy some of the dmg is returned!";

                        

                    }
                    
                }else if(npcCards[current].cardName === "Defence"){

                    fightDialogue.innerHTML = "You both put up your guards";
                    npcDef();

                }else if(npcCards[current].cardName === "Evasion"){

                    fightDialogue.innerHTML ="You feinted an attack and made the enemy flinch.";
                    npcDodge();

                }else if( npcCards[current].cardName === "Heal"){

                    npcHeal(npcCards[current].hitPoints);

                }

            break;

            case "Evasion":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    npcAtk();

                    let successRate = 10 - threeCards[current].hitPoints;

                    if(threeCards[current].hitPoints >= 10){

                        successRate = 10;
                        playerDodge();
                        sfx.dodgingSound.play();
                        fightDialogue.innerHTML = "You dodged the enemy's attack !";
                        break;
                        

                    }

                    let calcEvaChance = Math.floor(Math.random() * ( 10 - 1) +1);

                    console.log(" You rolled " + calcEvaChance);

                    if(calcEvaChance >= successRate){

                        fightDialogue.innerHTML = "The enemy attacks with " + npcCards[current].hitPoints + " You attemps to evade the enemy's attack with " + threeCards[current].hitPoints + "0% chance of success. <br> You evade the attack !";
                        playerDodge();
                        sfx.dodgingSound.play();

                    }else{

                        fightDialogue.innerHTML = "The enemy attacks with " + npcCards[current].hitPoints + " You attemps to evade the enemy's attack with " + threeCards[current].hitPoints + "0% chance of success. <br> You were too slow and took the attack !";

                        playerTakesDMG(npcCards[current].hitPoints);

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    playerDodge();
                    sfx.dodgingSound.play();
                    
  
                    npcHeal(npcCards[current].hitPoints);

                }else if(npcCards[current].cardName === "Evasion"){

                    fightDialogue.innerHTML = "You both though the other was going to attack and moved to dodge.";
                    npcDodge();
                    playerDodge();
                    
                    sfx.dodgingSound.play();

                }else if(npcCards[current].cardName === "Defence"){

                    playerDodge();
                    
                    sfx.dodgingSound.play();
                    
                    fightDialogue.innerHTML = "You moved while the enemy puts his guard up.";
                    npcDef();
                }       

            break;

            case "Heal":

                if(npcCards[current].cardName === "Attack" || npcCards[current].cardName === "special"){

                    npcAtk();

                    playerTakesDMG(npcCards[current].hitPoints);
                    playerHeal(threeCards[current].hitPoints);
                    

                }else if(npcCards[current].cardName === "Defence"){
                    
                    playerHeal(threeCards[current].hitPoints);
                    npcDef();


                }else if(npcCards[current].cardName === "Evasion"){

                    npcDodge();
                    
                    
                    sfx.dodgingSound.play();
                    playerHeal(threeCards[current].hitPoints);
   

                }else if(npcCards[current].cardName === "Heal"){

                    fightDialogue.innerHTML = "Looks like you both needed a heal";

                    if(npcCards[current].cardName === "Heal"){
    
                        npcHeal(npcCards[current].hitPoints);

                        playerHeal(threeCards[current].hitPoints);

                        
                    }
                }    

            break;
            
            case "special":

                playerKiBlast();

                if(npcCards[current].cardName === "Attack"){

                    npcAtk();

                    fightDialogue.innerHTML ="The enemy hits you with " + npcCards[current].hitPoints + " hitpoints. <br> You hit the enemy with a Ki Blast ===o) dealing " + threeCards[current].hitPoints + " hitpoints.";

                    npcTakesDMG(threeCards[current].hitPoints);
                    playerTakesDMG(npcCards[current].hitPoints);

                }else if(npcCards[current].cardName === "special"){

                    fightDialogue.innerHTML = "You both launch a ki blast! ===o)(o=== ";

                    var hitChance = Math.floor(Math.random() * ( 10 - 0));

                    if(hitChance > 5){

                        npcTakesDMG(threeCards[current].hitPoints);
                        fightDialogue.innerHTML = "Your ki blast ====O) was stronger and the enemy took 25 points of DMG!!";

                    }else if(hitChance == 5){

                        fightDialogue.innerHTML = "You both attacked with equal amount of force and no one took DMG !";

                    }else if(hitChance < 5){

                        
                        playerTakesDMG(npcCards[current].hitPoints);
                        fightDialogue.innerHTML = "Your Ki blast was weaker =o)(O=== and you ended up taking the enemy's attack T.T";

                    }

                    
                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints < threeCards[current].hitPoints ){

                    fightDialogue.innerHTML = "You're attacking with a Ki blast ===o) and " + npcsArr[0].firstName + " defends with " + npcCards[current].hitPoints + " points some of the dammage was negated.";

                    let dmg = threeCards[current].hitPoints - npcCards[current].hitPoints;

                    npcDef();
                    npcTakesDMG(dmg);
                    sfx.blockedSound.play();

                }else if(npcCards[current].cardName === "Defence" && npcCards[current].hitPoints > threeCards[current].hitPoints ){

                    fightDialogue.innerHTML = "You're attacking with a Ki blast ===o) " + threeCards[current].hitPoints + "and " + npcsArr[0].firstName + "defends with " + npcCards[current].hitPoints + " points.";

                    let dmg = npcCards[current].hitPoints - threeCards[current].hitPoints;

                    npcDef();
                    playerTakesDMG(dmg);
                    sfx.blockedSound.play();

                }else if( npcCards[current].cardName === "Defence" && npcCards[current].hitPoints == threeCards[current].hitPoints){

                    fightDialogue.innerHTML = "The enemy has successfully blocked your attack no DMG was dealt !";
                    npcDef();
                    sfx.blockedSound.play();

                }else if(npcCards[current].cardName === "Evasion"){

                    fightDialogue.innerHTML = "the enemy attemps to evade your Ki blast ===o) with " + npcCards[current].hitPoints + "0% chance of success.";

                    let successRate = 10 - npcCards[current].hitPoints;

                    if(npcCards[current].hitPoints >= 10){

                        successRate = 10;
                        
                    sfx.dodgingSound.play();
                    npcDodge();
                    fightDialogue.innerHTML = "The enemy evades your attack !";
                    return;

                    }

                    let calcEvaChance = Math.floor(Math.random() * ( max - 1));

                    console.log(" npc rolled " + calcEvaChance);

                    if(calcEvaChance >= successRate){


                        npcDodge();
                        fightDialogue.innerHTML = "The enemy evades your attack !";

                        
                    }else{

                        fightDialogue.innerHTML ="The enemy was too slow !";
                        npcTakesDMG(threeCards[current].hitPoints);

                    }
                    
                }else if( npcCards[current].cardName === "Heal"){

                    fightDialogue.innerHTML = "You're attacking with a Ki blast ===o)";

                    npcHealth -= threeCards[current].hitPoints;
                    npcHPBlock.innerHTML = npcHealth;

                    npcHeal(npcCards[current].hitPoints);

                }

            break;

        }


        ///////////Get Health from each turn and display it on screen///////////

        playerHealthChange();
        npcHealthChange();
        
        //////////////////////////////////////////////////////////////////////

        if(pHPBlock.innerHTML <= 0){

            pHPBlock.innerHTML = "0";
            pBar.style.width = "0%";
            characterSprite.style.opacity = "0";

            clearInterval(nIntervID);
            console.log("interval was stopped Game is over");

            fightDialogue.innerHTML.innerHTML = "Your health reached 0... <br> Game Over You Lose...";

            setTimeout(function(){

                location.reload();

            },10000)
            

        }else if(npcHPBlock.innerHTML <= 0){

            npcHPBlock.innerHTML = "0";
            npcBar.style.width = "0%";

            npcSprite.style.opacity = "0";

            clearInterval(nIntervID);
            console.log("interval was stopped Game is over");

            fightDialogue.innerHTML = "The enemy's health reached 0. <br> Game Over You Win !!!";            

            setTimeout(function(){

                location.reload();

            },3000)

        }

        if(current <= 1){
            
            switch(current){
   

                case 0:

                    submitSelection.innerHTML = "Second cards";
                    
                break;  

                case 1:

                    submitSelection.innerHTML = "Third Card";
                    
                break;  

            }
            
            current ++;
            console.log("Card " + (current));

        }else{

            current = 0;
            threeCards = [];
            npcCards = [];

            draw.disabled = false;
            submitSelection.innerHTML = "Time to draw new cards";
            
        }

    }

   

function addToSelection(value){

    sfx.selectSound.play();

    let cards = Array.from(document.querySelectorAll(".card"));

    const index = cards.indexOf(value);

    console.log(index);

    console.log(playerCards);

    selectedCards.push(value);
    threeCards.push(playerCards[index]);

    if(threeCards.length === 3){

        submitSelection.classList.remove("hidden");

    }

}

function removeFromSelection(value){

    sfx.selectSound.play();
    
    let cards = Array.from(document.querySelectorAll(".card"));
    
    const index = cards.indexOf(value);

    selectedCards.splice(index,1);
    threeCards.splice(index,1);
    console.log("ThreeCards length is " + threeCards.length)

    if(threeCards.length < 3){

        submitSelection.classList.add("hidden");

    }

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

let deepCopy;

    for( i = 0 ; i <= 4 ; i++ ){
 
        const playerCard = cardChance();
        
        
        switch(playerCard.cardName){

            case "Attack" :

            playerCard.hitPoints = Math.round(Math.random() * (10 - 1)) + 1;
            playerCard.hitPoints += atkBonus;

            
            deepCopy = JSON.parse(JSON.stringify(playerCard));
            playerCards.push(deepCopy);

            break;

            case "Defence" : 

            playerCard.hitPoints = Math.round(Math.random() * (10 - 1)) + 1;
            playerCard.hitPoints += defBonus;
            playerCard.hitPoints -= defDebuf;

            

            deepCopy = JSON.parse(JSON.stringify(playerCard));
            playerCards.push(deepCopy);

            break;

            case "Heal" : 

            playerCard.hitPoints = Math.round(Math.random() * (10 - 5)) + 5;
            playerCard.hitPoints -= healDebuf;

            

            deepCopy = JSON.parse(JSON.stringify(playerCard));
            playerCards.push(deepCopy);

            break;

            case "Evasion" : 

            playerCard.hitPoints = Math.round(Math.random() * (10 - 3)) + 3;

            playerCard.hitPoints += evaBonus;
            playerCard.hitPoints -= evaDebuf;

            

            deepCopy = JSON.parse(JSON.stringify(playerCard));
            playerCards.push(deepCopy);

            break;

            case "special" : 

            

            deepCopy = JSON.parse(JSON.stringify(playerCard));
            playerCards.push(deepCopy);

            break;


        }
        
        
        console.log(deepCopy);
        

        let selector = document.createElement("div");
        drawnCards.appendChild(selector);
        selector.classList.add("card");
        selector.addEventListener("click", function(event){

            if(!event.target.classList.contains("selected-card") && threeCards.length < 3 ){
        
                this.classList.add("selected-card");
                console.log(this);
                addToSelection(this);
        
            }else if(event.target.classList.contains("selected-card")){
        
                this.classList.remove("selected-card");
                console.log(this);
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

    console.log( playerCards);

    
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

    sfx.selectSound.play();

    npcRandomCards();
    playerRandomCards();

    // var submitSelection = document.createElement("div");
    // drawnCards.appendChild(submitSelection);
    // submitSelection.classList.add("submit-selection");
    var submitSelection = document.querySelector(".submit-selection")
    submitSelection.innerHTML = "Submit";
    submitSelection.classList.add("hidden");
    submitSelection.addEventListener("click", startRound);
    draw.disabled = true;

}

draw.addEventListener("click", drawCards);