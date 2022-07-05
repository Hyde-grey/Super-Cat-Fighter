var loadGame = document.querySelector(".navigation");
var start = document.querySelector(".start-container");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var bgmStart = document.querySelector(".startBGM");

function load(){

  header.classList.remove("hidden");
  document.getElementById("my_audio").play();

}

function startGame(){

    header.classList.add('hidden');
    main.classList.remove('hidden');
    document.getElementById("my_audio").pause();
    document.getElementById("selection").play();

}


loadGame.addEventListener('click', load);  
start.addEventListener('click', startGame);