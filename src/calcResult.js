// GÖR SÅ HAND ALLTID ÄR SORTED, TA BORT tempHand
var testHand = [
    {type: "hearts", number: 7, src: "img/hearts/aceHearts.jpg", id: "aceHearts"},
    {type: "hearts", number: 8, src: "img/hearts/tenHearts.jpg", id: "tenHearts"},
    {type: "hearts", number: 5, src: "img/hearts/jackHearts.jpg", id: "jackHearts"},
    {type: "hearts", number: 6, src: "img/hearts/queenHearts.jpg", id: "queenHearts"},
    {type: "clubs", number: 4, src: "img/hearts/kingHearts.jpg", id: "kingHearts"}
];

// Fire it off!
checkResult(testHand);
// numberPiles(testHand);

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
    var isStraightVar = isStraight(hand);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(type===true && isStraightVar===true){
            emptyHand(hand);
                return "StraightFlush";
    }
};

//Check for Flush
function flush(hand){
    var type = sameType(hand);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(type===true){
            emptyHand(hand);
                return "Flush";
    }
};

//Check for Straight
function straight(hand){
     var isStraightVar = isStraight(hand);
     console.log(isStraightVar);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(isStraightVar===true){
            emptyHand(hand);
                return "Straight";
    }
};
//create arrays with cards by same type
function numberPiles(hand){
    var slot0 = [];
    var slot1 = [];
    var slot2 = [];
    var slot3 = [];
    var slot4 = [];

    slot0.push(hand[0].number);
    hand.splice(0,1);
    for(var i = 0 ; i <= hand.length-1;i++){
        if(slot0[0]===hand[i].number){
            slot0.push(hand[i].number);
            hand.splice([i],1);
            i=i-1;
            console.log(hand);
        }
        console.log(slot0);
    };
    // slot0.push(hand[0].number);
    // for(var i = 1 ; i <= hand.length-1;i++){
    //
    //     if(hand[0].number===hand[i].number){
    //         slot0.push(hand[i].number);
    //     }
    //     console.log(slot0);
    // };


};

//Check for FourOfAKind
//Check for FullHouse
//Check for ThreeOfAKind

//Check for TwoPairs

//Check for OnePair


// Wrapper for checking all results
function checkAllCombos(hand){

    var temp = royalStraightFlush(hand);
    if(temp!==undefined){return temp};
    console.log("not royal");
    temp= straightFlush(hand);
    if(temp!==undefined){return temp};
    console.log("not straightFlush")
    temp= flush(hand);
    if(temp!==undefined){return temp};
    console.log("not Flush")
    temp= straight(hand);
    if(temp!==undefined){return temp};
};

function checkResult(hand){
    var sortedHand = hand.sort(sortNumber)
    var handIs = checkAllCombos(sortedHand);
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
function isStraight(hand){
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
