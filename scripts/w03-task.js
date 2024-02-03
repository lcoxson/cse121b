/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
};

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const total = (subtotal, discount) => subtotal - discount;

const calcTotal = () => {
    const subtotal = Number(document.querySelector("#subtotal").value);
    const memberBox = document.getElementById("member");
    let total = 0

    if (memberBox.checked) {
        total = subtotal * .8
    }
    else {
        total = subtotal
    };
    
    let formatTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    document.querySelector("#total").innerHTML = `${formatTotal.format(total)}`;

}
document.querySelector("#getTotal").addEventListener("click", calcTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector("#array").innerHTML = `${numberArray}`;

/* Output Odds Only Array */
let oddArray = numberArray.filter((number) => (number % 2) == 1);

document.querySelector("#odds").innerHTML = `${oddArray}`;

/* Output Evens Only Array */
let evenArray = numberArray.filter((number) => (number % 2) == 0);

document.querySelector("#evens").innerHTML = `${evenArray}`;

/* Output Sum of Org. Array */
let sumOfArray = numberArray.reduce((sum, number) => sum + number);

document.querySelector("#sumOfArray").innerHTML = `${sumOfArray}`;

/* Output Multiplied by 2 Array */
let multiplyArray = numberArray.map((number) => number * 2);

document.querySelector("#multiplied").innerHTML = `${multiplyArray}`;

/* Output Sum of Multiplied by 2 Array */
let x2Array = numberArray.map((number) => number * 2);
let sumMultiplyArray = x2Array.reduce((sum, number) => sum + number, 0);

document.querySelector("#sumOfMultiplied").innerHTML = `${sumMultiplyArray}`