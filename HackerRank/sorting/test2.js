function maximumToys(prices, k) {
    const sorted = prices.sort((a,b) => a-b)
    let totalMax = 0
    let countMax = 0

    while (totalMax < k) {
        let tempTotalMax = totalMax + sorted[countMax]

        if (tempTotalMax > k) {
            break;
        }

        totalMax += sorted[countMax]
        countMax++
    }

    console.log(countMax);

}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)