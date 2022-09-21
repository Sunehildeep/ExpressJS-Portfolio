/*
  File name: script.js
  Student name: Sunehildeep Singh
  Student ID: 301210976
  Date: 18th Sept, 2022
 */

/*

The functions below are for the navigation bar animation while scrolling and also to change its header img if user is not in the index page.
 */
const myNav = document.getElementById('nav')

const header = document.getElementById('navheader')
let isActive = false
if (window.location.pathname == "/") {
  toggleHeader(false);
  isActive = false
} else {
  toggleHeader(true);
  isActive = true
}

window.onscroll = function() {
  const myNav2 = document.getElementsByClassName('nav scrolled')[0]
  if(window.scrollY > window.innerHeight-900) {
    if(isActive == false) toggleHeader(true);
    if(myNav2) myNav2.style.marginTop = "-40px"
  }
  else {
    if(isActive == false) toggleHeader(false);
    if(myNav2) myNav2.style.marginTop = "0px"
  }
}

const ham = document.getElementById("hamburger")

ham.addEventListener("click", function () {
  header.classList.toggle("active");
});

function toggleHeader(state) {
  if(state == true) {
    myNav.classList.add('scrolled')
    header.classList.remove("active")
  }else{
    myNav.classList.remove('scrolled')
  }
}

function sendMessage() {
  let name = encodeURIComponent(document.getElementById("firstName").value + " " +document.getElementById("lastName").value)
  let email = encodeURIComponent(document.getElementById("emailAddress").value)
  let message = encodeURIComponent(document.getElementById("messageBody").value);
  let redirect = "mailto:nsunehil@gmail.com"
      + "?cc=" + email
      + "&subject=" + encodeURIComponent("Message from " + name)
      + "&body=" + message

  window.open(redirect)

  window.location.href = "/"
}