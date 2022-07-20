/**
 *
 * <input id="js-first-num" type="text" />
 * <input id="js-second-num" type="text" />
 *
 */

const firstNum = (document.getElementById('js-first-num') as HTMLInputElement).value;
const secondNum = (document.getElementById('js-second-num') as HTMLInputElement).value;

function sum(a: number, b: number) {
    return a + b
}

console.log(sum(+firstNum, +secondNum));


