const reverseString = function(string, reversed) {
    reversed = string.split("").reverse().join("");
    console.log(reversed);
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
