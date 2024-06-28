"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A = Math.round(Math.random() * 68) + 1950;
var B = Math.round(Math.random() * 68) + 1950;
console.log("A\u3055\u3093\u306E\u751F\u307E\u308C\u5E74\u306F".concat(A, "\u5E74\u3067\u3059"));
console.log("B\u3055\u3093\u306E\u751F\u307E\u308C\u5E74\u306F".concat(B, "\u5E74\u3067\u3059"));
if (A >= 1989 && B >= 1989) {
    console.log("両方とも平成生まれ");
}
else if (A >= 1989 || B >= 1989) {
    console.log("どちらかが平成生まれ");
}
else {
    console.log("両方とも昭和生まれ");
}
