var rounds = 0;
function startGame(){
     alert("Welcome to a friendly game of Poker!\nYou may change cards three times.\nClick on the cards you'd like to change.\nNo winner is declared,hence friendly!");
 playGame();
};


function playGame(){
if(rounds<1){dealCard(computerHand,"computerHand");
    dealCard(playerHand,"playerHand");};
        if (rounds>2){
        removeButton();
        setTimeout(function(){revealCards();checkResult(computerHand);},1000);
        checkResult(playerHand);


    }
};
addChangeButton();
startGame();
