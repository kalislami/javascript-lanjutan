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

async function getNumTransactions(username) {
    let total = 0
    const response = await fetchD(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`)
    const jsonUser = JSON.parse(response)

    if (jsonUser.data && jsonUser.data.length > 0) {
        const id = jsonUser.data[0].id

        const transactions = await fetchD(`https://jsonmock.hackerrank.com/api/transactions?&userId=${id}`)
        const jsonTx = JSON.parse(transactions)

        if (jsonTx.total) {
            total = jsonTx.total
        }

        // console.log(total);
        return total
    }
    else {
        // console.log('Username Not Found');
        return 'Username Not Found'
    }
}

// getNumTransactions('epaga')
getNumTransactions('jay')