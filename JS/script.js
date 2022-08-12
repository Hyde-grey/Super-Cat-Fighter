///DOM ELEMENT///

var consoleStart = document.querySelector(".console-start");
var loadGame = document.querySelector(".navigation");
var start = document.querySelector(".start-container");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var loader = document.querySelector(".preloader");
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

console.log(viewportHeight, viewportWidth);

    /////////GamePad//////////
    
var leftButton = document.querySelector(".left-button");
var rightButton = document.querySelector(".right-button");
var gamePad = document.querySelector(".gamepad");
var startButton = document.querySelector(".start-button");
var aButton = document.querySelector(".a-button");

var nIntervID;

var current = 1;


///BGM and FX///

var bgms = {
  
  startScreenBGM : new Howl({

    src: ['BGM/start.mp3'],
    loop: true,
    volume: 0.20

  }),

  selectionScreenBGM : new Howl({

    src: ['BGM/selection.mp3'],
    loop: true,
    volume: 0.20

  }),

  mrMustacheBGM : new Howl({

    src: ['BGM/mr_mustache.mp3'],
    loop: true,
    volume : 0.10

  })

}

var sfx = {

  gameboyStart : new Howl({

    src : ['BGM/SFX/gameboy_start_up.mp3'],
    volume : 0.30

  }),

  startButtonSound : new Howl({

    src: ['BGM/SFX/start-button.wav'],
    volume : 0.30

  }),

  selectSound : new Howl({

    src: ['BGM/SFX/select.wav'],
    volume : 0.30

  }),

  menuSound : new Howl({

    src : ['BGM/SFX/menu.wav'],
    volume : 0.30

  }),

  punchSound : new Howl({

    src: ['BGM/SFX/punch.mp3'],
    volume : 0.30

  }),

  healingSound : new Howl({

    src: ['BGM/SFX/healing.mp3'],
    volume : 0.30

  }),

  dodgingSound : new Howl({

    src: ['BGM/SFX/woosh.mp3'],
    volume : 0.30

  }),

  kiBlastSound : new Howl({

    src: ['BGM/SFX/Ki-Blast.mp3'],
    volume : 0.30

  }),

  fightScream : new Howl({


    src : ['BGM/SFX/fight.mp3'],
    volume : 0.30

  }),
  
  blockedSound : new Howl({
  
  src:['BGM/SFX/blocked-punch.wav'],
  volume : 0.30
  
  
  }),
  
  chargingSound : new Howl({
  
    src:['BGM/SFX/charging.wav'],
    volume : 0.30
  
  
  }),

}

/////////////////////////////////////////END OF BGMS and SFX ////////////////////////////////////////

/////////////////Screens variables///////////////////

var onStartScreen = false;
var onSelectScreen = false;
var onFightScreen = false;


/////////////////End of Screens Variables///////////

window.addEventListener("load", function(){

  loader.style.display = "none";

})

function loadStartScreen(){


  bgms.startScreenBGM.play();
  consoleStart.classList.add("fade-out");

  start.classList.remove("hide");
  start.style.transform = "translateY(-100%)";
  start.style.transition = "all 3s ease";
  
  onStartScreen = true;
  
  isOnStart();
  
}

function load(){


  gamePad.classList.remove("hidden");
  
  setTimeout(function(){

    gamePad.style.opacity = 1;

  }, 500);

  header.classList.remove("hidden");
  loadGame.remove();

  let introPNG = document.createElement("img");
  introPNG.src = "IMG/Not_Nintendo.png"

  let intro = document.querySelector(".intro");

  intro.appendChild(introPNG);

 setTimeout(function(){

  // intro.play();
  // intro.volume = 0.20;
  sfx.gameboyStart.play();

 },1100);

setTimeout(loadStartScreen, 3000);
  

}

function isOnStart(){

  if(onStartScreen === true){


  console.log("onStartScreen is = " + onStartScreen + " you're now on the start screen");
  
  startButton.addEventListener('click', startGame);
  start.addEventListener('click', startGame);


  function startGame(){

    onStartScreen = false;
    onSelectScreen = true;
    
    sfx.startButtonSound.play();

    header.remove();
    main.classList.remove('hidden');

    bgms.startScreenBGM.stop();
    bgms.selectionScreenBGM.play();
    
    startButton.removeEventListener('click', startGame);

    isOnSelect();
    
  }


  }

}


loadGame.addEventListener('click', load);  

 