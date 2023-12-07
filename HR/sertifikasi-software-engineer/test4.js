/*
 * Complete the 'countMax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING_ARRAY upRight as parameter.
 */

function countMax(upRight) {
    let MaxStep = 0
    let LastStepValue = []

    // step1 = 1-1, 1-2, 1-3, 2-1, 2-2, 2,3
    // step2 = 
    
    for (let i = 0; i < upRight.length; i++) {
        const [x, y] = upRight[i].split(' ')

        let startX = 1
        let startY = 1
        let values = []
        let index = 0

        while (startX <= parseInt(x) && startY <= parseInt(y)) {
            values[index] = [startX, startY]
            
            startY++
            index++

            if (startY == parseInt(y) && startX < parseInt(x)) {
                startY = 1
                startX++
            }
        }

        console.log(values);
    }

}

// countMax(["2 3", "3 7", "4 1"])
//expected result: 2
//explanation:  max value 3, koodinat dengan value 3 ada 2 maka hasilnya 2

/*
 * Complete the 'maxPresentations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY scheduleStart
 *  2. INTEGER_ARRAY scheduleEnd
 */

function maxPresentations(scheduleStart, scheduleEnd) {
    // let ranges = []
    let count = 0

    /*
    6,8
    1,9
    2,4
    4,7
    */

    for (let i = 0; i < scheduleStart.length; i++) {
        let starti2 = i

        for (let i2 = starti2; i2 < scheduleStart.length; i2++) {
            if (
                (scheduleStart[i] > scheduleStart[i2] && scheduleEnd[i] < scheduleEnd[i2]) ||
                (scheduleStart[i]) < scheduleStart[i2] && scheduleEnd[i] < scheduleEnd[i2]
            ) {
                    // console.log('index ke' + i);
                count++
                break;
            }
        }
    }

    console.log(count);

}

maxPresentations([6,1,2,3], [8,9,4,7])
//2
maxPresentations([1,1,2,3], [2,3,3,4])
//3
maxPresentations([6,1,2,4], [8,9,4,7])
//2