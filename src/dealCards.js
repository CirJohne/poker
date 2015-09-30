var playerHand = [];
var computerHand = [];

//Pick a random card from deck and give to player/computer. Also calls for addCardToTable to show image of card in GUI.
function dealCard(hand,divId){
        for ( var i = hand.length; i<=4; i++){
                var deckPos = Math.floor((Math.random() * deck.length));
                hand.push(deck[deckPos]);
                if(divId==="playerHand"){
                addCardToTable(divId,deck[deckPos].id,deck[deckPos].src);}
                else{addCardToTable(divId,deck[deckPos].id,"img/back.jpg");};
                deck.splice(deckPos,1);

        };
};
