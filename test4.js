const leftRotation = (arr, k) => {
    return arr.slice(k).concat(arr.slice(0, k))
};


console.log(leftRotation([1,2,3,4,5], 4));