
var testHand = [
    {type: "hearts", number: 14, src: "img/hearts/aceHearts.jpg", id: "aceHearts"},
    {type: "hearts", number: 10, src: "img/hearts/tenHearts.jpg", id: "tenHearts"},
    {type: "hearts", number: 11, src: "img/hearts/jackHearts.jpg", id: "jackHearts"},
    {type: "hearts", number: 12, src: "img/hearts/queenHearts.jpg", id: "queenHearts"},
    {type: "hearts", number: 13, src: "img/hearts/kingHearts.jpg", id: "kingHearts"}
];

//Check for RoyalStraightFlush
function royalStraightFlush(hand){
    var type = sameType(hand);
    console.log(type);
    var x = hand[0].number+hand[1].number+hand[2].number+hand[3].number+hand[4].number;
    if(type===true && x===60){
        return "RoyalStraightFlush";
    }
};

// Wrapper for checking all results
function checkResult(hand){
    var handIs =royalStraightFlush(hand);

console.log(handIs);
    var score = compareScore(handIs);
    console.log(score);
    };

// These functions are used for various reasons

// see if all cards are of same type (used for flushes)
function sameType(hand){for(var i = 0; i<=3;i++){
   var temp = true;
   if(hand[i].type!==hand[i+1].type){

       temp=false;
       return temp;
   }
   return temp;
}};

// Look at handIs and give hand a score for comparison
function compareScore(handIs){
    for(i=0; i<=scoreTable.length-1;i++){
        var a = scoreTable[i].hand;
        if(a===handIs){
            var score = scoreTable[i].score;
            return score;
        }
    };
};

checkResult(testHand);
