const logUtForm = document.getElementById("logut");
logUtForm.addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.setItem("loggetInn", "false");
  localStorage.setItem("medlemskap", "");
  location.href = "./login.html";
});
const username = localStorage.getItem("Username");
const medlemskap = localStorage.getItem("medlemskap");
document.getElementById("page-title").firstElementChild.innerHTML =
  "Profil - " + username[0].toUpperCase() + username.substring(1);
document.getElementById("navn").innerHTML =
  "Brukernavn: " + username[0].toUpperCase() + username.substring(1);
document.getElementById("medlemskap").innerHTML =
  "Aktivt Medlemskap: " + medlemskap[0].toUpperCase() + medlemskap.substring(1);
