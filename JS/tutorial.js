function tutorialScreen(){


    if(onFightScreen === true){
    
    var transition = document.createElement("div");
            transition.classList.add("gameover-background");
    
            var fightContainer = document.querySelector(".fight");
            
            fightContainer.appendChild(transition);
            
            
            var continueContainer = document.createElement("div");
            continueContainer.classList.add("continue-container");
            
            transition.appendChild(continueContainer);
            
            var continueText = document.createElement("div");
            
            continueContainer.appendChild(continueText);
            
            continueText.innerHTML = "Would you like to access the tutorial ?"; 
            
                var resetFightContainer = document.createElement("div");
                
                var conTextBox = document.createElement("div");
                
                resetFightContainer.appendChild(conTextBox);
                
                
                var yesnoContainer = document.createElement("div"); 
                yesnoContainer.classList.add("yesno-container");
                
                var yesBox = document.createElement("div");
                yesBox.addEventListener("click", function(){
                
                transition.remove();
      document.querySelector(".how-to-play-container").style.transform = "translateX(0)";

            document.querySelector(".close-how-to-play").addEventListener("click",function(){
            document.querySelector(".how-to-play-container").style.transform = "translateX(-100%)";
            })             
                });
                
                yesBox.innerHTML = "YES";
                
                var noBox = document.createElement("div");
                noBox.addEventListener("click",function(){
                
                    transition.remove();
                
                });
            
            noBox.innerHTML = "NO";
            
            yesnoContainer.appendChild(yesBox);
            yesnoContainer.appendChild(noBox);
            
            resetFightContainer.appendChild(yesnoContainer);
            
            continueContainer.appendChild(resetFightContainer);
            
}
}