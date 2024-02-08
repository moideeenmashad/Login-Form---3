let userName = document.querySelector("#user-name");
let userEmail = document.querySelector("#user-email");
let userPassword = document.querySelector("#user-password");
let userConfirmPassword = document.querySelector("#user-confirm-password");
let userCheckPrivacyAndPolicy = document.querySelector("#user-check-pp");
let invalidMsg = document.querySelector("#invalid-msg");

const regexPatterns = {
  name: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
};

const signUp = () => {
  // Validate name using the defined regular expression
  if (!regexPatterns.name.test(userName.value.trim())) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
         <div>Invalid Name</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    return;
  }

  // Validate email using the defined regular expression
  if (!regexPatterns.email.test(userEmail.value.trim())) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
         <div>Please enter a valid email address</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    return;
  }

  // Validate password using the defined regular expression
  if (!regexPatterns.password.test(userPassword.value)) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
         <div>Password must contain at least one number, one special character, and be 6-16 characters long</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    return;
  }

  // Basic input validation for password fields
  if (
    userName.value.trim() === "" ||
    userEmail.value.trim() === "" ||
    userPassword.value === "" ||
    userConfirmPassword.value === ""
  ) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
    <div>All field are required</div>
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
    return;
  }

  // Check if passwords match
  if (userPassword.value !== userConfirmPassword.value) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
    <div>Password do not match</div>
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
    return;
  }

  // Check if privacy and policy checkbox is checked
  if (!userCheckPrivacyAndPolicy.checked) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
    <div>Please accept the privacy and policy</div>
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
    return;
  }

  // If all validations pass, you can proceed with the signup process
  console.log("User Name:", userName.value);
  console.log("User Email:", userEmail.value);
  console.log("User Password:", userPassword.value);

  // Add your signup logic here, such as sending data to the server
  // using AJAX or fetch.

  // Redirect to the home page after successful signup
  //   window.location.href = "home page.html";
};

// function togglePasswordVisibility(inputId) {
//   const passwordInput = document.getElementById(inputId);

// Toggle the 'type' attribute between 'password' and 'text'
//   passwordInput.type = passwordInput.type === "password" ? "text" : "password";
// }

//   onclick="togglePasswordVisibility('user-confirm-password')"
