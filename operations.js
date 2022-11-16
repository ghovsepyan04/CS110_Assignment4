//Write a program that in a separate file, contains the following mathematical functions. 
//You must import this file into a tester file for testing.
//1. factorial: A function that returns the factorial of a given 
//positive number (using loop).
//2. gcd: A function that returns the Greatest Common Divisor 
//of two positive integers using the Euclidean algorithm.
//3. lcm: A function that returns the Least Common Multiple of two positive integers. 
//This function should call your function in question 2.3.

function factorial(num) {
    let res = 1;
    for (let i = 1; i <=num; i ++) {
        res *= i;
    }
    return res;
}

function gcd(num1, num2) {
    let myarr = [];
    if (num1 <= num2) {
        let num3 = num1;
        num1 = num2;
        num2 = num3;
    }
    let rem = num1 % num2;
    myarr.push(rem);
    while (rem >0) {
        let num4 = rem;
        rem = num2 % rem;
        myarr.push(rem);
        num2 = num4;

    }
    let gcd = myarr[myarr.length - 2];
    return gcd
}


function lcm(num1, num2) {
    let fcm = gcd(num1, num2);
    let lcm = num1 * num2/ fcm;
    return lcm;
}

function toHexadecimal(num) {
    let myarr = ["A", "B", "C", "D", "E", "F"];
    let res = "";
    while (num > 0) {
        let rem = num%16;
        if (rem >= 10) {
            res = myarr[rem%10] + res;
        } else {
            res = rem + res;
        }
        num = Math.floor(num/16);
    }
    return res;
}

module.exports = {factorial, gcd, lcm, toHexadecimal}