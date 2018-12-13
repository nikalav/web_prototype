let userName=document.querySelector(".bubbly-button")
let psw=document.querySelector("#psw")
let log=document.querySelector("#log")
let bubblyButtons=document.querySelector("#log")

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


log.addEventListener("click", validate)

function validate() {

if ( userName == "kea" && psw == "kea"){
window.location.href = "<home.html>";} }
    // Redirecting to other page.
