const removeFromArray = function(arr, ...args) {
    args.forEach(e => 
        arr = arr.filter(value => e !== value));
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
