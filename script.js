
const input = document.getElementById("user-input");
const btn_check = document.getElementById("check-btn");
const btn_clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

function controleInput() {
    if (input.value.trim() === "") {
        alert("Please provide a phone number");
        return false;
    }
    return true;
}

function validatePhoneNumber(phoneNumber) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)(\d{3})([\s\-]?)(\d{4})$/;
    return regex.test(phoneNumber);
}

function clearInput() {
    input.value = "";
    result.innerText = "";
}

btn_check.addEventListener("click", () => {
    if (!controleInput()) return;

    const phone = input.value.trim();

    if (validatePhoneNumber(phone)) {
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.innerText = `Valid US number: ${phone}`;
    } else {
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.innerText = `Invalid US number: ${phone}`;
    }
});

btn_clear.addEventListener("click", () => {
    clearInput();
});