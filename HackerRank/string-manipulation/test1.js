/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
    let aObj = {}
    let bObj = {}
    let deletCount = 0

    for (let i = 0; i < a.length; i ++) {
        let key = a.charAt(i)
         if (aObj[key] === undefined ){
             aObj[key] = 1
         } else {
             aObj[key] ++
         }
    }

    for (let i = 0; i < b.length; i ++) {
        let key = b.charAt(i)
         if (bObj[key] === undefined ){
             bObj[key] = 1
         } else {
             bObj[key] ++
         }
    }

    Object.entries(aObj).forEach(([k, v]) => {
        if (bObj[k] != undefined ){
           if (bObj[k] != v) {
               deletCount += Math.abs(bObj[k] - v)
           }
        } else {
            deletCount += v
        }
    })

    Object.entries(bObj).forEach(([k, v]) => {
        if (aObj[k] === undefined ){
           deletCount += v
        }
    })
    // return deletCount
    console.log(deletCount);
}

makeAnagram('cde', 'abcs')