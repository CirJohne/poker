function changeCards(hand,a,b,c,d,e){
    removePos = [a,b,c,d,e]
    console.log(removePos)
    for (var i = removePos.length -1; i>=0; i--){
            console.log("removePos  " + removePos[i]);
            if(removePos[i]!==""){
                hand.splice(removePos[i],1);
};

    };

};

// function computerChangeCards(){
//     var amountCards = Math.floor((Math.random() * 5)+1);
//
// }
function askPlayer(){
        var inputInt = [];
        inputInt = prompt("Throw what cards?");

        // inputInt.push(parseInt(input));
        console.log(inputInt);
        var a = inputInt.charAt(0);
        var b = inputInt.charAt(1);
        var c = inputInt.charAt(2);
        var d = inputInt.charAt(3);
        var e = inputInt.charAt(4);

        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        changeCards(playerHand,a,b,c,d,e);


};
