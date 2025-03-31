function findSundays() {
    const outputDiv = document.getElementById('output');
    let result = "<h2>Sample output</h2><ul>";
    
    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, 0, 1); 
        if (date.getDay() == 0) {
            result+= `<li>1st January being a sunday ${year}</li>`;
        }
    }

    result += "</ul>";
    outputDiv.innerHTML = result;
    outputDiv.classList.add('show');
}