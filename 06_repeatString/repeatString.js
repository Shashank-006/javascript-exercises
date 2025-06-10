const repeatString = function(word, count) {
    if(count < 0) {
        return "ERROR";
    }
    let accWord = "";
    for(let i = count; i > 0; i--){
        accWord += word;
    }
    return accWord;
};

// Do not edit below this line
module.exports = repeatString;
