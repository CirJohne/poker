// function playGame(){
// dealCard(playerHand,"playerHand");
// console.log("Players hand: "+playerHand);
// dealCard(computerHand,"computerHand");
//  for(var i = 1; i<4; i++){
//     askPlayer();
//     computerChangeCards();

//     console.log("Players hand after "+ i + " round:"+ playerHand);
//  };
// console.log("Computers hand: "+ computerHand);
//
// }
//
// playGame();
function playGame(){
    dealCard(playerHand,"playerHand");
    console.log("Players hand: "+playerHand);
    dealCard(computerHand,"computerHand");

    askPlayer();
    computerChangeCards();

    console.log("Players hand after "+ i + " round:"+ playerHand);

console.log("Computers hand: "+ computerHand);

}

playGame();
