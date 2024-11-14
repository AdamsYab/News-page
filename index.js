const hambourger = document.querySelector("#hambourger");
const menu = document.querySelector("#menu");

hambourger.addEventListener("click", () =>{

hambourger.classList.toggle("active");
menu.classList.toggle("show");


})
