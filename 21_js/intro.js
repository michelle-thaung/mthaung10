/* 
Team Cornwall Guppies - Arib Chowdhury, Michelle Thaung, Dean Carey
SoftDev
K21 - Get Scripty
2021-04-12
*/ 

function factI(n) {
    let x = 1;

    for (w = 2; w <= n; w++) {
        x *= w; 
    }

    return x;
}

console.log(factI(5));

function factR(n) {
    if (n == 0) return 1;

    return n * factR(n - 1);
}

console.log(factR(0));
console.log(factR(4));

function fibI(n) {
    let [a, b] = [0, 1];

    for (i = 1; i < n; i++) {
        [a, b] = [b , a + b]
    }

    return a;
}

console.log(fibI(5));

function fibR(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fibR(n-1) + fibR(n-2);
}

console.log(fibI(6));