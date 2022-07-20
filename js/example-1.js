/**
 *
 * <input id="js-first-num" type="text" />
 * <input id="js-second-num" type="text" />
 *
 */


const firstNum = document.getElementById('js-first-num').value;
const secondNum = document.getElementById('js-second-num').value;

function sum(a, b) {
    return a + b
}

console.log(sum(firstNum, secondNum));
