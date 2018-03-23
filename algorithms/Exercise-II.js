const findMax = arr => {
    let low = arr[0];
    let high = arr[1] - low;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let potential = current - low;
        low = Math.min(current, low);
        high = Math.max(high, potential);
    }
    return high;
};
