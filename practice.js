const studentName = "Pranav";
const greeting = document.querySelector("#greeting");
const greetButton = document.querySelector("#greet-button");

function sayHello() {
  greeting.textContent = "Hello! I am " + studentName + ". Welcome to my portfolio.";
}

if (greetButton) {
  greetButton.addEventListener("click", sayHello);
}

const nameInput = document.querySelector("#name-input");
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

function greetVisitor() {
  const visitorName = nameInput.value.trim();

  if (visitorName === "") {
    welcomeMessage.textContent = "Please enter your name first.";
    welcomeMessage.style.color = "#f85149";
  } else {
    welcomeMessage.textContent = "Welcome, " + visitorName + "!";
    welcomeMessage.style.color = "#58a6ff";
  }
}

if (welcomeButton) {
  welcomeButton.addEventListener("click", greetVisitor);
}

const records = [
  {
    name: "Blue Water Bottle",
    detail: "Stainless steel flask found near chemistry lab",
    isClaimed: false
  },
  {
    name: "Casio Scientific Calculator",
    detail: "Left on library desk table 4",
    isClaimed: true
  }
];

function renderRecords() {
  const list = document.querySelector("#record-list");
  if (!list) return;


  list.textContent = "";

  
  for (const record of records) {

    const p = document.createElement("p");

    
    let statusLabel = "";
    if (record.isClaimed === true || record.status === "claimed") {
      statusLabel = "Claimed";
      p.className = "record-item status-claimed";
    } else {
      statusLabel = "Unclaimed";
      p.className = "record-item status-unclaimed";
    }

    
    p.textContent = record.name + " — " + record.detail + " (" + statusLabel + ")";

    
    list.appendChild(p);
  }
}
renderRecords();
renderRecords();
