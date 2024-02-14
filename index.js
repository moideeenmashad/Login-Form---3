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
  if (!regexPatterns.name.test(userName.value.trim())) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
         <div>Invalid Name</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    return;
  }
  if (!regexPatterns.email.test(userEmail.value.trim())) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
         <div>Please enter a valid email address</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    return;
  }
  if (!regexPatterns.password.test(userPassword.value)) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
         <div>Password must contain at least one number, one special character, and be 6-16 characters long</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    return;
  }
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
  if (userPassword.value !== userConfirmPassword.value) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
    <div>Password do not match</div>
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
    return;
  }
  if (!userCheckPrivacyAndPolicy.checked) {
    invalidMsg.innerHTML = `<div class="alert alert-danger alert-dismissible text-center" role="alert">
    <div>Please accept the privacy and policy</div>
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
    return;
  }
  console.log("User Name:", userName.value);
  console.log("User Email:", userEmail.value);
  console.log("User Password:", userPassword.value);
};
