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
            
            continueText.innerHTML = "Would you like to see the tutorial ?"; 
            
                var resetFightContainer = document.createElement("div");
                
                var conTextBox = document.createElement("div");
                
                resetFightContainer.appendChild(conTextBox);
                
                
                var yesnoContainer = document.createElement("div"); 
                yesnoContainer.classList.add("yesno-container");
                
                var yesBox = document.createElement("div");
              yesBox.classList.add("yesno-boxes");

                yesBox.addEventListener("click", function(){
                
                    continueContainer.innerHTML = "";
                    var tutorialBackground = document.createElement("img");
                    tutorialBackground.src = "IMG/tutorial-background.png";
                    continueContainer.appendChild(tutorialBackground);
                    tutorialBackground.style.width = "100%";
                    continueContainer.style.height = "auto";
                    
                    var tutorialTextBox = document.createElement("div");
                    tutorialTextBox.classList.add("tutorial-text-box");
 continueContainer.appendChild(tutorialTextBox);                   
    
    
                    var j = 0;
                    
                    var txtOne = "So you're the new recruit...";
                    var txtTwo =  "My name is Yuria I'm Miko's sister.";
                    var txtThree = "Since you're new around here let me show you how things work.";
                    
      
      setTimeout(typeWriter,500);
      
      //setTimeout(typeWriter(txtTwo),2000);
      
      //setTimeout(typeWriter(txtThree),5000);
      
    
    function typeWriter(){
    
    
        if(j < txtOne.length){
            
            tutorialTextBox.innerHTML += txtOne.charAt(j);
                
            j++;
            
            setTimeout(typeWriter,55);
    
        }else{
        
            j = 0;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            setTimeout(typeWriterTwo,1000);
            
        }
        
    }
    
    function typeWriterTwo(){
    
    
        if(j < txtTwo.length){
            
            tutorialTextBox.innerHTML += txtTwo.charAt(j);
                
            j++;
            
            setTimeout(typeWriterTwo,55);
    
        }else{
        
            j = 0;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            setTimeout(typeWriterThree,1000);
            
        }
        
    }
    
    function typeWriterThree(){
    
    
        if(j < txtThree.length){
            
            tutorialTextBox.innerHTML += txtThree.charAt(j);
                
            j++;
            
            setTimeout(typeWriterThree,55);
    
        }else{
        
            j = 0;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            
            
        }
        
    }
    
    });
                            

                
                yesBox.innerHTML = "YES";
                
                var noBox = document.createElement("div");
                noBox.classList.add("yesno-boxes");
                
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