// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const formValues = {};

//   for (let i = 0; i < loginForm.elements.length; i++) {
//     const element = loginForm.elements[i];
//     if (element.type !== 'submit') {
//       if (!element.value) {
//         alert('All fields are required');
//         return;
//       }
//       formValues[element.name] = element.value;
//     }
//   }

//   console.log(formValues);

//   loginForm.reset();
// });
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (!email || !password) {
    alert("All fields are required");
    return;
  }

  const formValues = { email, password };
  console.log(formValues);

  loginForm.reset();
});



