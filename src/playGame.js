function playGame(){
addChangeButton();
dealCard(playerHand,"playerHand");
console.log(playerHand);
dealCard(computerHand,"computerHand");
console.log(playerHand);
// setTimeout(function(){ askPlayer() }, 1);
// askPlayer();
//  for(var i = 1; i<4; i++){
//      askPlayer();
//      computerChangeCards();
// };
};
playGame();
