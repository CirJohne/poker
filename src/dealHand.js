var playerHand = [];
var computerHand = [];

//Pick a random card from deck and give to
function dealCard(hand,divId){
        for ( var i = hand.length; i<=4; i++){
                var deckPos = Math.floor((Math.random() * deck.length));
                hand.push(deck[deckPos]);
                addCardToTable(divId,deck[deckPos].id,deck[deckPos].src);
                deck.splice(deckPos,1);


        };

};
