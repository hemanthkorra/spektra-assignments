function checkEligibility(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const resultDiv = document.getElementById('result');

    // Reset result display
    resultDiv.style.display = 'block';
    resultDiv.style.opacity = '1';

    // Name Validation
    if (name === '') {
        displayResult("Name field cannot be empty.", false);
        return;
    }

    // Age Validation
    if (isNaN(age) || age < 18) {
        displayResult("You must be at least 18 years old to vote.", false);
        return;
    }

    // Phone Number Validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        displayResult("Please enter a valid 10-digit phone number.", false);
        return;
    }

    // Success
    displayResult(`🎉 Congratulations, <strong>${name}</strong>! You are eligible to vote.`, true);
}

function displayResult(message, isSuccess) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.className = isSuccess ? 'success' : 'error';

    // Smooth fade-out after 7 seconds
    setTimeout(() => {
        resultDiv.style.opacity = '0';
        setTimeout(() => resultDiv.style.display = 'none', 500);
    }, 7000);
}