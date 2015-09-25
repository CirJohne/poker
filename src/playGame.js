function playGame(){
    dealCard(playerHand);
    console.log("Player "+playerHand);
    dealCard(computerHand);
    console.log("Computer " + computerHand);
    changeCards(playerHand,0,1,2);
    console.log("Player after throw cards "+playerHand);
    dealCard(playerHand);
    console.log("player new cards dealt "+ playerHand);


}

playGame();
