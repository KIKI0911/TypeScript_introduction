"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var total = 0;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(i, "\u56DE\u76EE"));
    var ans = Math.pow(i, 2);
    total += ans;
    console.log("\u5024\uFF1A".concat(total));
}
