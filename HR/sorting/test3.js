function processData(input) {
    const inputLength = parseInt(input[0])
    let inputSliced = input.slice(2)
    const listNama = inputSliced.replaceAll(/[0-9]/g, '').split('  ');
    const listNilai = inputSliced.replaceAll(/[a-z]/g, '').split('  ');
    // const newInput = listNama.map((nama, i) => {
    //     return `${nama.trim()} ${listNilai[i].trim()}`
    // })
    
    // newInput.sort((a,b) => {
    //     const [aNama, aNilai] = a.split(' ')
    //     const [bNama, bNilai] = b.split(' ')

    //     if (aNilai === bNilai) {
    //         return bNama - aNama
    //     }
    //     else {
    //         return bNilai - aNilai
    //     }
    // })

    // console.log(newInput);
}

processData('5 amy 100 david 100 heraldo 50 aakansha 75 aleksa 150')


//PENDING KARENA ERROR SOAL
