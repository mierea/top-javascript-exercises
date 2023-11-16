const removeFromArray = function(arr, ...sentenced) {
    let toRemove =[...sentenced];
    const newArr = arr.filter((value) => {
        return !toRemove.includes(value)
    })

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
