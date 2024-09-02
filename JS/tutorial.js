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
    
    
    var tutorialGifOne;
    
                    var j = 0;
                    var k = 0;
                    
                    var txtOne = "So you're the new recruit...";
                    var txtTwo =  "My name is Yuria I'm Miko's sister.";
                    var txtThree = "Since you're new around here let me show you how things work.";
                    
                    var txtFour = "Click on Draw to draw 5 random cards.";
                    var txtFive = "The five main cards are...";
                    var txtSix = "Attack, Defence, Evasion, Heal and Special.";
                    
                    var txtSeven = "Choose three cards in the order you'd like to play.";
                    
                    var txtEight = 'Click "Submit" to start the round.';
                    
                    var txtNine = "The fight is over when either you or your oponent's HP reaches 0.";
                    
                    var txtTen;
                    
                    var txtEleven;
                    
                    var txtTwelve;
                    
                    var txtThirteen = "That's all the information you need for now.";
                    
                    var txtFourteen = "Good Luck out there.";
                    
                    
                    switch(whatCharacter.firstName){
                    
                    case "Miko" :
                    
                    txtTen = "Miko is very agile, she has higher chances to evade attacks but has lower HP";
                    
                    txtEleven = "Every time Miko succesfully dodge an ATK she charges her Super.";
                    
                    txtTwelve = "At 3 charges she'll atomaticaly uses her Super : Dodge Strike";
                    
                    break;
                    
                    case "Jack" :
                    
                    txtTen = "Jack is the best striker i know, he has higher ATK but lower DEF.";
                    
                    txtEleven = 'Charge his special skill with a "Charge" card.';
                    
                    txtTwelve = "At 3 charges he'll atomatically uses his Super : Machine Gun Punch";
                    
                    break;
                    
                    case "Tiger" :
                    
                    txtTen = "Tiger is a tank, his DEF is very high but his ATK is Lower.";
                    
                    txtEleven = 'Everytime Tiger succesfuly block and ATK with higher DEF he gains a super charge.';
                    
                    txtTwelve = "At 3 charges he'll atomatically uses his Super : Bloody Shield";
                    
                    break;
                    
                    }
                    
                    const texts = [txtOne, txtTwo, txtThree, txtFour, txtFive, txtSix, txtSeven, txtEight, txtNine, txtTen, txtEleven, txtTwelve, txtThirteen, txtFourteen];
      
      
     setTimeout(typeWriter,500);
      
     
     function typeWriter(){

     if(k === 3){
     
       tutorialGifOne = document.createElement("img");
            
            tutorialGifOne.src = "IMG/tutorial-one.gif";
            
            continueContainer.appendChild(tutorialGifOne);
            
            continueContainer.style.position = "relative";
            tutorialGifOne.style.position = "absolute";
            tutorialGifOne.style.top = "2%";
            tutorialGifOne.style.right = "5%";
            tutorialGifOne.style.width = "60%";
     
     }
     
     if(k === 10){
     
     
          switch(whatCharacter.firstName){
          
               case "Miko" :
               
               tutorialGifOne.src = "IMG/tutorial-miko.gif";
               break;
               
               case "Jack" :
               
               tutorialGifOne.src = "IMG/tutorial-jack.gif";
               break;
               
               case "Tiger" :
               
               tutorialGifOne.src = "IMG/tutorial-tiger.gif";
               break;
               
          }
     }
     
     
     if(k === 11){
     
          switch(whatCharacter.firstName){
          
               case "Miko" :
               
               tutorialGifOne.src = "IMG/tutorial-miko2.gif";
               break;
               
               case "Jack" :
               
               tutorialGifOne.src = "IMG/tutorial-jack2.gif";
               break;
               
               case "Tiger" :
               
               tutorialGifOne.src = "IMG/tutorial-tiger3.gif";
               break;
               
          }
     
     }
     
     if(k === 14){
     
          setTimeout(function(){
     
               transition.remove();
          
               return;
     
          },1000);
     
     
      }
     
     
      if( j < texts[k].length){
            
            tutorialTextBox.innerHTML += texts[k].charAt(j);
                
            j++;
            
            setTimeout(typeWriter,55);
    
        }else{
        
            j = 0;
            
            k++;
            
            setTimeout(function(){
            
                  tutorialTextBox.innerHTML = " ";
            
            },1000);
            
            setTimeout(typeWriter,1000);
            
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