const minimumBribes = (q) => {
    let chaos = false
    let bribes = 0;
    for (let i = 0; i < q.length; i++){

        if (q[i] - i > 3) chaos = true;

        for (let j = q[i] - 2; j < i; j++){
            if (q[j] > q[i]) bribes ++
        }

    }
    
    const result = chaos ? 'too chaotic' : bribes;
    console.log(result);
};

minimumBribes([1,2,3,4,5,6,7,8])
minimumBribes([4,1,2,3])
minimumBribes([2,1,5,3,4]);