/*
 * Complete the 'cardPackets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY cardTypes as parameter.
 */

function cardPackets(cardTypes) {
    // let packet2 = Array(cardTypes.length).fill(0)
    // let packet3 = Array(cardTypes.length).fill(0)
    let packet2 = 0
    let packet3 = 0

    for (let i = 0; i < cardTypes.length; i++) {
        // paket 2
        if (cardTypes[i] % 2 !== 0) {
            // packet2[i] = 1
            packet2 += 1
        }

        // paket 3
        if (cardTypes[i] % 3 !== 0) {
            const kurangnya = cardTypes[i] % 3
            const set = 3 - kurangnya
            // packet3[i] = set
            packet3 += set
        }
    }

    
    const min = (packet2 < packet3) ? packet2 : packet3
    console.log(min);
    // console.log(packet2);
    // console.log(packet3);
}


cardPackets([3,9,7,6,5,2])
// console.log(8 % 3);