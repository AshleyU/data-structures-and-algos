function countdown(n){
    let arr = ["Liftoff!"];

    for(let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr.join(', ');
}

console.log(countdown(11));

module.exports = countdown