///DOM ELEMENT///

var consoleStart = document.querySelector(".console-start");
var loadGame = document.querySelector(".navigation");
var start = document.querySelector(".start-container");
var header = document.querySelector(".header");
var main = document.querySelector(".main");

///BGM and FX///

var intro = document.querySelector(".intro");
var bgmStart = document.getElementById("main-bgm");

///FX///

var startSound = new Audio('BGM/FX/game-start.wav');
var selectionBGM = document.getElementById("selection");

var nIntervID;

var current = 1;


function loadBGM(){

  bgmStart.play();
  bgmStart.volume = 0.20;
  // consoleStart.classList.add("hidden");
  consoleStart.classList.add("fade-out");

  setTimeout(function(){

    intro.remove();

  },3000)

  start.classList.remove("hide");
  start.style.transform = "translateY(-110%)";
  start.style.transition = "all 3s ease";

}

function load(){

  header.classList.remove("hidden");
  loadGame.remove();
  intro.play();
  intro.volume = 0.20;
  nIntervID = setInterval(loadBGM, 3000);
  

}

function startGame(){

  startSound.play();
  startSound.volume = 0.20;

  header.remove();
  main.classList.remove('hidden');

  bgmStart.pause();
  selectionBGM.play();
  selectionBGM.volume = 0.20;

  clearInterval(nIntervID);
  nIntervID = null;

}




loadGame.addEventListener('click', load);  
start.addEventListener('click', startGame);