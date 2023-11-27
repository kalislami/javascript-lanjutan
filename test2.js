function findSUbString(s, k) {
    const vowels = ['a','i','u','e','o']
    const newS = []
    let most = 0
    let Imost = 0

    for (let i = 0; i <= s.length; i++) {
        const a = (k + i) - k
        const b = k + a
        // console.log(`${a} , ${b}`);

        const subS = s.substring(a,b)

        // counter method 1
        // let counter = 0
        // for (let letter of subS){
        //     if (vowels.includes(letter)) {
        //         counter++
        //     }
        // }

        // counter method 2
        let match = subS.match(/[aeiou]/gi);
        const counter = match ? match.length : 0

        if (most < counter) {
            most = counter
            Imost = i
        }

        newS[i] = subS

        if (b == (s.length)) {
            break
        }
    }

    const result = (most > 0) ? newS[Imost] : 'Not found!'

    console.log(result);
}

findSUbString('caberqiitefg', 5)
findSUbString('aeiouia', 3)
findSUbString('azerdii', 5)
findSUbString('qwdftr', 2)