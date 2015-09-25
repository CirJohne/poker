var playerHand = [];
var computerHand = [];

//Pick a random card from deck and give to
function dealCard(hand){
        for ( var i = hand.length; i<=4; i++){
                var deckPos = Math.floor((Math.random() * deck.length));
                hand.push(deck[deckPos]);
                deck.splice(deckPos,1);
        };

};
