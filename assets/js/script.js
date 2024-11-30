'use strict';

import * as utils from "./utils.js";
import topics, { isEmailValid, isPasswordValid, clearInput } from "./fn.js";

const modal = utils.select('.modal');
const loginBtn = utils.select(".header-btn");
const closeBtn = utils.select(".close");
const login = utils.select('.login-btn');
const emailInput = utils.select('.input-1');
const password = utils.select('.input-2');
const message1 = utils.select('.message1');
const message2 = utils.select('.message2');

utils.listen('click', loginBtn, () => {
    modal.style.display = "block";
});

utils.listen('click', closeBtn, () => {
    modal.style.display = "none";
});


utils.listen('click', login, (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = password.value.trim();

    if (!isEmailValid(emailValue)) {
        message1.textContent = "Please enter a valid email";
        emailInput.focus();
        return;
    } else {
        message1.textContent = "";
    }

    if (!isPasswordValid(passwordValue)) {
        message2.textContent = "Please use only digits";
        password.focus();
        return 'hey';
    } else {
        message2.textContent = "";
    }

    clearInput(emailInput, password, message1, message2);
    modal.style.display = "none";
});

import "Working with modules";
import { isEmailValid, isPasswordValid, clearInput } from "./path-to-your-module.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("user-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

    if (!isEmailValid(email)) {
      emailError.textContent = "Please enter a valid email.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (!isPasswordValid(password)) {
      passwordError.textContent = "Password must be 1-6 digits.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (isValid) {
      console.log("Form submitted successfully!");
      // Optionally send data to a server
      clearInput(emailInput, passwordInput, emailError, passwordError);
    }
  });

  emailInput.addEventListener("input", () => {
    if (!isEmailValid(emailInput.value.trim())) {
      emailError.textContent = "Invalid email format.";
    } else {
      emailError.textContent = "";
    }
  });

  passwordInput.addEventListener("input", () => {
    if (!isPasswordValid(passwordInput.value.trim())) {
      passwordError.textContent = "Password must be 1-6 digits.";
    } else {
      passwordError.textContent = "";
    }
  });
});

