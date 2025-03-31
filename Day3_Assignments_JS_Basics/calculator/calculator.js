function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = "❗ Please enter valid numbers in both fields.";
        resultDiv.style.background = '#f8d7da';
        resultDiv.style.color = '#721c24';
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = "❗ Division by zero is not allowed.";
                resultDiv.style.background = '#f8d7da';
                resultDiv.style.color = '#721c24';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.innerHTML = "❗ Invalid Operation.";
            return;
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `✅ The result is: <strong>${result.toFixed(2)}</strong>`;
    resultDiv.style.background = '#e9f5e9';
    resultDiv.style.color = '#155724';
}