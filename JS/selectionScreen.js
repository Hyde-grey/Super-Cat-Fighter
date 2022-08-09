         ///ELEMENTS///
            var characterSelection = document.querySelector(".character-selection");
            var selectors = document.querySelectorAll(".selector");
            var fightLoading = document.querySelector(".fight-loading");
            var toFight = document.querySelector(".to-fight-screen");

            var fightBackground = document.querySelector(".fight-background-img");
            var npcSprite = document.querySelector(".npc");
            var playerSprite = document.querySelector(".player");
            var healthContainer = document.querySelector(".player-health-container");
            

            ///Characters Specs///
            
            var characters = Array.from(document.querySelectorAll(".character"));

            const mrMustache = {

                firstName: "Mr Mustache",
                hp: 40

            }

            var npcsArr = [mrMustache];
            
            const miko = {
                firstName: "Miko",
                hp: 35,
                bonus: 3,
                weakness: 2
            };

            const jack = {

                firstName: "Jack",
                hp: 40,
                bonus: 1,
                weakness: 2

            };

            const tiger = {

                firstName: "Tiger",
                hp: 45,
                bonus: 2,
                weakness: 2

            };

            var characterArr = [miko, jack, tiger];

            var whatCharacter = characterArr[1];

function isOnSelect(){

if(onSelectScreen === true){

console.log("onSelectScreen is = " + onSelectScreen + " You're now on the select screen");


            
            

            function selected(event) {

                for (character of characters) {

                    character.classList.remove('selected');

                }

                event.target.classList.add("selected");
                sfx.selectSound.play();

                for (selector of selectors) {

                    selector.classList.add("hide");

                }

                for (i = 0; i <= characters.length - 1; i++) {

                    if (characters[i].classList.contains("selected")) {

                        whatCharacter = characterArr[i];
                        selectors[i].classList.remove("hide");

                    }

                }

                if (event.target.classList.contains("selected")) {

                    toFightScreen(whatCharacter.firstName);

                }


            }
            

            function selectingCharacter() {
            
                charactersInfoDisplay(1);

                leftButton.addEventListener('click', prevCharacter);
                
                rightButton.addEventListener('click', nextCharacter);
                
                aButton.addEventListener("click", function(){
                
                if(onFightScreen === false){
                
                    toFightScreen(whatCharacter.firstName);
                
                        this.removeEventListener('click',arguments.callee);
                        
                }else{
                
                this.removeEventListener('click',arguments.callee);
                
                }
                
                });
                
                startButton.addEventListener("click", function(){
                
                if(onFightScreen === false){
                
                toFightScreen(whatCharacter.firstName);
                
                        this.removeEventListener('click',arguments.callee);
                        
                }else{
                
                this.removeEventListener('click',arguments.callee);
                
                }
                
                });
                

                for (character of characters) {

                    character.addEventListener('click', selected);
                    character.addEventListener('mouseover', function(event){


                        sfx.selectSound.play();

                        for(character of characters){

                            character.classList.remove("selected");

                        }

                        for(selector of selectors){

                            selector.classList.add("hide");

                        }

                        event.target.classList.add("selected");
                        

                        for( i = 0 ; i < selectors.length ; i++){

                            if(characters[i].classList.contains("selected")){

                                selectors[i].classList.remove("hide");
                                charactersInfoDisplay(i);

                            }

                        }


                    })

                }


            }

            function charactersInfoDisplay(number){

                switch(number){

                    case 0:

                        document.querySelector(".characters-infos").innerHTML ="Miko has higher evade chance but lower health."

                    break;

                    case 1:

                        document.querySelector(".characters-infos").innerHTML ="Jack has higher ATK but weaker DEF."

                    break;

                    case 2:

                        document.querySelector(".characters-infos").innerHTML ="Tiger has higher DEF and health but lower ATK."

                    break;
                }


            }

            function prevCharacter() {


                sfx.selectSound.play();

                for (i = 0; i < characters.length; i++) {

                    if (characters[i].classList.contains('selected')) {

                        current = i;
                        charactersInfoDisplay(i);

                    }

                }

                selectors[current].classList.add("hide");
                characters[current].classList.remove("selected");

                current--;
                charactersInfoDisplay(current);


                if (current < 0) {

                    current = characters.length - 1;

                    characters[current].classList.add("selected");
                    selectors[current].classList.remove("hide");
                    charactersInfoDisplay(current);

                } else if (current >= characters.length) {

                    current = 0;

                    charactersInfoDisplay(current);
                    characters[current].classList.remove("selected");
                    selectors[current].classList.add("hide");

                }

                characters[current].classList.add("selected");
                selectors[current].classList.remove("hide");

                whatCharacter = characterArr[current];

            }

            function nextCharacter() {

                sfx.selectSound.play();

                for (i = 0; i < characters.length; i++) {

                    if (characters[i].classList.contains('selected')) {

                        current = i;
                        

                    }

                }

                selectors[current].classList.add("hide");
                characters[current].classList.remove("selected");

                current++;
                charactersInfoDisplay(current);

                if (current >= characters.length) {

                    current = 0;
                    characters[current].classList.add("selected");
                    selectors[current].classList.remove("hide");
                    charactersInfoDisplay(current);

                }

                whatCharacter = characterArr[current];
                characters[current].classList.add("selected");
                selectors[current].classList.remove("hide");
                charactersInfoDisplay(current);

            }

            function loadCharacter(whatCharacter){

                let playerName = whatCharacter;
                var playerHP;

                    for (character of characterArr) {

                        if (character.firstName === whatCharacter) {

                            playerHP = character.hp;

                        }

                    }

                let hpBlock = document.querySelector(".player-hp");
                let nameBlock = document.querySelector(".character-name");

                nameBlock.innerHTML = playerName;
                hpBlock.innerHTML = playerHP;



            }

            function loadNPC(){

                let npcName = npcsArr[0].firstName;
                var npcHP = npcsArr[0].hp;

                    // for (character of characterArr) {

                    //     if (character.firstName === whatCharacter) {

                    //         playerHP = character.hp;

                    //     }

                    // }

                let hpBlock = document.querySelector(".npc-hp");
                let nameBlock = document.querySelector(".npc-name");

                nameBlock.innerHTML = npcName;
                hpBlock.innerHTML = npcHP;

            }

            function addUltraGaugeBar(){

                var gaugeContainer = document.createElement("div");
                gaugeContainer.classList.add("gauge-container");
                
                var gaugeBoxOne = document.createElement("div");
                gaugeContainer.appendChild(gaugeBoxOne);
                gaugeBoxOne.classList.add("gaugeBoxOne");
                
                var gaugeBoxTwo = document.createElement("div");
                gaugeBoxTwo.classList.add("gaugeBoxTwo");
                gaugeContainer.appendChild(gaugeBoxTwo);
                
                var gaugeBoxThree = document.createElement("div");
                gaugeBoxThree.classList.add("gaugeBoxThree");
                gaugeContainer.appendChild(gaugeBoxThree);
                healthContainer.appendChild(gaugeContainer);


            }

            var toFightScreen = function(whatCharacter) {
            
            
            leftButton.removeEventListener('click', prevCharacter);
                rightButton.removeEventListener('click', nextCharacter);
                
                aButton.removeEventListener("click", toFightScreen);
                
                startButton.removeEventListener("click", toFightScreen);

                onSelectScreen = false;
            
                sfx.startButtonSound.play();
                bgms.selectionScreenBGM.stop();
                sfx.fightScream.play();
                characterSelection.remove();
                header.remove();
                fightLoading.style.transform = "translateX(-100%)";
                
                fightLoading.style.opacity = "1";

                setTimeout(function () {
                
                onFightScreen = true;

                    fightLoading.remove();
                    document.querySelector(".fight").classList.remove("hide");
                    npcSprite.style.transform = "translateX(0)";
                    npcSprite.style.opacity = 1;
                    playerSprite.style.opacity = 1;
                    playerSprite.style.transform = "translateX(0)";
                    // fightBackground.style.opacity = "1";

                    bgms.mrMustacheBGM.play();
                    
                    document.querySelector(".gamepad").style.transform = "translateY(150px)";
                    
                    isOnFight();

                    loadNPC();

                    switch (whatCharacter) {

                        case "Miko":
                            console.log("miko was selected");
                            loadCharacter(whatCharacter);
                            document.querySelector(".miko_stance").classList.remove("hidden");
                            document.querySelector(".miko_stance").classList.add(".character-sprite");
                            addUltraGaugeBar();
                            break;

                        case "Jack":
                            console.log("Jack was selected");
                            loadCharacter(whatCharacter);
                            document.querySelector(".jack_stance").classList.remove("hidden");
                            document.querySelector(".jack_stance").classList.add(".character-sprite");
                            break;

                        case "Tiger":
                            console.log("Tiger was selected");
                            loadCharacter(whatCharacter);
                            document.querySelector(".tiger_stance").classList.remove("hidden");
                            document.querySelector(".tiger_stance").classList.add(".character-sprite");
                            addUltraGaugeBar();
                            break;

                    }

                }, 5000);


            }

            document.addEventListener('keydown', function (e) {

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

            characters.onload = function(){ 
                
                console.log(" characters has been loaded ");
                

                characters.addEventListener('mouseover', function(event){

                for (character of characters) {

                    character.classList.remove("selected");

                }

                event.target.classList.add("selected");

                });
            }
    
    selectingCharacter();
    
}
}
    
    
    