const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let repeatedString = "";
    for (let i = 0; i < num ; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// const repeatString = function(string, num) {
//     string.reduce(acc => acc + string, 0)
// };



// Do not edit below this line
module.exports = repeatString;
