"use strict";
let x = 123;
let y = 456;
let a;
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 4));
let numbes = [1, 4, 6];
let number = [1, 4, 6];
let user = [1, "Musarraf"];
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
