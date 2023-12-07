function main(numbers, queries) {
    const result = []
    for (let i = 0; i < queries.length; i++) {
        let sum = 0
        const startI = queries[i][0] - 1;
        const endI = queries[i][1];
        const x = queries[i][2]

        for (let Inumber = startI; Inumber < endI; Inumber++) {
            let UpdateNumber = (numbers[Inumber] == 0) ? x : numbers[Inumber]
            sum += UpdateNumber
        }

        result[i] = sum
    }

    console.log(result);
}

// main([-5,0], [[2,2,20],[1,2,10]])

console.log(Date.now());