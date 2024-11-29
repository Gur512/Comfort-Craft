'use strict';

import * as utils from "./utils.js";

const modal = utils.select('.modal');
const loginBtn = utils.select(".header-btn");
const closeBtn = utils.select(".close");
const login = utils.select('.login-btn');
const emailInput = utils.select('.input-1');
const password = utils.select('.input-2');
const message1 = utils.select('.message1');
const message2 = utils.select('.message2');
// Open the modal
utils.listen('click', loginBtn, () => {
    modal.style.display = "block";
});

// Close the modal
utils.listen('click', closeBtn, () => {
    modal.style.display = "none";
});

// Close modal if clicked outside of it
// utils.listen('click', window, (event) => {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });

// Validate email and password, and close modal on success
utils.listen('click', login, (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = password.value.trim();

    // Email validation: must contain @ and .com
    if (!isEmailValid(emailValue)) {
        message1.textContent = "Please enter a valid email";
        emailInput.focus();
        return;
    }

    // Password validation: only digits, max 8 characters
    if (!isPasswordValid(passwordValue)) {
        message2.textContent = "Password must contain only 8 digit";
        password.focus();
        return;
    }

    // Clear inputs and close modal on success
    emailInput.value = "";
    password.value = "";
    message1.textContent = ""; // Clear any previous messages
    message2.textContent = ""; // Clear any previous messages
    modal.style.display = "none";
});

// Function to validate email
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to validate password
function isPasswordValid(password) {
    const passwordRegex = /^\d{1,8}$/; // Only digits, up to 8 characters
    return passwordRegex.test(password);
}
