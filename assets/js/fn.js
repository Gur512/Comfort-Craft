export default "Working with modules";

export function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function isPasswordValid(password) {
    const passwordRegex = /^\d{1,6}$/; 
    return passwordRegex.test(password);
}

export function clearInput(emailInput, password, message1, message2) {
    emailInput.value = "";
    password.value = "";
    message1.textContent = ""; 
    message2.textContent = ""; 
}

