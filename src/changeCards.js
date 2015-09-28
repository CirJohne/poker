function changeCards(hand,cardsToChange){
        var removeId=cardsToChange;
        console.log(removeId);
         for (var i = removeId.length -1; i>=0; i--){
            console.log(hand);
            var pos = hand.map(function(e) { return e.id; }).indexOf(removeId[i]);
            console.log(pos);
            hand.splice(pos,1);
            console.log(hand);
            removeCardFromTable(removeId[i]);
         };
        setTimeout(function(){dealCard(playerHand,"playerHand")}, 10)
};

function computerChangeCards(){
    var amountCards = Math.floor((Math.random() * 6));
        alert("Computer changed "+ amountCards+ " cards.");
        var computerThrownCards = 0;
        while(computerThrownCards<amountCards){
                    var posToThrow = Math.floor(Math.random() * computerHand.length);
                    computerHand.splice(posToThrow,1);
                    removeCardFromTable(computerHand[posToThrow].id);
                    computerThrownCards = computerThrownCards +1;
setTimeout(function(){dealCard(computerHand,"computerHand")}, 10)        };
};

function addChangeButton(){
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Change cards");
        btn.id = "changeButtonID";
        btn.onclick = function(){changeCards(playerHand,cardsToChange),cardsToChange = [];};
        btn.appendChild(t);
        document.getElementById("changeButton").appendChild(btn);
};
// var para = document.createElement("button");
//   var t = document.createTextNode("This is a paragraph.");
//   para.appendChild(t);
//   document.getElementById("myDIV").appendChild(para);
