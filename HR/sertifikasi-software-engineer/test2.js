/*
 * Complete the 'ipTracker' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/ip?ip=<ip>
 *
 * The function is expected to return a STRING.
 * The function accepts a singe parameter ip.
 * 
 * In case of no ip record, return string 'No Result Found'
 */


async function ipTracker(ip) {
    const fetchData = await fetch(`https://jsonmock.hackerrank.com/api/ip?ip=${ip}`)
    const jsonData = await fetchData.json()
    
    let res = 'No Result Found'

    if (jsonData.data.length > 0) {
        res = jsonData.data[0].country   
    }
    console.log(res);
}

ipTracker('172.217.20.46')