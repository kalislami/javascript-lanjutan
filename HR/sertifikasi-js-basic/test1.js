const fetchD = async (url) => {
    return new Promise((resolve) => {
      https.get(url, async (res) => {
        res.setEncoding("utf-8");
        let ttt;
        await res.on("data", function (data) {
          ttt = data;
          resolve(data);
        });
        res = ttt;
      //   console.log(ttt);
      });
    });
  };
  
  async function getCountryName(code) {
      // write your code here
      // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
      const fetchData = await fetchD(`https://jsonmock.hackerrank.com/api/countries`)
      const jsonData = JSON.parse(fetchData)
      
      let findName = jsonData.data.filter(d => d.alpha2Code == code)
      let page = 2
  
      while (findName.length == 0 && page <= jsonData.total_pages) {
          const fetchData = await fetchD(`https://jsonmock.hackerrank.com/api/countries?page=${page}`)
          const jsonData = JSON.parse(fetchData)
  
          findName = jsonData.data.filter(d => d.alpha2Code == code)
          page++
      }
  
      let countryName = 'Not Found'
      if (findName.length > 0) {
          countryName = findName[0].name
      }
      // console.log(countryName);
      return countryName
  }