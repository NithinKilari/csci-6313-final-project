// Wait for the page to load before running any script
document.addEventListener('DOMContentLoaded', () => {

  // Get all the form elements we need
  const form = document.getElementById('settingsForm');
  const newPass = document.getElementById('newPassword');
  const confirmPass = document.getElementById('confirmPassword');
  const message = document.getElementById('formMessage');
  const changeAddrBtn = document.getElementById('changeAddressBtn');
  const address = document.getElementById('billingAddress');

  // 1. Handle the password change submission
  form.addEventListener('submit', (event) => {
    // Prevent the form from actually submitting
    event.preventDefault();
    
    // Clear any old messages
    message.textContent = '';
    message.className = ''; // This resets the class

    // Check 1: Does the new password match the regex pattern?
    if (!newPass.checkValidity()) {
      message.textContent = 'Password does not meet requirements. (9+ chars, 2 uppercase, 1 special).';
      message.className = 'error';
      return;
    }

    // Check 2: Do the passwords match?
    if (newPass.value !== confirmPass.value) {
      message.textContent = 'Passwords do not match.';
      message.className = 'error';
      return;
    }

    // Success!
    message.textContent = 'Password changed successfully!';
    message.className = 'success';
    
    // Clear the password fields
    document.getElementById('currentPassword').value = '';
    newPass.value = '';
    confirmPass.value = '';
  });


  // 2. Handle the "Change Address" button click
  changeAddrBtn.addEventListener('click', () => {
    
    // Clear any old messages
    message.textContent = '';
    message.className = '';

    if (address.value.trim() === '') {
      message.textContent = 'Address cannot be empty.';
      message.className = 'error';
    } else {
      // In a real app, we'd save this to a server.
      message.textContent = 'Address updated successfully!';
      message.className = 'success';
      console.log('New Address Saved:', address.value);
    }
  });

  // 3. NEW: Handle the password toggle buttons
  const toggleButtons = document.querySelectorAll('.password-toggle');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the input field (it's the sibling element right before the button)
      const input = button.previousElementSibling;
      // Get the icon inside the button
      const icon = button.querySelector('i');

      // Check the input type and toggle it
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        button.setAttribute('aria-label', 'Hide password');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        button.setAttribute('aria-label', 'Show password');
      }
    });
  });

});
