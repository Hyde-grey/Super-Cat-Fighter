
    ///ELEMENTS///
    var characterSelection = document.querySelector(".character-selection");
    var selectors = document.querySelectorAll(".selector");
    var fightLoading = document.querySelector(".fight-loading");
    var toFight = document.querySelector(".to-fight-screen");

    var fightBackground = document.querySelector(".fight-background-img");
    var npcSprite = document.querySelector(".npc");
    var playerSprite = document.querySelector(".player");

    /// BGM / FX ///
    var fight = new Audio('BGM/FX/fight.mp3');
    var selectSound = new Audio('BGM/FX/select.wav');
    var startSound = new Audio('BGM/FX/game-start.wav');
    var firstFight = new Audio('BGM/mr_mustache.mp3');

    var current = 1;

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
        hp: 45,
        bonus: 2,
        weakness: 2

    };

    const tiger = {

        firstName: "Tiger",
        hp: 55,
        bonus: 2,
        weakness: 2

    };

    var characterArr = [miko, jack, tiger];

    var whatCharacter = characterArr[1];

    function selected(event) {

        for (character of characters) {

            character.classList.remove('selected');

        }

        event.target.classList.add("selected");
        selectSound.play();

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


        for (character of characters) {

            character.addEventListener('click', selected);
            character.addEventListener('mouseover', function(event){


                selectSound.play();
                selectSound.volume = 0.20;

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


        selectSound.play();
        selectSound.volume = 0.20;

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

        selectSound.play();
        selectSound.volume = 0.20;

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


    function toFightScreen(whatCharacter) {

        startSound.play();
        startSound.volume = 0.20;
        fight.play();
        fight.volume = 0.20;
        characterSelection.remove();
        header.remove();
        fightLoading.style.transform = "translateX(0%)";
        fightLoading.style.opacity = "1";

        setTimeout(function () {

            fightLoading.remove();
            document.querySelector(".fight").classList.remove("hide");
            npcSprite.style.transform = "translateX(50%)";
            playerSprite.style.transform = "translateX(-50%)";
            fightBackground.style.opacity = "1";
            firstFight.play();
            firstFight.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            firstFight.volume = 0.10;

            loadNPC();

            switch (whatCharacter) {

                case "Miko":
                    console.log("miko was selected");
                    loadCharacter(whatCharacter);
                    document.querySelector(".miko_stance").classList.remove("hidden");
                    break;

                case "Jack":
                    console.log("Jack was selected");
                    loadCharacter(whatCharacter);
                    document.querySelector(".jack_stance").classList.remove("hidden");
                    break;

                case "Tiger":
                    console.log("Tiger was selected");
                    loadCharacter(whatCharacter);
                    document.querySelector(".tiger_stance").classList.remove("hidden");
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

