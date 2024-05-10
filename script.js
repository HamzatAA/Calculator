function updateDisplay(value) {
    const display = document.getElementById('display');
    if (!isNaN(value)) {
        display.value += value;
    } else {
        switch (value) {
            case '.':
                if (!display.value.includes('.')) {
                    display.value += value;
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                display.value += value;
                break;
            case '=':
                try {
                    display.value = calculateExpression(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            case 'CE':
                display.value = display.value.slice(0, -1);
                break;
            case '%':
                try {
                    display.value = calculateExpression(display.value + '%' + display.value);
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                display.value = '';
        }
    }
}

function calculateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}

function calculateSquareRoot(value) {
    try {
        return Math.sqrt(value);
    } catch (error) {
        return 'Error';
    }
}

function calculateModulo(value) {
    try {
        return value % value;
    } catch (error) {
        return 'Error';
    }
}

document.querySelectorAll('#number,#operator').forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});

