const numbers = document.querySelectorAll('.numbers')
const result = document.querySelector('.result span')
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')
const persent = document.querySelector('.persent')



let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = '0';

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        console.log(e);
        let art = e.target.getAttribute('value');
        if (isFirstValue === false) {
            getFirstValue(art)
        }
        if (isSecondValue === false) {
            getSecondValue(art)
        }
    })

}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}
function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })

    }
}

getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    } 
    
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (isFirstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue
    }
    if (firstValue!='' && secondValue!='' && sign !='') {
        resultValue = -resultValue
    }
    result.innerHTML = resultValue;
})
persent.addEventListener('click', (e) => {
    console.log(e);
    result.innerHTML = "";
    if (isFirstValue != "") {
        resultValue = firstValue/100;
        firstValue = resultValue
    }
    if (firstValue!='' && secondValue!='' && sign !='') {
        resultValue = resultValue/100
    }
    result.innerHTML = resultValue;
})

clear.addEventListener('click', ()=>{
    result.innerHTML = 0;

    firstValue = '';
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    resultValue = 0;
})





setInterval(()=>{
    
    var Clock = new Date()

    let hour = Clock.getHours() 
    let minuts = Clock.getMinutes() 
    let seconds = Clock.getSeconds() 

    let timeland = document.querySelector('.time')
    
    hour = ('0' + hour).slice(-2);
    minuts = ('0' + minuts).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    let time = `${hour}:${minuts}   `

    timeland.innerHTML = time
    
})

