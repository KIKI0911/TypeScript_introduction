"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = {
    い組: 35,
    ろ組: 36,
    は組: 37,
    に組: 34,
    ほ組: 36,
};
var ans = 0;
for (var key in list) {
    ans += list[key];
}
console.log(ans);
