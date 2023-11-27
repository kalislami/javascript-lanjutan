function hourGlassSum(array2D) {
    let maxSum
    for (let i = 0; i < 4; i++) {
        for (let i2 = 0; i2 < 4; i2++) {
            const sum = array2D[i][i2] + array2D[i][i2+1] + array2D[i][i2+2] + array2D[i+1][i2+1] + array2D[i + 2][i2] + array2D[i + 2][i2+1] + array2D[i + 2][i2+2]
            if ((i == 0) && (i2 == 0)) {
                maxSum = sum - 1;
            }
            if (maxSum < sum) {
                maxSum = sum
            }
        }
    }

    console.log(maxSum);
}

// const arr = [
//     [1,1,1,0,0,0],
//     [0,1,0,0,0,0],
//     [1,1,1,0,0,0],
//     [0,0,2,4,4,0],
//     [0,0,0,2,0,0],
//     [0,0,1,2,4,0]
// ]

const arr = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
]

hourGlassSum(arr)