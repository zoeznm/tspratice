function isIntegerCheck(value) {
    var checkValue = Number.isInteger(value);
    return checkValue;
}
function add(a, b) {
    if (isIntegerCheck(a) === false || isIntegerCheck(b) === false) {
        throw new Error('매개변수 둘 중 하나라고 정수가 아니라면 에러를 발생시키기');
    }
    var result = a + b;
    return result;
}
try {
    var result = add(2, 3);
    console.log(result);
    var resultWithFloat = add(2.5, 3);
    console.log(resultWithFloat);
}
catch (error) {
    console.error(error.message);
}
