if (localStorage.getItem("loggetInn") === "true") {
  document.getElementById("nav-login").className = "hidden";
  document.getElementById("nav-profil").className = "";
} else {
  document.getElementById("nav-profil").className = "hidden";
  document.getElementById("nav-login").className = "";
}
