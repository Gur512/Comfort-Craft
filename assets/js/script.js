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

import { 
    clearErrors, validateNotEmpty, validateEmail, validatePhone } from './fn.js';

const form = select('form[action="/submit_registration"]');
const firstName = select('#first-name');
const lastName = select('#last-name');
const email = select('#email');
const phone = select('#phone');

// Handle form submission
listen('submit', form, event => {
    clearErrors();

    let isValid = true;

    isValid &= validateNotEmpty(firstName, 'First name is required.');
    isValid &= validateNotEmpty(lastName, 'Last name is required.');
    isValid &= validateEmail(email);
    isValid &= validatePhone(phone);

    if (!isValid) {
        event.preventDefault();
    }
});
