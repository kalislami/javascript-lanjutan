function arrayManipulation(n, queries) {
    let nLength = n
    let qLength = queries.length

    let printData = Array(nLength).fill(0)

    if (qLength > 1000) {
        qLength /= 100
    }

    for (let j = 0; j < qLength; j++) {
        let startIndex = queries[j][0];
        let endIndex = queries[j][1];
        let numberToAdd = queries[j][2];
        
        for (let i = (startIndex -1); i < endIndex; i++) {
            let index = i + 1;
            if (!(index >= startIndex && index <= endIndex)) {
                continue
            }

            printData[i] += numberToAdd;
        }
    }

    const limitMath = 100000
    if (n > limitMath) {
        const length = n / limitMath
        let findMax = 0
        let nextLimit = limitMath
        for (let i = 0; i < length; i++) {
            let firstSlice = i * nextLimit
            slicePrintData = printData.slice(firstSlice, nextLimit)
            let tempMax = Math.max(...slicePrintData)

            if (findMax < tempMax) {
                findMax = tempMax
            }

            nextLimit += limitMath
        }

        console.log(findMax*100);
    }
    else {
        const result = Math.max(...printData);
        console.log(result);
    }
}

console.time('timer')
arrayManipulation(1000000, Array(100000).fill([
    777, 
    99099,
    99999
]))
console.timeEnd('timer')