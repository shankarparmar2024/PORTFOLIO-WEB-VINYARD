// Wait until full page loads
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // 1️⃣ HOBBY BENEFITS INTERACTION
    // ===============================

    // Getting elements from HTML
    const addBtn = document.getElementById("addBenefitBtn");
    const inputBox = document.getElementById("benefitInput");
    const benefitList = document.getElementById("benefitList");

    // Function to add delete button to list item
    function addDeleteButton(listItem) {
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Small styling (optional)
        deleteBtn.style.marginLeft = "10px";

        // When delete button is clicked, remove that item
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(deleteBtn);
    }

    // Add delete button to already existing list items
    const existingItems = benefitList.getElementsByTagName("li");
    for (let i = 0; i < existingItems.length; i++) {
        addDeleteButton(existingItems[i]);
    }

    // When Add Benefit button is clicked
    addBtn.addEventListener("click", function () {

        const inputValue = inputBox.value.trim();

        // Check if input is not empty
        if (inputValue !== "") {

            // Create new list item
            const newItem = document.createElement("li");
            newItem.textContent = inputValue;

            // Add delete button to new item
            addDeleteButton(newItem);

            // Add item to ordered list
            benefitList.appendChild(newItem);

            // Clear input box
            inputBox.value = "";
        } else {
            alert("Please enter something first!");
        }
    });

    // ===============================
    // 2️⃣ CONTACT FORM ALERT
    // ===============================

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        // Prevent page from refreshing
        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        // Optional: Clear form after submit
        form.reset();
    });

    // ===============================
    // 3️⃣ DYNAMIC DATE & TIME
    // ===============================

    const dateTimeElement = document.getElementById("dateTime");

    function updateDateTime() {
        const now = new Date();

        // Format: day, dd month yyyy, HH:mm:ss
        const options = {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };

        const formatted = now.toLocaleString("en-IN", options);
        dateTimeElement.textContent = formatted;
    }

    // Run immediately
    updateDateTime();

    // Update every second
    setInterval(updateDateTime, 1000);

});