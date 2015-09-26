function changeCards(hand,a,b,c,d,e){
    removePos = [a,b,c,d,e]
    for (var i = removePos.length -1; i>=0; i--){
            if(removePos[i]!==""){
                hand.splice(removePos[i],1);
                                            };};};

function computerChangeCards(){
    var amountCards = Math.floor((Math.random() * 6));
        alert("Computer changed "+ amountCards+ " cards.");
        var computerThrownCards = 0;
        while(computerThrownCards<amountCards){
                    var posToThrow = Math.floor(Math.random() * computerHand.length);
                    computerHand.splice(posToThrow,1);
                    computerThrownCards = computerThrownCards +1;
        };
};


function askPlayer(){
        var inputInt = [];
        inputInt = prompt("Throw what pos(0-4)?");
        var a = inputInt.charAt(0);
        var b = inputInt.charAt(1);
        var c = inputInt.charAt(2);
        var d = inputInt.charAt(3);
        var e = inputInt.charAt(4);
        changeCards(playerHand,a,b,c,d,e);
};
