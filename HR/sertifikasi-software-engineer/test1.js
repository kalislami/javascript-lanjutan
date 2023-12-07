/*
 * Complete the 'getMaxValue' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getMaxValue(arr) {
    const newArr = arr.sort((a,b) => a-b)
    let maxArr = [1]
    // console.log(newArr);
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(newArr[i] - maxArr[i - 1])
        // console.log(diff);
        if (diff > 1) {
            maxArr[i] = maxArr[i - 1] + 1
        }
        else {
            maxArr[i] = newArr[i]
        }
    }

    // const max = Math.max(...maxArr)
    console.log(maxArr);
}

// getMaxValue([3,1,3,4])
// getMaxValue([1,3,2,2])
// getMaxValue([3,2,3,5])
getMaxValue([15,9,1,5,15,3,3,4,6,9])