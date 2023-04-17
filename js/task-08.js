const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const formData = new FormData(loginForm);
  const formValues = Object.fromEntries(formData.entries());

  if (!formValues.email || !formValues.password) {
    alert("All fields are required");
    return;
  }

  console.log(formValues);

  loginForm.reset();
});
