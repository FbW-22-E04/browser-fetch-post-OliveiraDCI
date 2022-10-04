import "../styles/main.scss";
import "babel-polyfill";

const form = document.getElementById("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");
const button = document.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    const settings = {
      method: "POST",
      body: payload,
    };

    const response = fetch(
      "https://jsonplaceholder.typicode.com/posts",
      settings
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));

    console.log(response);

    alert("Your form has been submitted. ");

    name.value = "";
    email.value = "";
    password.value = "";
    message.value = "";
    checkbox.checked = false;
  } catch (err) {
    console.log("Error: ", err.message);
  }
});
