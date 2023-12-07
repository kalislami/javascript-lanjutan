function solution(n, m) {
    let count = 0
    const min = (m > n) ? n : m
  
    for (let i = 1; i <= min; i++) {
      if ( m%i  === 0 && n%i === 0){
        count ++
      }
    }
  
    // return count;
    console.log(count);
}

solution(8, 12)