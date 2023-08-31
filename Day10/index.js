"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 10 CondingJS String 2
// ---------- Started ----------
// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true
function endOther(a, b) {
    if (a.length > b.length)
        return (a.toLowerCase().slice(-b.length) ===
            b.toLowerCase().slice(-b.length));
    if (a.length < b.length)
        return (a.toLowerCase().slice(-a.length) ===
            b.toLowerCase().slice(-a.length));
    return a.toLowerCase() === b.toLowerCase();
}
//----------------------------------------------------------------
// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true
function xyzThere(str) {
    if (str.length > 3) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== "." &&
                str.charAt(i + 1) === "x" &&
                str.charAt(i + 2) === "y" &&
                str.charAt(i + 3) === "z")
                return true;
        }
    }
    return str.startsWith("xyz") || false;
}
//-----------------------------------------------------------
// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false
function bobThere(str) {
    return str.match(/b[a-z|0-9]b/g) ? true : false;
}
//------------------------------------------------------------
// xyBalance('aaxbby') → true
// xyBalance('aaxbb') → false
// xyBalance('yaaxbb') → false
function xyBalance(str) {
    let x = false;
    let y = false;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "x" && y == true) {
            x = true;
            y = false;
        }
        else if (str.charAt(i) == "x") {
            x = true;
        }
        if (str.charAt(i) == "y" && x == true)
            y = true;
    }
    if (x == false)
        y = true;
    return y;
}
// function xyBalance(str: string): boolean {
// return (
// str.indexOf("x") === -1 || str.lastIndexOf("x") < str.lastIndexOf("y")
// );
// }
//-----------------------------------------------------------------
// mixString('abc', 'xyz') → axbycz
// mixString('Hi', 'There') → HTihere
// mixString('xxxx', 'There') → xTxhxexre
function mixString(a, b) {
    let newStr = "";
    if (a.length > b.length) {
        for (let i = 0; i < a.length; i++) {
            newStr += a.charAt(i) + b.charAt(i);
        }
    }
    else {
        for (let i = 0; i < b.length; i++) {
            newStr += a.charAt(i) + b.charAt(i);
        }
    }
    return newStr;
}
//-------------------------------------------------------------------
// repeatEnd('Hello', 3) → llollollo
// repeatEnd('Hello', 2) → lolo
// repeatEnd('Hello', 1) → o
function repeatEnd(str, n) {
    return str.slice(-n).repeat(n);
}
//-------------------------------------------------------------------
//# sourceMappingURL=index.js.map