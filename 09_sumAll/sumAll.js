function checkPositiveInteger(num) {
    return num > 0 && Math.floor(num) === num && typeof num === "number";
}

const sumAll = function(start, end) {
    if(!checkPositiveInteger(start) || !checkPositiveInteger(end)) return "ERROR";
    let sum = 0;
    if(start > end) {
        [start, end] = [end, start];
    }
    while(start <= end){
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
