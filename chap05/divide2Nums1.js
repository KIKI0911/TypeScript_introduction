"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 1; i <= 5; i++) {
    var num1 = Math.round(Math.random() * 100);
    console.log("num1: ".concat(num1));
    if (num1 == 0) {
        break;
    }
    for (var j = 1; j <= 5; j++) {
        var num2 = Math.round(Math.random() * 100);
        console.log("num2: ".concat(num2));
        var divide = num2 / num1;
        console.log("num2 / num1 = ".concat(divide));
    }
}
