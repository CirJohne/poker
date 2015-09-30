var rounds = 0;
function playGame(){
    dealCard(computerHand,"computerHand");
    dealCard(playerHand,"playerHand");
if (rounds>2){
        removeButton();
        revealCards();}
};
addChangeButton();
playGame();
