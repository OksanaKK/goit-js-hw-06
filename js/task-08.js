
const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  } 
    let loginForm = Object({
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    });
    console.log(loginForm);
  

  event.currentTarget.reset();
}
