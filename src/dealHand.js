var playerHand = [];
var computerHand = [];

//Pick a random card from deck and give to
function dealCard(hand){
        for ( var i = hand.length; i<5; i++){
                deckPos = Math.floor((Math.random() * deck.length) + 1);
                hand.push(deck[deckPos]);
                deck.splice(deckPos,1);
        };

};
dealCard(playerHand);
console.log(playerHand);
console.log(deck);
dealCard(computerHand);
console.log(computerHand);
console.log(deck);
