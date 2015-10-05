
var testHand = [
    {type: "hearts", number: 10, src: "img/hearts/aceHearts.jpg", id: "aceHearts"},
    {type: "hearts", number: 11, src: "img/hearts/tenHearts.jpg", id: "tenHearts"},
    {type: "hearts", number: 12, src: "img/hearts/jackHearts.jpg", id: "jackHearts"},
    {type: "hearts", number: 13, src: "img/hearts/queenHearts.jpg", id: "queenHearts"},
    {type: "hearts", number: 9, src: "img/hearts/kingHearts.jpg", id: "kingHearts"}
];

// Fire it off!
checkResult(testHand);


//Check for RoyalStraightFlush
function royalStraightFlush(hand){
    var type = sameType(hand);
    var x = hand[0].number+hand[1].number+hand[2].number+hand[3].number+hand[4].number;
    if(type===true && x===60){
        emptyHand(hand);
                return "RoyalStraightFlush";
    }
};

//Check for StraightFlush
function straightFlush(hand){
    var type = sameType(hand);
    var tempHand = hand.sort(sortNumber);
    var isStraight = straight(tempHand,hand);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(type===true && isStraight===true){
            emptyHand(hand);
                return "StraightFlush";
    }
};

//Check for FourOfAKind

//Check for FullHouse

//Check for Flush

//Check for Straight

//Check for ThreeOfAKind

//Check for TwoPairs

//Check for OnePair


// Wrapper for checking all results
function checkAllCombos(hand){

    var temp = royalStraightFlush(hand);
    if(temp!==undefined){return temp};
    temp= straightFlush(hand);
    if(temp!==undefined){return temp};
};

function checkResult(hand){
    var handIs = checkAllCombos(hand);
console.log(handIs);
    var score = compareScore(handIs);
    console.log(score);
    };

// These functions are used for various reasons

// see if all cards are of same type (used for flushes)
function sameType(hand){
    var temp = true;
    for(var i = 0; i<=3;i++){
   if(hand[i].type!==hand[i+1].type){
              temp=false;
       return temp;
       break;
   }}
   return temp;};
// See if cards are valid for a straight
function straight(tempHand,hand){
    var temp = true;
    for(var i = 0; i<=3;i++){
        if(hand[i].number-hand[i+1].number!==-1){
            temp = false;
            return temp;
            break;
        }
        }
        return temp;
};
// sort cards by .number
function sortNumber(a,b) {
  if (a.number < b.number)
    return -1;
  if (a.number > b.number)
    return 1;
  return 0;
};



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

// Empty hand after finding a combination, to assert not looking for further results
//FIXA SÅ ATT HÖGSTA NUMMER GÅR ATT LÄSA UT
function emptyHand(hand){
    hand.splice(0,5);
};
