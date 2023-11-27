//OBJECT LITERAL
//Problem: tidak efektif untuk object yang banyak
let anak1 = {
    nama: 'Nufail',
    energi: 10,
    makan: function (porsi) {
        this.energi += porsi
        console.log(`Halo ${this.nama}, Selamat makan!`);
    }
}

let anak2 = {
    nama: 'Misyal',
    energi: 7,
    makan: function (porsi) {
        this.energi += porsi
        console.log(`Halo ${this.nama}, Selamat makan!`);
    }
}

//FUNCTION DECLARATION + Object.Ceater
const methodAnak = {
    makan: function (porsi) {
        this.energi += porsi
        console.log(`Halo ${this.nama}, Selamat makan!`);
    },

    main: function (jam) {
        this.energi -= jam
        console.log(`Halo ${this.nama}, Selamat bermain!`);
    }
}

function DataAnak(nama, energi) {
    let anak = Object.create(methodAnak);
    anak.nama = nama;
    anak.energi = energi;
    // anak.makan = methodAnak.makan;
    // anak.main = methodAnak.main;

    return anak
}

anak1 = DataAnak('Nufail', 10);
anak2 = DataAnak('Misyal', 7);

//CONSTRUCTOR FUNCTION + PROTOTYPE
function DataAnakConstructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

DataAnakConstructor.prototype.makan = function (porsi) {
    this.energi += porsi
    return `Halo ${this.nama}, Selamat makan!`;
}

DataAnakConstructor.prototype.main = function (jam) {
    this.energi -= jam
    return `Halo ${this.nama}, Selamat bermain!`;
}

DataAnakConstructor.prototype.tidur = function (jam) {
    this.energi += jam
    return `Halo ${this.nama}, Selamat tidur!`;
}

anak1 = new DataAnakConstructor('Nufail', 10);
anak2 = new DataAnakConstructor('Misyal', 7);

//VERSI CLASS
class AnakClass {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {
        this.energi += porsi
        return `Halo ${this.nama}, Selamat makan!`;
    }
    
    main (jam) {
        this.energi -= jam
        return `Halo ${this.nama}, Selamat bermain!`;
    }
    
    tidur (jam) {
        this.energi += jam
        return `Halo ${this.nama}, Selamat tidur!`;
    }
}

anak1 = new AnakClass('Nufail', 10);
anak2 = new AnakClass('Misyal', 7);

//ARGUMENTS
//detail proses eksekusi code js bisa di cek via browsing: 'javascript visualizer'
var name = 'Kamal';
var username = '@kalislami'

function cetakURL() {
    // console.log(arguments);
    uname = arguments[0] ? arguments[0] : username;
    const xURL = 'twitter.com/';
    return xURL + uname
}

cetakURL('@lamak', '@kamal', '@kml123');

//CLOSURE + FACTORY FUNCTION
//contoh 1
function ucapSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}!`);
    }
}

let salamPagi = ucapSalam('pagi');
let salamSiang = ucapSalam('siang');
let salamSore = ucapSalam('sore');

// salamPagi('Kamal');
// salamSiang('Nufail');

//contoh 2
let add = (function () {
    let counter = 0;

    return function () {
        return counter ++;
    }
})();

// console.log(add());
// console.log(add());
// console.log(add());

//ARROW FUNCTION
//notes: arrow func tidak memiliki konsep 'this'
const namaAnak = ['Nufail', 'Misyal'];

const detail = namaAnak.map(nama => ({
    nama: nama,
    jml_char: nama.length
}));

// console.table(detail);

//DESTRUCTURING
const arr = [1,2,3];
const [a,b,c] = arr;
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3

const anak = {
    kakak: 'Nufail', 
    adik: 'Misyal', 
    nufail: {
        umur: 3,
        bb_kg: 15
    },
    misyal: {
        umur: 1,
        bb_kg: 9
    }
};
const {kakak, adik} = anak;
// console.log(kakak); //Nufail
// console.log(adik); //Misyal

function kalkulasi(a, b) {
    return [a+b, a-b, a*b, a/b];
}
const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

function cetakNama({kakak, adik, nufail: {umur: umur_kk, bb_kg: bb_kk}, misyal: {umur: umur_dd, bb_kg: bb_dd}}) {
    return `Nama anak saya ${kakak} usianya ${umur_kk} tahun, beratnya ${bb_kk}kg,
        dan ${adik} usianya ${umur_dd} tahun, beratnya ${bb_dd}kg`;
}
// console.log(cetakNama(anak));

//LOOPING FOR..OF DAN FOR..IN
//bedanya dengan .forEach hanya bisa looping array, sedangkan For..Of bisa looping array, string, arguments dan nodelist / html
for (const [index, nama] of namaAnak.entries()) {
    // console.log(`${nama} adalah index ke ${index}`);
}

//for..in berfungsi untuk looping properti dan value dari object
for (const a in anak) {
    // console.log(a) //[kakak, adik, nufail, misyal]
    // console.log(anak[a]); //Nufail, Misyal, {umur, bb_kg}, {umur, bb_kg}
}

//SPREAD OPERATOR: berfungsi untuk menggabungkan array dan meng-copy array
const ortu = ['Kamal', 'Ika'];
const keluarga = [...namaAnak, 'Lamak', ...ortu];
const ortu_copy = [...ortu];
ortu_copy[0] = 'Kamaluddien';

// console.log(keluarga); //gabungan array namaAnak + ortu
// console.log(ortu_copy); //Kamaluddien, Ika

//REST PARAMETER: untuk mendefinisikan sisa argument (posisi harus di akhir argumen)
function anggotaKeluarga(a, b, ...sisaArguments) {
   return `${a} -- ${b} -- ${sisaArguments}` 
//    return Array.from(arguments);
}

// console.log(anggotaKeluarga(...keluarga));

//ASYNCRONUS CALLBACK
function getData(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            if (xhr.readyState === 4) {
                success(xhr.response)
            }
        }
        else {
            error(xhr.responseText)
        }
    }

    xhr.open('get', url);
    xhr.send();
}

function success(res) {
    console.log(JSON.parse(res));
}

function error(res) {
    console.log(res);
}

// getData('https://omdbapi.com/?apikey=dca61bcc&s=avenger', success, error);
// getData('coin.json', success, error);

//PROMISE
// fetch('https://omdbapi.com/?apikey=dca61bcc&s=avenger')
//     .finally(() => console.log('selesai diproses baik sukses ataupun error')) //proses selesai (biasanya dipakai untuk stop loader)
//     .then(res => res.json())
//     .then(res => {console.log(res)}) //sukses
//     .catch(res => console.log(res)) //error

// const pAnak = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([
//             {
//                 nama: 'Nufail',
//                 umur: 3
//             },
//             {
//                 nama: 'Misyal',
//                 umur: 1
//             }
//         ])
//     }, 1000);
// })

const pOrtu = new Promise((resolve, reject) => {
    const waktu = 1000;

    if (waktu < 2000) {
        setTimeout(() => {
            resolve([
                {
                    nama: 'Kamal',
                    umur: 30
                },
                {
                    nama: 'Ika',
                    umur: 29
                }
            ])
        }, waktu);
    } else {
        reject('waktu habis!');
    }
})

//run promise 1 per 1:
// pAnak.then(res => console.log(res))
// pOrtu.then(res => console.log(res))

//run promise sekaligus:
// Promise.all([pAnak, pOrtu])
//     .then(res => {
//         const [anak, ortu] = res;
//         console.log(anak);
//         console.log(ortu);
//     })

//ASYNC - AWAIT + try - catch
function getMovie() {
    // const data = fetch('https://omdbapi.com/?apikey=dca61bcc&s=spider')
    // .finally(() => console.log('stop loader')) //selesai diproses baik sukses ataupun error
    // .then(res => res.json())
    // .then(res => {
    //     if (res.Response === 'False') {
    //         throw new Error(res.Error);
    //     }
    //     return res
    // })

    // return data;
}

async function showData() {
    try {
        const result = await getMovie();
        console.log(result);   
    } catch (err) {
        console.log(err);
        // alert(err)
    }
}

// jalankan
// showData();