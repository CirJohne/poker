var cardsToChange= [];
function addCardToTable(hand,id,src){
    var img = document.createElement("img");
        img.src =src;
        img.id = id;
        img.className = "computerCard";
        if(hand==="playerHand"){
            img.className = "card";
        img.onclick = function(){cardsToChange.push(img.id), img.src = "img/back.jpg"};};
        document.getElementById(hand).appendChild(img);

};

function removeCardFromTable(id){
        var img = document.getElementById(id);
        img.parentNode.removeChild(img);

};
