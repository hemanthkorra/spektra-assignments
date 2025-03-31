document.getElementById("autoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("autoInput").value;
    let autoArray = input.split(",").map(auto => auto.trim()).filter(auto => auto !== "");
    const pattern = /^[A-Za-z,\s]+$/;
    if (!pattern.test(input)) {
        alert("Please enter a valid automobile name.");
        return;
    }

    const autoList = document.getElementById("autoList");
    const template = document.getElementById("autoTemplate");

    autoArray.forEach(autoName => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".auto-name").textContent = autoName;
        
        // Add delete button functionality
        clone.querySelector(".delete-btn").addEventListener("click", function() {
            this.parentElement.remove();
        });

        autoList.appendChild(clone);
    });

    // Clear the input field
    document.getElementById("autoInput").value = "";
});
