var cardsToChange= [];
function addCardToTable(hand,id,src){
    var img = document.createElement("img");
        img.src =src;
        img.id = id;
        img.className = "card";


        img.onclick = function(){cardsToChange.push(img.id), console.log(cardsToChange)};
        document.getElementById(hand).appendChild(img);

};

function removeCardFromTable(id){
        var img = document.getElementById(id);
        img.parentNode.removeChild(img);

};
