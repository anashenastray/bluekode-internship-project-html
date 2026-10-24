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

let records = [
  {
    namein: "Blue Water Bottle",
    isClaimed: false,
  
  },
  {
    namein: "Casio Scientific Calculator",
    isClaimed: true,
  
  }
];
let id=2
const list = document.querySelector("#record-list");
const summary = document.querySelector("#summary");

function renderRecords() {
  list.textContent = "";
  records.forEach(record,index); {
    const row = document.createElement("div");
    let statusLabel = "";
    if (record.isClaimed === true || record.status === "claimed") {
      statusLabel = "Claimed";
      row.className = "record-item status-claimed";
    } else {
      statusLabel = "Unclaimed";
      row.className = "record-item status-unclaimed";
    }
    const fringebutton = document.createElement("button");
    if (record.isClaimed === true) {
      fringebutton.textContent = "Mark as Unclaimed";
    } else {
      fringebutton.textContent = "Mark as Claimed";
    }
    fringebutton.className = "hu"
    fringebutton.addEventListener("click", function fringebuttonw(){
                                      for(const record of records){
                                      if (records[index].isClaimed = !records[index].isClaimed){
                                        record.active=!record.active;
                                      }
                                    };
                                    renderRecords();
                                    })
    let p = document.createElement("p");
    p.textContent = record.namein + " — " + " (" + statusLabel + ")";
    
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    deletebutton.addEventListener("click", function deletebuttonw(index){
                                            const kept = [];
                                                for (const record of records) {
                                                  if (records[index].isClaimed = !records[index].isClaimed) {
                                                  kept.push(record);
                                                  }
                                                }
                                            records = kept;
                                            renderRecords();
                                            })
    deletebutton.className = "hu"
    row.append(p,fringebutton,deletebutton);
    console.log(records)
    list.appendChild(row);
  }
}

function adds(event){
  event.preventDefault()
  let namein = document.querySelector("#item-name").value.trim();
  let statusInput = document.querySelector("#item-status").value.trim();

  if (namein === "" || statusInput === "") {
    alert("Please fill in both the item name and status.");
    return;
  }
  
  const newRecord = {
    namein: namein,
    id:id,
    isClaimed: statusInput.toLowerCase() === "claimed"
  };

  records.push(newRecord);
  console.log(records)
  namein ="";
  statusInput="";
  renderRecords();
}

addrecord.addEventListener("click", adds);

renderRecords();
