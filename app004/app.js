const username = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", event => {
  if (username.value < 3 || username.value == null) {
    username.classList.add("login-input-error");
    event.preventDefault();
  }
  if (password.value < 8 || password.value == null) {
    password.classList.add("login-input-error");
    event.preventDefault();
  }
});
