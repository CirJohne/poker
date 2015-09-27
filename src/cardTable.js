function addCardToTable(hand,id,src){
    var img = document.createElement("img");
        img.src =src;
        img.id =id;
        document.getElementById(hand).appendChild(img);

};

function removeCardFromTable(id){
        var img = document.getElementById(id);
        img.parentNode.removeChild(img);

};
