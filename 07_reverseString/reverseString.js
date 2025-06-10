const reverseString = function(word) {
    const arrWord = word.split("");
    return arrWord.reduceRight((acc, letter) => acc + letter, "");
};

// Do not edit below this line
module.exports = reverseString;
