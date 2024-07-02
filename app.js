"use strict";
function isIntegerCheck(value) {
    let checkValue = Number.isInteger(value);
    return checkValue;
}
function add(a, b) {
    if (isIntegerCheck(a) === false || isIntegerCheck(b) === false) {
        throw new Error('매개변수 둘 중 하나라고 정수가 아니라면 에러를 발생시키기');
    }
    let result = a + b;
    return result;
}
try {
    const result = add(2, 3);
    console.log(result);
    const resultWithFloat = add(2.5, 3);
    console.log(resultWithFloat);
}
catch (error) {
    console.error(erro9r.message);
}
