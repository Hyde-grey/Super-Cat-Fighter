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
                    continueContainer.style.position = "relative";
                    
                    var tutorialTextBox = document.createElement("div");
                    tutorialTextBox.classList.add("tutorial-text-box");
 continueContainer.appendChild(tutorialTextBox);                   
    
    
                    var j = 0;
                    var k = 0;
                    
                    var txtOne = "So you're the new recruit...";
                    var txtTwo =  "My name is Yuria I'm Miko's sister.";
                    var txtThree = "Since you're new around here let me show you how things work.";
                    
                    var txtFour = "Click on Draw to draw 5 random cards.";
                    var txtFive = "The five main cards are...";
                    var txtSix = "Attack, Defence, Evasion, Heal and Special.";
                    
                    var txtSeven = "Choose three cards in the order you'd like to play.";
                    
                    var txtEight = 'Click "Submit Selection" to start the round.';
                    
                    var txtNine = "The fight is over when either you or your oponent's HP reaches 0.";
                    
                    const texts = [txtOne, txtTwo, txtThree, txtFour, txtFive, txtSix, txtSeven];
      
      setTimeout(typeWriter,500);
      
      //setTimeout(typeWriter(texts[k]),2000);
      
      //setTimeout(typeWriter(txtThree),5000);
     
     /*function typeWriter(){

     
      if( j < text.length){
            
            tutorialTextBox.innerHTML += txtOne.charAt(j);
                
            j++;
            
            setTimeout(typeWriter,55);
    
        }else{
        
            j = 0;
            
            k++;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            setTimeout(typeWriter(txtTwo),1000);
            
        }
     
     }*/
    
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
            
            setTimeout(typeWriterFour,1000);
            
            var tutorialGifOne = document.createElement("img");
            
            tutorialGifOne.src = "IMG/tutorial-one.gif";
            
            continueContainer.appendChild(tutorialGifOne);
            
            continueContainer.style.position = "relative";
            tutorialGifOne.style.position = "absolute";
            tutorialGifOne.style.top = "35%";
            tutorialGifOne.style.right = "5%";
            tutorialGifOne.style.width = "60%";
            
        }
        
    }
    
    function typeWriterFour(){
    
      if(j < txtThree.length){
            
            tutorialTextBox.innerHTML += txtFour.charAt(j);
                
            j++;
            
            setTimeout(typeWriterFour,55);
    
        }else{
        
            j = 0;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            setTimeout(typeWriterFive,1000);
            
            
        }
    
    }
    
    function typeWriterFive(){
    
      if(j < txtThree.length){
            
            tutorialTextBox.innerHTML += txtFive.charAt(j);
                
            j++;
            
            setTimeout(typeWriterFive,55);
    
        }else{
        
            j = 0;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },300);
            
            setTimeout(typeWriterSix,300);
            
            
        }
    
    }
    
    
    function typeWriterSix(){
    
      if(j < txtThree.length){
            
            tutorialTextBox.innerHTML += txtSix.charAt(j);
                
            j++;
            
            setTimeout(typeWriterSix,55);
    
        }else{
        
            j = 0;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            setTimeout(typeWriterSeven,1000);
            
            
        }
    
    }
    
    
    function typeWriterSeven(){
    
      if(j < txtThree.length){
            
            tutorialTextBox.innerHTML += txtSeven.charAt(j);
                
            j++;
            
            setTimeout(typeWriterSeven,55);
    
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