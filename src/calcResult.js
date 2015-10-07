var testHand = [
    {type: "hearts", number: 9, src: "img/hearts/aceHearts.jpg", id: "aceHearts"},
    {type: "hearts", number: 10, src: "img/hearts/tenHearts.jpg", id: "tenHearts"},
    {type: "hearts", number: 11, src: "img/hearts/jackHearts.jpg", id: "jackHearts"},
    {type: "hearts", number: 12, src: "img/hearts/queenHearts.jpg", id: "queenHearts"},
    {type: "hearts", number: 13, src: "img/hearts/kingHearts.jpg", id: "kingHearts"}
];
checkResult(testHand);


//Check for RoyalStraightFlush
function royalStraightFlush(hand){
    var type = sameType(hand);
    var x = hand[0].number+hand[1].number+hand[2].number+hand[3].number+hand[4].number;
    if(type===true && x===60){
                return "RoyalStraightFlush";
    }
};

//Check for StraightFlush
function straightFlush(hand){
    var type = sameType(hand);
    var isStraightVar = isStraight(hand);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(type===true && isStraightVar===true){
                return "StraightFlush";
    }
};

//Check for FourOfAKind
function fourOfAKind(hand){
    var temp = numberPiles(hand);
    if(temp[0]===4){
        return "FourOfAKind"
    }
};
//Check for FullHouse
function fullHouse(hand){
    var temp = numberPiles(hand);
    if(temp[0]===3 && temp[1]===2){
        return "FullHouse"
    }
};

//Check for Flush
function flush(hand){
    var type = sameType(hand);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(type===true){
                return "Flush";
    }
};

//Check for Straight
function straight(hand){
     var isStraightVar = isStraight(hand);
// MÅSTE ÄNDRA SÅ ATT JAG KAN KONTROLLERA HÖGSTA NUMMER INNAN SPLICE
    if(isStraightVar===true){
                return "Straight";
    }
};

//Check for ThreeOfAKind
function threeOfAKind(hand){
    var temp = numberPiles(hand);
    if(temp[0]===3 && temp[1]===1){
        return "ThreeOfAKind"
    }
};

//Check for TwoPairs
function twoPairs(hand){
    var temp = numberPiles(hand);
    if(temp[0]===2 && temp[1]===2){
        return "TwoPairs"
    }
};

//Check for OnePair
function onePair(hand){
    var temp = numberPiles(hand);
    if(temp[0]===2 && temp[1]===1){
        return "OnePair"
    }
    return "Nothing";
};


//create arrays with cards by same number, used by fullHouse fourOfAKind threeOfAKind twoPairs onePair
function numberPiles(hand){
    var tempHand = hand.slice(0);
    var slot0 = [];
    var slot1 = [];
    var slot2 = [];
    var slot3 = [];
    var slot4 = [];

    makePileBySlot(slot0,tempHand);
    makePileBySlot(slot1,tempHand);
    makePileBySlot(slot2,tempHand);
    makePileBySlot(slot3,tempHand);
    makePileBySlot(slot4,tempHand);

    var countPiles =[slot0.length,slot1.length,slot2.length,slot3.length,slot4.length,];
    return countPiles.sort().reverse();
};

// Wrapper for checking all results
function checkAllCombos(hand){

    var temp = royalStraightFlush(hand);
    if(temp!==undefined){return temp};

    temp = straightFlush(hand);
    if(temp!==undefined){return temp};

    temp = fourOfAKind(hand);
    if(temp!==undefined){return temp};

    temp = fullHouse(hand);
    if(temp!==undefined){return temp};

    temp = flush(hand);
    if(temp!==undefined){return temp};

    temp = straight(hand);
    if(temp!==undefined){return temp};

    temp = threeOfAKind(hand);
    if(temp!==undefined){return temp};

    temp = twoPairs(hand);
    if(temp!==undefined){return temp};

    temp = onePair(hand);
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

//makePileBySlot looks at the first slot of the hand and then compars with rest of hand. If there's a card with same nummer it puts them in pile(own array)
function makePileBySlot(slot,hand){
    if(hand.length!=0){
    slot.push(hand[0].number);
    hand.splice(0,1);
    for(var i = 0 ; i <= hand.length-1;i++){
        if(slot[0]===hand[i].number){
            slot.push(hand[i].number);
            hand.splice([i],1);
            i=i-1;

        }

    };}};
