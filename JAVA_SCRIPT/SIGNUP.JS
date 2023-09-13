// Get references to the form elements and the signup button
const firstNameInput = document.querySelector('input[name="first name"]');
const lastNameInput = document.querySelector('input[name="last name"]');
const usernameInput = document.querySelector('input[name="Username"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
const signupButton = document.querySelector('.signup-box form a');

// Function to validate the form data
function validateForm() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Basic form validation checks
    if (firstName === '' || lastName === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

// Event listener for the signup button click
signupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
        // Form is valid, you can perform further actions here
        // For example, you can send the form data to the server using an AJAX request

        // For demonstration purposes, we'll just display a success message
        alert('Signup successful!'); // Replace this with your actual signup logic
        window.location.href = 'ALTLOGIN.HTML';

        // You can also redirect the user to a different page after successful signup
        // Example: window.location.href = 'success.html';
    }
});
