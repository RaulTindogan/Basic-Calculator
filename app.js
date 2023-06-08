let calcuInput = document.getElementById('calculator-input');
let clearBtn = document.getElementById('clear-btn');
let deleteBtn = document.getElementById('delete-btn');
let equalBtn = document.getElementById('equal-btn');
let add = document.getElementById('add-btn');
let minus = document.getElementById('subtract-btn');
let multiply = document.getElementById('multiply-btn');
let divide = document.getElementById('divide-btn');
let nine = document.getElementById('9');
let eight = document.getElementById('8');
let seven = document.getElementById('7');
let six = document.getElementById('6');
let five = document.getElementById('5');
let four = document.getElementById('4');
let three = document.getElementById('3');
let two = document.getElementById('2');
let one = document.getElementById('1');
let zero = document.getElementById('0');

let firstNum = 0;
let secondNum = 0;

let operator = "";

let reg = /^[0-9]+$/g;

nine.addEventListener('click', ()=>{
    calcuInput.value+='9';
});

eight.addEventListener('click', ()=>{
    calcuInput.value+='8';
});

seven.addEventListener('click', ()=>{
    calcuInput.value+='7';
});

six.addEventListener('click', ()=>{
    calcuInput.value+='6';
});

five.addEventListener('click', ()=>{
    calcuInput.value+='5';
});

four.addEventListener('click', ()=>{
    calcuInput.value+='4';
});

three.addEventListener('click', ()=>{
    calcuInput.value+='3';
});

two.addEventListener('click', ()=>{
    calcuInput.value+='2';
});

one.addEventListener('click', ()=>{
    calcuInput.value+='1';
});

zero.addEventListener('click', ()=>{
    calcuInput.value+='0';
});

clearBtn.addEventListener('click', ()=>{
    calcuInput.value = '';
});

deleteBtn.addEventListener('click', ()=>{
    let calInput = calcuInput.value;
    let newInput = calInput.slice(0, -1);
    calcuInput.value = newInput;
});

add.addEventListener('click', ()=>{
    const value = calcuInput.value;
    if (value && value.match(reg)) {
        operator = '+';
        firstNum = value;
        calcuInput.value = '';
    } else {
        alert('Invalid Input');
        calcuInput.value = '';
    }
});

minus.addEventListener('click', ()=>{
    if (calcuInput.value) {
        operator = '-';
        firstNum = calcuInput.value;
        calcuInput.value = '';
    }
});

multiply.addEventListener('click', ()=>{
    if (calcuInput.value) {
        operator = 'x';
        firstNum = calcuInput.value;
        calcuInput.value = '';
    }
});

divide.addEventListener('click', ()=>{
    if (calcuInput.value) {
        operator = '÷';
        firstNum = calcuInput.value;
        calcuInput.value = '';
    }
});

let fNum;
let sNum;
let result;

equalBtn.addEventListener('click', ()=>{
    const value = calcuInput.value;
    if (value && value.match(reg)) {
        secondNum = calcuInput.value;
        switch(operator) {
            case '+':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.value = result = fNum + sNum;
                break;
            case '-':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.value = result = fNum - sNum;
                break;
            case 'x':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.value = result = fNum * sNum;
                break;
            case '÷':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.value = result = fNum / sNum;
                break;
        }
    } else {
        alert('Invalid Input. Please Input Another Number');
        calcuInput.value = '';
    }
});


