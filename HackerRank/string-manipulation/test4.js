// Complete the substrCount function below.
function substrCount(n, s) {
    let countPol = n
    // let maxPolGenap = 0
    // let maxHuruf
    // let totalGenap = 0

    for (let i = 1; i < n; i++) {

        //check ganjil
        if (s[i - 1] == s[i + 1]) {
            // console.log('ganjil');
            console.log('index ke: ' + i);
            countPol++

            if (i > 2) {
                // console.log('masuk sini');
                let startLeft = i - 2
                let endLeft = i
                let startRight = i + 1
                let endRight = i + 3
                let sLeft = s.slice(startLeft, endLeft)
                let sRight = s.slice(startRight, endRight)
                let sRightReverse = [...sRight].reverse().join("");

                while (sLeft == sRightReverse && endRight <= n) {
                    const currentS = sLeft + s[i] + sRight
                    console.log(`${currentS}, length: ${currentS.length}`);
                    countPol++
                    startLeft -= 1
                    endRight += 1
                }   
            }
        }

        // //check genap
        // if (s[i -1] === s[i]) {
        //     // console.log('genap');
        //     countPol++
        //     // totalGenap++
            
        //     if (i > 2) {
        //         let startLeft = i - 2
        //         let endLeft = i
        //         let startRight = i + 1
        //         let endRight = i + 3
        //         const sLeft = s.slice(startLeft, endLeft)
        //         const sRight = [...s.slice(startRight, endRight)].reverse().join("");

        //         while (sLeft === sRight && endRight <= n) {
        //             // const currentS = s.slice(startLeft, endLeft) + s.slice(startRight, endRight)
        //             // console.log(`${currentS}, length: ${currentS.length}`);
        //             countPol++
        //             startLeft -= 1
        //             endRight += 1
        //             // totalGenap++

        //             // tempMaxPol = endRight - i
        //             // if (tempMaxPol > maxPolGenap) {
        //             //     maxPolGenap = tempMaxPol
        //             //     maxHuruf = s[i]
        //             // }
        //         }
        //     }
            
        // }
    }

    console.log(countPol);
    // console.log(totalGenap);
    // console.log(maxPolGenap);
    // console.log(maxHuruf);
}

// fetch('https://hr-testcases-us-east-1.s3.amazonaws.com/71637/input08.txt?response-content-type=text%2Fplain&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR6O7GJNX5DNFO3PV%2F20231125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231125T020358Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=d8f2dd8fe7834e1f86804346c500b4baac9d4f07cf5bdfe21db3efca5cc07700')
//     .then(res => res.text())
//     .then(res => {
//         const s = res.slice(7)
//         const n = s.length
//         console.log(n);
//         // substrCount(n, s)
//     })
//     .catch(err => console.log(err))
substrCount(11, 'abbabbaaaaa')

// const s = 'kamal'
// console.log([...s.slice(0,3)].reverse().join(""));