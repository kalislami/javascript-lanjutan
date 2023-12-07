// Complete the freqQuery function below.
function freqQuery(queries) {
    const frequencies = [];
    const frequencyTracker = [];
    const result = [];

    for (const query of queries) {
        const action = query[0];
        const value = query[1];
        let index;

        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? --frequencyTracker[index] : null;
        }

        if (action === 1) {
            typeof frequencies[value] === 'undefined' ? frequencies[value] = 1 : ++frequencies[value];
        }

        if (action === 2 && frequencies[value]) {
            --frequencies[value];
        }

        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? ++frequencyTracker[index] : frequencyTracker[index] = 1;
        }

        if (action === 3) {
            result.push(frequencyTracker[value] > 0 ? 1 : 0);
        }
    }

    return result;

}