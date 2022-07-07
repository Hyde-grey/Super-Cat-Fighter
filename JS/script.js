var consoleStart = document.querySelector(".console-start");
var loadGame = document.querySelector(".navigation");
var start = document.querySelector(".start-container");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var bgmStart = document.getElementById("main-bgm");
var intro = document.querySelector(".intro");

var nIntervID;

var current = 1;

function loadBGM(){

  bgmStart.play();
  consoleStart.classList.add("hidden");
  start.classList.remove("hidden");

}

function load(){

  header.classList.remove("hidden");
  loadGame.classList.add("hidden");
  intro.play();
  nIntervID = setInterval(loadBGM, 3000);
  

}

function startGame(){

  header.classList.add('hidden');
  main.classList.remove('hidden');

  bgmStart.pause();
  document.getElementById("selection").play();

  clearInterval(nIntervID);
  nIntervID = null;

}




loadGame.addEventListener('click', load);  
start.addEventListener('click', startGame);