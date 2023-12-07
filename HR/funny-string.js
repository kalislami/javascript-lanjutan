/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    let ordinals = []
    let diffs = []

    for (let i = 0; i < s.length; i++) {
        ordinals[i] = s.charCodeAt(i)

        if (i > 0) {
            diffs[i - 1] = Math.abs(ordinals[i] - ordinals[i -1])
        }
    }

    if (JSON.stringify(diffs) === JSON.stringify(diffs.reverse())) {
        console.log('Funny');
    }
    else {
        console.log('Not Funny');
    }
}

funnyString('acxz')