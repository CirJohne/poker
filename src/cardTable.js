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
    console.log(img);
    // console.log(img);
    var x = document.getElementById(id).getAttribute("id");
    var y = document.getElementById(id).getAttribute("src");
    console.log(x);
    // console.log(y);

    if(y=="img/back.jpg"){
        console.log("img back");
        console.log(x);
    var image = setImage(x);
    console.log(image);
        img.src = image;
        var temp = cardsToChange.indexOf(img.id);
        cardsToChange.splice(temp,1);
    }
    else {cardsToChange.push(img.id); img.src = "img/back.jpg"};
    console.log(cardsToChange);
};

function setImage(x){

    for(i = playerHand.length -1; i >=0;i--){
        console.log(playerHand.length);
    var a = playerHand[i].id;
    console.log(a);
    if(a===x){
        console.log("found x");
        console.log(playerHand[i]);
        var image = playerHand[i].src;
        console.log(image);
        return image;
    }

};};
