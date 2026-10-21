
const studentName = "Pranav";
let greeting = document.querySelector("#greeting");
const greetButton = document.querySelector("#greet-button");

function sayHello() {
  greeting.textContent = "Hello! I am " + studentName;
}

greetButton.addEventListener("click", sayHello);

const nameInput = document.querySelector("#name-input");
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

function greetVisitor() {
  const visitorName = nameInput.value.trim();

  if (visitorName === "") {
    welcomeMessage.textContent = "Enter your name first!";
  } else {
    welcomeMessage.textContent = "Welcome, " + visitorName + "!";
  }
}

welcomeButton.addEventListener("click", greetVisitor);


const shamay = document.querySelector("#shamay");
const towish = document.querySelector("#towish");


function buttonclicker() {
  const name = document.querySelector("#nam").value;
  towish.textContent = name + " hooola aloha hello vanakkam";
  towish.style.color="Green"
}

shamay.addEventListener("click", buttonclicker);