var cardsToChange= [];

function addCardToTable(hand,id,src){
    var img = document.createElement("img");
        img.src =src;
        img.id = id;
        img.className = "computerCard";
        if(hand==="playerHand"){
            img.className = "card";
            img.onclick = function(){checkCardForChange(id,img)};};

        document.getElementById(hand).appendChild(img);

};

function removeCardFromTable(id){
        var img = document.getElementById(id);
        img.parentNode.removeChild(img);

};

function checkCardForChange(id,img){
    var x = document.getElementById(id).getAttribute("id");
    var y = document.getElementById(id).getAttribute("src");

    if(y=="img/back.jpg"){
    var image = setImage(x);
        img.src = image;
        var temp = cardsToChange.indexOf(img.id);
        cardsToChange.splice(temp,1);
    }
    else {cardsToChange.push(img.id); img.src = "img/back.jpg"};
};

function setImage(x){

    for(i = playerHand.length -1; i >=0;i--){
    var a = playerHand[i].id;
    if(a===x){
        var image = playerHand[i].src;
        return image;
    }

};};
