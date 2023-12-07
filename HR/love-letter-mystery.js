/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    // console.log(s.length);
    let panjang = (s.length % 2 == 0) ? 'genap' : 'ganjil'
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let countPol = 0

    if (panjang == 'genap') {
        let arrS = s.split('')
        let midLength = s.length / 2
        let index1 = midLength - 1
        let index2 = midLength

        for (let i = index1; i < s.length; i++) {
            if (arrS[index1] !== arrS[index2]) {
                const alpIndex1 = alphabet.indexOf(arrS[index1])
                const alpIndex2 = alphabet.indexOf(arrS[index2])
                const diff = (alpIndex1 < alpIndex2) ? alpIndex2 - alpIndex1 : alpIndex1 - alpIndex2
                
                countPol += diff
                index1--
                index2++
            }
        }  
    }

    if (panjang == 'ganjil') {
        let arrS = s.split('')
        let midLength = (s.length - 1) / 2
        let index1 = midLength - 1
        let index2 = midLength + 1

        for (let i = index1; i < s.length; i++) {
            if (arrS[index1] !== arrS[index2]) {
                const alpIndex1 = alphabet.indexOf(arrS[index1])
                const alpIndex2 = alphabet.indexOf(arrS[index2])
                const diff = (alpIndex1 < alpIndex2) ? alpIndex2 - alpIndex1 : alpIndex1 - alpIndex2
                
                countPol += diff
                index1--
                index2++
                arrS[index1] = arrS[index2]
            }
        }
    }

    console.log(s.length);
}

// theLoveLetterMystery('abcd')
// theLoveLetterMystery(string)

fetch('https://hr-testcases-us-east-1.s3.amazonaws.com/2343/input08.txt?response-content-type=text%2Fplain&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR6O7GJNX5DNFO3PV%2F20231126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231126T121507Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=8e7ecb54d9176c24d734f2f8e43ed6f5b78588ba847d7a509290edb295a1becf')
    .then(res => res.text())
    .then(res => {
        listString = res.split('\n')

        theLoveLetterMystery(listString[1])
        // console.log(res.split('\n').length);
    })
    .catch(err => console.log(err))