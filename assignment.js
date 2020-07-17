function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

function woodCalculator(chair, table, bed){
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

function brickCalculator(floor) {
    var numberOfBricks = 0;
    for(var i = 1; i <= floor; i++){
        if(i<=10){
            numberOfBricks = numberOfBricks + 15*1000;
        }
        else if(i > 10 && i <= 20) {
            numberOfBricks = numberOfBricks + 12*1000;
        }
        else{
            numberOfBricks = numberOfBricks + 10*1000;
        }
    }
    return numberOfBricks;
}

function tinyFriend(friend) {
    var smallName = Infinity;
    var tinyName;
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length < smallName) {
            smallName = friend[i].length;
            tinyName = friend[i];
        }
    }
    return tinyName;
 }