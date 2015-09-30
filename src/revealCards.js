//At the end of the game this function reveals the cards on the computer hand by changing image src. It removes all the elements with class computerCard
function revealCards(){
    document.getElementsByClassName("computerCard").remove();
    for (var i = computerHand.length-1; i>=0;i--){
    addCardToTable("computerHand",computerHand[i].id,computerHand[i].src);
    };

};

// This is something I stole to be able to remove all elements by class
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
