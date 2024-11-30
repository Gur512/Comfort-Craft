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

export function clearErrors() {
  const errors = selectAll('.error-message');
  errors.forEach(error => error.remove());
  const inputs = selectAll('.error');
  inputs.forEach(input => input.classList.remove('error'));
}

export function showError(input, message) {
  input.classList.add('error');
  const error = document.createElement('span');
  error.className = 'error-message';
  error.textContent = message;
  input.parentElement.appendChild(error);
}

export function validateNotEmpty(input, message) {
  if (!input.value.trim()) {
      showError(input, message);
      return false;
  }
  return true;
}

export function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.value.trim())) {
      showError(input, 'Please enter a valid email address.');
      return false;
  }
  return true;
}

export function validatePhone(input) {
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(input.value.trim())) {
      showError(input, 'Please enter a valid 10-digit phone number.');
      return false;
  }
  return true;
}