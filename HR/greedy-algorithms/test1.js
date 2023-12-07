/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    const sortAsc = arr.sort((a,b) => a-b)

    let minDiff = Math.abs(sortAsc[0] - sortAsc[1])
    let i = 2

    while (i < arr.length) {
        const diff = Math.abs(sortAsc[i-1] - sortAsc[i])
        if (diff < minDiff) {
            minDiff = diff
        }
        i++
    }

    console.log(minDiff);
}

minimumAbsoluteDifference([
    3,-7,0
])