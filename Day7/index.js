"use strict";
// Copyright (c) 2023 author Shakhbozbek Usmonov Miracle Programmer
// Day 7 Condingbat Warmup 2
// ---------- Started ----------
// last2('hixxhi') → 1
// last2('xaxxaxaxx') → 1
// last2('axxaaxx') → 1
function last2(str) {
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (str.slice(str.length - 2).localeCompare(str.slice(i, i + 2)) === 0) {
            count++;
        }
    }
    return count;
}
// ---------------------------------------
// arrayCount9([1,2,9]) → 1
// arrayCount9([1,9,9]) → 2
// arrayCount9([1,9,9,3,9]) → 3
function arrayCount9(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 9) {
            count++;
        }
    }
    return count;
}
//------------------------------------------
// arrayFront9([1,2,9,3,4]) → true
// arrayFront9([1,2,3,4,9]) → false
// arrayFront9([1,2,3,4,5]) → false
function arrayFront9(nums) {
    let newArr = nums.slice(0, 4);
    return newArr.includes(9) && newArr.length !== 0;
}
// -------------------------------------------
function array123(nums) {
    if (nums.length !== 0) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] === 1 && nums[j] === 2 && nums[k] === 3) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
    return false;
}
// -------------------------------------------
// stringMatch('xxcaazz', 'xxbaaz') → 3
// stringMatch('abc', 'abc') → 2
// stringMatch('abc', 'axc') → 0
function stringMatch(a, b) {
    let count = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a.substring(i, i + 2) === b.substring(i, i + 2))
            count++;
    }
    return count;
}
// -----------------------------------------------
// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx
function stringX(str) {
    let newStr = str.slice(0, 1);
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i] !== "x") {
            newStr += str[i];
        }
    }
    return newStr + str.slice(-1);
}
// -----------------------------------------------
//# sourceMappingURL=index.js.map