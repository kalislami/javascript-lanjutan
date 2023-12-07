/*
 * Complete the 'getProductsInRange' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/inventory?category=<category>&page=<pageNumber>
 *
 * The function is expected to return an Integer value.
 * The function accepts String category, Integer minPrice and Integer maxPrice as arguments.
 *
 * example record
 * {
 *  "barcode": "74000848",
 *  "item": "Chemise",
 *  "category": "Accessories",
 *  "price": 898.0,
 *  "discount": 13.1,
 *  "available": 1,
 * }
 *  
 */

const { log } = require('console');
const https = require('https')

const fetchD = async (url) => {
    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
          let data = '';

          response.on('data', (stream) => {
              data += stream;
          })

          response.on('end', () => {
              // const resolvedData = JSON.parse(data);
              resolve(data);
          })
      }).on('error', (err) => {
          reject(err);
      })
  });
};

async function getProductsInRange(category, minPrice, maxPrice) {
  let page = 1
  let countProducts = 0

  while (true) {
    // console.log(`looping ke ${page}`);
    const res = await fetchD(`https://jsonmock.hackerrank.com/api/inventory?category=${category}&page=${page}`)
    const obj = JSON.parse(res)

    // console.log(obj.data);

    if (obj.data && obj.data.length > 0) {
      const filter = obj.data.filter(val => val.price >= minPrice && val.price <= maxPrice)
      countProducts += filter.length
    }
    
    if (obj.total_pages == obj.page || !obj.data) {
      break;
    }
    
    page++
  }

  console.log(countProducts); 

}

// getProductsInRange('Accessories', 3000, 4000)
//expected output: 131

async function getAverageTemperatureForUser(userId) {
  let page = 1
  let countTemperature = 0
  let countData = 0

  while (true) {
    const res = await fetchD(`https://jsonmock.hackerrank.com/api/medical_records?userId=${userId}&page=${page}`)
    const obj = JSON.parse(res)
    // console.log(obj);
    // console.log(obj);

    if (obj.data && obj.data.length > 0) {
      for(let i = 0; i < obj.data.length; i++){
        console.log('looping page ' + page + 'index: ' + i);
          const temperature = obj.data[i].vitals.bodyTemperature
          countTemperature += temperature
          countData++
      }
    }
    
    if (obj.total_pages == obj.page || !obj.data || obj.data.length === 0) {
      break;
    }
    
    page++
  }


  // console.log(countTemperature);
  if(countData > 0) {
      // return countTemperature / countData
      console.log((countTemperature / countData).toFixed(1).toString());
  }
  else {
      // return 0
      console.log('0');
  }
}

getAverageTemperatureForUser(10)