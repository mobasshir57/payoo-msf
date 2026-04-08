
// Log in validation script
document.getElementById('login-btn').addEventListener('click', function() {

    // 1- Get the mobile number input
     const numberInput = document.getElementById('input-number');
     const number = numberInput.value;
    
    // 2- get pin from the input fields
    const pinInput = document.getElementById('input-pin');
    const pin = pinInput.value;
    // console.log(pin);

    // 3- validate the mobile number and pin
    if(number =='01234567890' && pin == '1234'){
        //4- i- if valid, show success message and redirect to home  page,
        alert('Login Successfull');
        window.location.href = "./home.html";
    }
    else{
        // 4- ii- else show error message
        alert('Invalid number or pin. Please try again.');
        return;
    }
});