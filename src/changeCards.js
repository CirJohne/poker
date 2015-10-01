// This array contains the cards that should be changed
var cardsToChange= [];
//Looks into cardsToChange to know what cards to throw away. Then calls for dealCard to refill hand.
function changeCards(hand,cardsToChange){
        var removeId=cardsToChange;
         for (var i = removeId.length -1; i>=0; i--){
            var pos = hand.map(function(e) { return e.id; }).indexOf(removeId[i]);
            hand.splice(pos,1);
            removeCardFromTable(removeId[i]);
         };
         dealCard(playerHand,"playerHand");
};
// This is how the AI changes cards. A random number of cards and then random spots. Pretty darn dumb AI.
function computerChangeCards(){
    var amountCards = Math.floor((Math.random() * 6));
    var computerThrownCards = 0;
    var thrownCards = [];
        while(computerThrownCards<amountCards){
                    var posToThrow = Math.floor(Math.random() * computerHand.length);
                    thrownCards.push(computerHand[posToThrow].id);
                    addBorder(computerHand[posToThrow].id);
                    computerHand.splice(posToThrow,1);
                    computerThrownCards = computerThrownCards +1;
                };
                for(var i=thrownCards.length-1;i>=0;i--){
            removeCardFromTable(thrownCards[i]);
        };

    dealCard(computerHand,"computerHand");

// setTimeout(function(){dealCard(computerHand,"computerHand")},10)
};

function addChangeButton(){
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Change cards");
        btn.id = "changeButtonID";
        btn.onclick = function(){changeCards(playerHand,cardsToChange);cardsToChange = [];
            computerChangeCards();rounds++; playGame()};
        btn.appendChild(t);
        document.getElementById("changeButton").appendChild(btn);
    };

function removeButton(){
    var parent = document.getElementById("table");
    var child = document.getElementById("changeButton");
    parent.removeChild(child);
};
