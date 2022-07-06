
var characters = document.querySelectorAll(".character");

var selectors = document.querySelectorAll(".selector");

function selected(event){

    for( character of characters){

        character.classList.remove('selected');

    }

    event.target.classList.add("selected");


    for(selector of selectors){

        selector.classList.add("hide");

    }

    for( i = 0 ; i <= characters.length -1; i++ ){

        console.log('for loop has been triggered');

        if(characters[i].classList.contains('selected')){
    
          selectors[i].classList.remove("hide");
    
        }
    
    }

    

}

function selectingCharacter(){


    for( character of characters){

        character.addEventListener('click', selected);

    }

  
}

selectingCharacter();

