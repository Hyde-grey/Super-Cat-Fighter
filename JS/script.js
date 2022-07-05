var start = document.querySelector(".start-container");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var bgmStart = document.querySelector(".startBGM");

function startGame(){

    header.classList.add('hidden');
    main.classList.remove('hidden');
    document.getElementById("my_audio").pause();
    document.getElementById("selection").play();

}



window.onload=function(){
    document.getElementById("my_audio").play();
  }
start.addEventListener('click', startGame);