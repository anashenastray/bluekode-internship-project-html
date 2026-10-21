const a=document.querySelector("#firstnum");
const b=document.querySelector("#secondnum");
const result=document.querySelector("#resultoutput");
const addbtne=document.querySelector("#addbtn");
const subbtne=document.querySelector("#subbtn");
const mulbtne=document.querySelector("#mulbtn");
const divbtne=document.querySelector("#divbtn");
const resetbtn=document.querySelector("#resetbtn");
const sqbtne=document.querySelector("#sqbtn");
const rtbtne=document.querySelector("#rtbtn");

function addbtn(){
result.textContent=Number(a.value)+Number(b.value)
}
addbtne.addEventListener("click", addbtn);

function subbtn(){
result.textContent=Number(a.value)-Number(b.value)
}
subbtne.addEventListener("click", subbtn);

function mulbtn(){
result.textContent=Number(a.value)*Number(b.value)
}
mulbtne.addEventListener("click", mulbtn);

function divbtn(){
result.textContent=Number(a.value)/Number(b.value)
}
divbtne.addEventListener("click", divbtn);

function reset(){
result.textContent=" "
}
resetbtn.addEventListener("click", reset);

function sqbtn(){
result.textContent=Number(a.value)**Number(b.value)
}
sqbtne.addEventListener("click", sqbtn);

function rtbtn(){
result.textContent=Number(a.value)**(1/Number(b.value))
}
rtbtne.addEventListener("click", rtbtn);
