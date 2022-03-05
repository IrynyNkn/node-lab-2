const BUTTONS_SCIENTIFIC = [
    {
        text: "C",
        classes: ["btn", "is-clear", "span-2", "orange", "operator"]
    },
    {
        text: "←",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "/",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "π",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "cos",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "7",
        classes: ["btn"]
    },
    {
        text: "8",
        classes: ["btn"]
    },
    {
        text: "9",
        classes: ["btn"]
    },
    {
        text: "x",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "sqrt",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "sin",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "4",
        classes: ["btn"]
    },
    {
        text: "5",
        classes: ["btn"]
    },
    {
        text: "6",
        classes: ["btn"]
    },
    {
        text: "-",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "sq",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "tan",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "1",
        classes: ["btn"]
    },
    {
        text: "2",
        classes: ["btn"]
    },
    {
        text: "3",
        classes: ["btn"]
    },
    {
        text: "+",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "x^",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "exp",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "0",
        classes: ["btn", "span-3"]
    },
    {
        text: "=",
        classes: ["btn", "orange", "operator", "span-2"]
    },
    {
        text: "ln",
        classes: ["btn", "orange", "operator"]
    },
];
const BUTTONS_SIMPLE = [
    {
        text: "C",
        classes: ["btn", "is-clear", "span-2", "orange", "operator"]
    },
    {
        text: "←",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "/",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "7",
        classes: ["btn"]
    },
    {
        text: "8",
        classes: ["btn"]
    },
    {
        text: "9",
        classes: ["btn"]
    },
    {
        text: "x",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "4",
        classes: ["btn"]
    },
    {
        text: "5",
        classes: ["btn"]
    },
    {
        text: "6",
        classes: ["btn"]
    },
    {
        text: "-",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "1",
        classes: ["btn"]
    },
    {
        text: "2",
        classes: ["btn"]
    },
    {
        text: "3",
        classes: ["btn"]
    },
    {
        text: "+",
        classes: ["btn", "orange", "operator"]
    },
    {
        text: "0",
        classes: ["btn", "span-3"]
    },
    {
        text: "=",
        classes: ["btn", "orange", "operator", "span-1"]
    },
];
const PI = 3.14159265359;

let currentTotal = 0;
let buffer = "0";
let previousOperator = null;

// (renderNavigation = () => {
//     const nav_wrap = document.createElement("div");
//     nav_wrap.classList.add("nav_wrap");
//
//     const nav = document.createElement("div");
//     nav.classList.add("navigation");
//     nav_wrap.appendChild(nav);
//
//     const img = document.createElement("img");
//     img.classList.add("settings");
//     img.alt = "settings";
//     img.src = "./imgs/settings.png";
//     nav.appendChild(img);
//
//     const select_wrap = document.createElement("div");
//     select_wrap.classList.add("select_wrap");
//     nav_wrap.appendChild(select_wrap);
//
//     const select = document.createElement("div");
//     select_wrap.classList.add("select");
//     select_wrap.appendChild(select);
//
//     const simple = document.createElement("div");
//     simple.classList.add("value");
//     simple.id = "simple";
//     simple.textContent = "Simple mode"
//     select.appendChild(simple);
//
//     const scientific = document.createElement("div");
//     scientific.classList.add("value");
//     scientific.id = "scientific";
//     scientific.textContent = "Scientific mode"
//     select.appendChild(scientific);
//
//     document.getElementById("scientific_calc").appendChild(nav_wrap);
// })();

const select = document.querySelector(".select_wrap");
const historyContainer = document.getElementById("history");

document.querySelector('.calculator-buttons').addEventListener("click",function(event){
    buttonClick(event.target.innerHTML);
});

document.querySelector('.settings').addEventListener('click', (event) => {
    select.classList.add('visible');
    changeCalculatorMode();
});

const changeCalculatorMode = () => {
    const modes = document.querySelectorAll('.value');
    modes.forEach(mode => mode.addEventListener('click', () => {
        if(mode.id === "scientific") {
            renderScientificCalculator();
        }

        if(mode.id === "simple"){
            renderSimpleCalculator();
        }
        select.classList.remove('visible');
    }))
};

const addListenerToButtons = (node) => {
    node.addEventListener("click",(event) => {
        console.log(event.target.innerHTML)
        buttonClick(event.target.innerHTML);
    });
};

const renderScientificCalculator = () => {
    document.querySelector(".default_calc").innerHTML = "";

    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const input = document.createElement("input");
    input.classList.add("calc-numbers");
    input.type = "text";
    input.value = "0";
    calculator.appendChild(input);

    const calculatorScientific = document.createElement("div");
    calculatorScientific.classList.add("calculator-scientific");
    addListenerToButtons(calculatorScientific);
    calculator.appendChild(calculatorScientific);

    BUTTONS_SCIENTIFIC.forEach(btn => {
        const btnToRender = document.createElement("button");
        btnToRender.classList.add(...btn.classes);
        btnToRender.textContent = btn.text;
        calculatorScientific.appendChild(btnToRender);
    });

    if(!document.querySelector(".calculator-scientific")) {
        document.getElementById("scientific_calc").appendChild(calculator);
    }
};

const renderSimpleCalculator = () => {
    document.getElementById("scientific_calc").innerHTML = "";

    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const input = document.createElement("input");
    input.classList.add("calc-numbers");
    input.type = "text";
    input.value = "0";
    calculator.appendChild(input);

    const calculatorScientific = document.createElement("div");
    calculatorScientific.classList.add("calculator-buttons");
    addListenerToButtons(calculatorScientific);
    calculator.appendChild(calculatorScientific);


    BUTTONS_SIMPLE.forEach(btn => {
        const btnToRender = document.createElement("button");
        btnToRender.classList.add(...btn.classes);
        btnToRender.textContent = btn.text;
        calculatorScientific.appendChild(btnToRender);
    });

    if(!document.querySelector(".calculator-buttons")) {
        document.querySelector(".default_calc").appendChild(calculator);
    }
};

const buttonClick = (value) => {
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerenderScreen();
};

const handleSymbol = (value) => {
    if(value === "sq" || value === "sqrt" || value === "ln"
        || value === "exp" || value === "π" || value === "cos"
        || value === "sin" || value === "tan") {
        handleOperator(value);
        return;
    }

    switch (value){
        case "C":
            buffer = "0";
            currentTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOperator = null;
            currentTotal = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0";
            }
            else{
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
};

const handleOperator = (operator) => {
    let result = null;
    let currentNumber = parseInt(buffer);

    switch (operator){
        case "sq":
            result = Math.pow(currentNumber, 2);
            break;
        case "sqrt":
            result = Math.sqrt(currentNumber);
            break;
        case "ln":
            result = Math.log(currentNumber);
            break;
        case "exp":
            result = Math.exp(currentNumber);
            break;
        case "π":
            buffer = PI.toString();
            return;
        case "cos":
            result = Math.cos(currentNumber);
            break;
        case "sin":
            result = Math.sin(currentNumber);
            break;
        case "tan":
            result = Math.tan(currentNumber);
            break;
    }

    buffer = result;
    rerenderScreen();
    logHistory(result, currentNumber, operator);
};

const handleNumber = (value) => {
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
};

const handleMath = (value) => {
    const internalBuffer = Number(buffer);

    if (currentTotal === 0){
        currentTotal = internalBuffer;
    }else{
        flushOperation(internalBuffer);
    }

    previousOperator = value;

    buffer = "0";
}

const flushOperation = (internalBuffer) => {
    let operand1 = currentTotal;
    if(previousOperator === "+"){
        currentTotal += internalBuffer;
    }else if(previousOperator === "-"){
        currentTotal -= internalBuffer;
    }else if(previousOperator === "x"){
        currentTotal *= internalBuffer;
    }else if(previousOperator === "x^"){
        currentTotal = Math.pow(currentTotal, internalBuffer);
    }else{
        currentTotal /= internalBuffer;
    }
    logHistory(currentTotal, operand1, previousOperator, internalBuffer);
};

const rerenderScreen = () => {
    document.querySelector(".calc-numbers").value = buffer;
};

const logHistory = (result, operand1, operator, operand2 = null) => {
    const log = document.createElement("li");
    let logString = '';
    if(operand2) {
        if(operator === "x^") {
            logString = `${operand1}<sup>${operand2}</sup> = ${result}`;
        }else{
            logString = `${operand1} ${operator} ${operand2} = ${result}`;
        }
    }else{
        switch (operator){
            case "sq":
                logString = `${operand1}<sup>2</sup> = ${result}`;
                break;
            case "sqrt":
                logString = `<span>&#8730;</span>${operand1} = ${result}`;
                break;
            default:
                logString = `${operator}(${operand1}) = ${result}`
        }
    }
    log.innerHTML = logString;
    historyContainer.appendChild(log);
};
