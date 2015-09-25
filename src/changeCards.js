function changeCards(hand,a,b,c,d,e){
    removePos = [a,b,c,d,e]
    for (var i = removePos.length -1; i>=0; i--){
            if(removePos[i]>-1){
                hand.splice(removePos[i],1);
                };

    }

};

// function computerChangeCards(){
//     var amountCards = Math.floor((Math.random() * 5)+1);
//
// }
