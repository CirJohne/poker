function playGame(){
    dealCard(playerHand);
    console.log("Player "+playerHand);
    dealCard(computerHand);
    console.log("Computer " + computerHand);
    askPlayer();
    console.log("Player after throw cards "+playerHand);
    dealCard(playerHand);
    console.log("player new cards dealt "+ playerHand);


}

playGame();
