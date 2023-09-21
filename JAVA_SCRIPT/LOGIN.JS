const usernameInput = document.querySelector('input[name="Username"]');
const passwordInput = document.querySelector('input[name="password"]');
const LoginButton = document.querySelector('.login-box form a');


function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
if ( username === '' || password === '' ) {
    alert('Please fill in all fields.');
    return false;
}
return true;
}

LoginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
        // Form is valid, you can perform further actions here
        // For example, you can send the form data to the server using an AJAX request
   
        // For demonstration purposes, we'll just display a success message
        // alert('Login successful!'); // Replace this with your actual signup logic
         window.location.href = 'slotbooking.HTML';

        // You can also redirect the user to a different page after successful signup
        // Example: window.location.href = 'success.html';
    }
});

const show=document.querySelector(".show");
const pass=document.querySelector(".pass");

show.addEventListener("click",()=>{
    if(show.checked){
        pass.setAttribute("type","text");
    }
    else{
        pass.setAttribute("type","password");
    }
})
