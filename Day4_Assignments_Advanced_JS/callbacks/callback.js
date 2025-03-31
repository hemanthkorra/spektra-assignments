document.getElementById('arrayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('arrayInput').value;
    let numbersArray = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    const pattern = /^[0-9,]+$/;
    if (!pattern.test(input)){
        alert('Please enter valid numbers with Comma.');
        return;
    }

    function myDisplayer(resultArray) {
        document.getElementById('output').innerText = resultArray.join(', ');
        document.getElementById('result').style.display = 'block';
    }

    function myCalculator(arr, callback) {
        for(i=0;i<arr.length;i++)
            arr[i]=arr[i]+1;
        callback(arr);
    }
    
    myCalculator(numbersArray, myDisplayer);
});
