
const mix = (...functions) => {
    let last = 0
    for (const f of functions) {
        last = f(last);
    }
    return last
};


console.log(mix(() => {
    return 0;
}, (sums) => {
    return sums + 1;
}, (sums) => {
    return sums * 2;
}))

