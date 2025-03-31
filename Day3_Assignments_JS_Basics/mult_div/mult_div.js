function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Please enter valid numbers!";
        resultDiv.style.color = "red";
        return;
    }

    const result = num1 * num2;
    resultDiv.innerHTML = `Multiplication Result: <strong>${result}</strong>`;
    resultDiv.style.color = "green";
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Please enter valid numbers!";
        resultDiv.style.color = "red";
        return;
    }

    if (num2 == 0) {
        resultDiv.innerHTML = "Cannot divide by zero!";
        resultDiv.style.color = "red";
        return;
    }

    const result = num1 / num2;
    resultDiv.innerHTML = `Division Result: <strong>${result.toFixed(2)}</strong>`;
    resultDiv.style.color = "green";
}