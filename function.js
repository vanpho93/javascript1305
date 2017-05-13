function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

function show() {
    console.log('I am a function');
    console.log('I am a function!');
    console.log('I am a function');
}

function getTotal(n) {
   return (1 + n) * n / 2;
}

// console.log(getTotal(0));

function tinhTong(n) {
    return n === 0 ? 0 :n + tinhTong(n - 1);
}

console.log(tinhTong(10))