let clip = document.querySelector("#menu");
let nav = document.querySelector(".nav-items");
let close = document.querySelector("#close");

function showNav(){
  nav.classList.remove("hide-mobile");
  
}
function closeNav(){
  nav.classList.add("hide-mobile");
  
}

clip.addEventListener("click", showNav);
close.addEventListener("click", closeNav);