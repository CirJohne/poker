var cardsToChange= [];
function addCardToTable(hand,id,src){
    var img = document.createElement("img");
    // console.log(src);
        img.src =src;
        img.id = id;
        img.className = "card";
        if(hand==="playerHand"){
        img.onclick = function(){cardsToChange.push(img.id), img.src = "img/back.jpg"};};
        document.getElementById(hand).appendChild(img);

};

function removeCardFromTable(id){
        var img = document.getElementById(id);
        img.parentNode.removeChild(img);

};
