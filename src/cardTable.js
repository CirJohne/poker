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

function checkCardForChange(c,img){
    console.log(img.src);
    // console.log(img);
    var x = document.getElementById(c).getAttribute("id");
    var y = document.getElementById(c).getAttribute("src");
    // console.log(x);
    // console.log(y);

    if(y=="img/back.jpg"){
        console.log("img back");
        console.log(playerHand);
    var image = setImage(x);
    console.log(image);
        img.src = image;
        var temp = cardsToChange.indexOf(img.c);
        cardsToChange.splice(temp,1);
    }
    else {cardsToChange.push(img.c); img.src = "img/back.jpg"};
    console.log(cardsToChange);
};

function setImage(x){
    for(i = 0; i = playerHand.length-1;i++){
    var a = playerHand[i].id;
    if(a===x){
        var image = playerHand[i].src;
    }
    return image;
};};
