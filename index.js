const toggleBtn = document.querySelector("#toggle")
const navList = document.querySelector("#list")
let toggle = true
navList.style.display = "none"

toggleBtn.addEventListener("click", function(){

  toggle = !toggle
  if (!toggle){
   navList.style.display = "none"
  }else{
   navList.style.display = "block"

  }

})