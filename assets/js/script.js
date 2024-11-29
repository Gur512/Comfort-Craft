'use strict';

import * as utils from "./utils.js";

const modal = utils.select('.modal');
const loginBtn = utils.select(".header-btn");
const closeBtn = utils.select(".close");
const login = utils.select('.login-btn');
const email = utils.select('.input-1');
const password = utils.select('.input-2');

utils.listen ('click', loginBtn, () => {
    modal.style.display = "block";
});

utils.listen('click', closeBtn, () => {
    modal.style.display = "none";
});

utils.listen('click', window, (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

utils.listen('click', login, (event) => {
    if (email.value.length !== 0 && password.value.length !== 0 ) {
        email.value = "";
        password.value = "";
        modal.style.display = "none";
    }
});


