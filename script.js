const formLoginContainer = document.querySelector(".login-container");
const formSignupContainer = document.querySelector(".signup-container");
const formSignupLink = document.querySelector(".change-form-signup");
const formLoginLink = document.querySelector(".change-form-login");

formSignupLink.addEventListener("click",() => {
    formLoginContainer.classList.toggle("hide");
    formSignupContainer.classList.toggle("hide");
});

formLoginLink.addEventListener("click",() => {
    formSignupContainer.classList.toggle("hide");
    formLoginContainer.classList.toggle("hide");
});
