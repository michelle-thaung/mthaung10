// Team joe^2 - Eric Lo, Michelle Thaung
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15

//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
function gcd(a, b) {
    let c = Math.min(a, b);
    let gcd = 1;
    for (i = 1; i <= c; i++) {
        if ((a % i == 0) && (b % i == 0) && i > gcd)
            gcd = i;
    }

    return gcd;
}

// console.log((gcd(4, 16)));

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.

function randomStudent() {
    let students = ["me", "you", "him", "her"];
    return students[Math.floor((Math.random() * students.length))]
}

// console.log(randomStudent());

//You may want to create helper functions or external list variables here.

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.