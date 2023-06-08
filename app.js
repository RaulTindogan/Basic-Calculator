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
    calcuInput.innerHTML+='9';
});

eight.addEventListener('click', ()=>{
    calcuInput.innerHTML+='8';
});

seven.addEventListener('click', ()=>{
    calcuInput.innerHTML+='7';
});

six.addEventListener('click', ()=>{
    calcuInput.innerHTML+='6';
});

five.addEventListener('click', ()=>{
    calcuInput.innerHTML+='5';
});

four.addEventListener('click', ()=>{
    calcuInput.innerHTML+='4';
});

three.addEventListener('click', ()=>{
    calcuInput.innerHTML+='3';
});

two.addEventListener('click', ()=>{
    calcuInput.innerHTML+='2';
});

one.addEventListener('click', ()=>{
    calcuInput.innerHTML+='1';
});

zero.addEventListener('click', ()=>{
    calcuInput.innerHTML+='0';
});

clearBtn.addEventListener('click', ()=>{
    calcuInput.innerHTML = '';
});

deleteBtn.addEventListener('click', ()=>{
    let calInput = calcuInput.innerHTML;
    let newInput = calInput.slice(0, -1);
    calcuInput.innerHTML = newInput;
});

add.addEventListener('click', ()=>{
    const value = calcuInput.innerHTML;
    if (value && value.match(reg)) {
        operator = '+';
        firstNum = value;
        calcuInput.innerHTML = '';
    } else {
        alert('Invalid Input');
        calcuInput.innerHTML = '';
    }
});

minus.addEventListener('click', ()=>{
    if (calcuInput.innerHTML) {
        operator = '-';
        firstNum = calcuInput.innerHTML;
        calcuInput.innerHTML = '';
    }
});

multiply.addEventListener('click', ()=>{
    if (calcuInput.innerHTML) {
        operator = 'x';
        firstNum = calcuInput.innerHTML;
        calcuInput.innerHTML = '';
    }
});

divide.addEventListener('click', ()=>{
    if (calcuInput.innerHTML) {
        operator = '÷';
        firstNum = calcuInput.innerHTML;
        calcuInput.innerHTML = '';
    }
});

let fNum;
let sNum;
let result;

equalBtn.addEventListener('click', ()=>{
    const value = calcuInput.innerHTML;
    if (value && value.match(reg)) {
        secondNum = calcuInput.innerHTML;
        switch(operator) {
            case '+':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.innerHTML = result = fNum + sNum;
                break;
            case '-':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.innerHTML = result = fNum - sNum;
                break;
            case 'x':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.innerHTML = result = fNum * sNum;
                break;
            case '÷':
                fNum = parseInt(firstNum);
                sNum = parseInt(secondNum);
                calcuInput.innerHTML = result = fNum / sNum;
                break;
        }
    } else {
        alert('Invalid Input. Please Input Another Number');
        calcuInput.innerHTML = '';
    }
});


