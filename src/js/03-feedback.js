import throttle from "lodash/throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}, 500);

form.addEventListener("input", () => {
  saveFormState();
});

window.addEventListener("load", () => {
  const savedState = JSON.parse(
    localStorage.getItem("feedback-form-state") || "{}"
  );
  emailInput.value = savedState.email || "";
  messageInput.value = savedState.message || "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem("feedback-form-state");
  console.log(formState);
  emailInput.value = "";
  messageInput.value = "";
});

