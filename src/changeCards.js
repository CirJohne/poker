function changeCards(hand,cardsToChange){
        var removeId=cardsToChange;
         for (var i = removeId.length -1; i>=0; i--){
            var pos = hand.map(function(e) { return e.id; }).indexOf(removeId[i]);
            hand.splice(pos,1);
            removeCardFromTable(removeId[i]);
         };
         dealCard(playerHand,"playerHand");
        // setTimeout(function(){dealCard(playerHand,"playerHand")}, 10)
};

function computerChangeCards(){
    var amountCards = Math.floor((Math.random() * 6));
        var computerThrownCards = 0;
        while(computerThrownCards<amountCards){
                    var posToThrow = Math.floor(Math.random() * computerHand.length);
                    removeCardFromTable(computerHand[posToThrow].id);
                    computerHand.splice(posToThrow,1);
                    computerThrownCards = computerThrownCards +1;
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
