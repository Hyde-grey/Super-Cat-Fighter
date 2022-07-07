

///ELEMENTS///
var characterSelection = document.querySelector(".character-selection");
var selectors = document.querySelectorAll(".selector");
var fightLoading = document.querySelector(".fight-loading");

/// BGM / FX ///
var fight = new Audio('BGM/FX/fight.mp3');
var selectSound = new Audio('BGM/FX/select.wav');
var startSound = new Audio('BGM/FX/game-start.wav');

var current = 1;

///Characters Specs///
var characters = document.querySelectorAll(".character");

const miko = {

    firstName : "Miko",
    hp : 35

}

const jack = {

    firstName : "Jack",
    hp : 45

}

const tiger = {

    firstName : "Tiger",
    hp : 55

}

var characterArr = [ miko, jack, tiger ];

var whatCharacter = characterArr[1];


function selected(event){

    for( character of characters){

        character.classList.remove('selected');

    }

    event.target.classList.add("selected");
    selectSound.play();

    for(selector of selectors){

        selector.classList.add("hide");

    }

    for( i = 0 ; i <= characters.length -1; i++ ){

        if(characters[i].classList.contains("selected")){
    
           whatCharacter = characterArr[i];
           selectors[i].classList.remove("hide");
              
        }
    
    }

    
}

function selectingCharacter(){


    for( character of characters){

        character.addEventListener('click', selected);

    }

  
}

function prevCharacter(){

    selectSound.play();

    for( i = 0 ; i < characters.length ; i++ ){

        if(characters[i].classList.contains('selected')){

            current = i;
            
        }

    } 
    
    selectors[current].classList.add("hide");
    characters[current].classList.remove("selected");

    current --;
    

    if(current < 0){

        current = characters.length -1;
        
        characters[current].classList.add("selected");
        selectors[current].classList.remove("hide");

    }else if(current >= characters.length){

        current = 0;

        characters[current].classList.remove("selected");
        selectors[current].classList.add("hide");

    }

    characters[current].classList.add("selected");
    selectors[current].classList.remove("hide");
    
    whatCharacter = characterArr[current];
             
}

function nextCharacter(){

    console.log("next has been clicked");

    selectSound.play();

    for( i = 0 ; i < characters.length ; i++ ){

        if(characters[i].classList.contains('selected')){

            current = i ;
            
        }

    } 

    selectors[current].classList.add("hide");
    characters[current].classList.remove("selected");

    current ++;

    if(current >= characters.length){

        current = 0;
        characters[current].classList.add("selected");
        selectors[current].classList.remove("hide");

    }

    whatCharacter = characterArr[current];
    characters[current].classList.add("selected");
    selectors[current].classList.remove("hide");
    
}



function toFightScreen(whatCharacter){

    console.log(whatCharacter);
    fight.play();
    console.log(fightLoading);
    characterSelection.classList.add("hidden");
    fightLoading.style.transform = "translateX(-110%)";
    
    setTimeout(function(){
    
        document.querySelector(".fight").classList.remove("hide");
    
    }, 5000)
    

}

document.addEventListener('keydown', function(e) {
    
    switch (e.keyCode) {

        case 37:
            prevCharacter();
            break;

        case 39:
            nextCharacter();
            break;

        case 13:
            toFightScreen(whatCharacter.firstName);
            break;    

    }

});

selectingCharacter();

