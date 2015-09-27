// function playGame(){
//     dealCard(playerHand);
//     console.log("Players hand: "+playerHand);
//     dealCard(computerHand);
//  for(var i = 1; i<4; i++){
//     askPlayer();
//     computerChangeCards();
//     dealCard(playerHand);
//     dealCard(computerHand);
//     console.log("Players hand after "+ i + " round:"+ playerHand);
//  };
// console.log("Computers hand: "+ computerHand);
//
// }
//
// playGame();
function playGame(){
    dealCard(playerHand);
    console.log("Players hand: "+playerHand);
    dealCard(computerHand);

    askPlayer();
    computerChangeCards();

    console.log("Players hand after "+ i + " round:"+ playerHand);

console.log("Computers hand: "+ computerHand);

}

playGame();
