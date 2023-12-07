/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

// function luckBalance(k, contests) {
//     let i = 0
//     let result = 0

//     contests.sort((c1, c2) => {
//         if (c1[1] != c2[1]) return c2[1] - c1[1]
//         return c2[0] - c1[0]
//     })

//     while (i < contests.length) {
//         if (i == (k-1)) {
//             if (contests[i][1] > 0) {
//                 result -= contests[i][0]   
//             }
//         } else {
//             result +=contests[i][0]
//         }
//         i++
//     }

//     // console.log(result);
// }

function luckBalance(k, contests) {
    let sum = 0
  contests.sort((c1, c2) => {
    if (c1[1] != c2[1]) return c2[1] - c1[1]
    return c2[0] - c1[0]
  })

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] == 1) {
      if (i < k) sum += contests[i][0]
      else sum -= contests[i][0]
    } else {
      sum += contests[i][0]
    }
  }
  return sum
}

luckBalance(3, [[5,1], [2,1], [1,1], [8,1], [10,0], [5,0]])
luckBalance(2, [[5,1], [1,1], [4,0]])