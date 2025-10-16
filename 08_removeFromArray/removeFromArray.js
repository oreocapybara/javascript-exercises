const removeFromArray = function(array, ...searchKey) {
    return array
        .filter(element => !searchKey.includes(element))
}

// Do not edit below this line
module.exports = removeFromArray;
