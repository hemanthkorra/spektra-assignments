document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const birthYear = parseInt(document.getElementById('yearInput').value);
    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/;
    if (!name || isNaN(birthYear) || birthYear > 2025 || birthYear < 1900 || !namePattern.test(name)) {
        alert("Please enter a valid name and year between 1900 and 2025.");
        return;
    }

    function counter() {
        let count = 0; 
        
        return function () {
            count++;
            return count;
        };
    }

    const increment = counter();
    let finalValue;

    for (let i = birthYear; i < 2025; i++) {
        finalValue = increment();
    }

    document.getElementById('userName').innerText = name;
    document.getElementById('counterResult').innerText = finalValue;
    document.getElementById('result').style.display = 'block';
});
