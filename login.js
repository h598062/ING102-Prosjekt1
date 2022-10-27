// Forhåndsdefinerte test-brukere, lage backend system er utenfor scope av oppgaven, login blir lagret i localstorage
const brukere = [
  { username: "bjørnar", password: "12345", medlemskap: "totalpakke" },
  { username: "elisabeth", password: "12345", medlemskap: "totalpakke" },
  { username: "halvor", password: "12345", medlemskap: "båtdeling" },
  { username: "oda", password: "12345", medlemskap: "bildeling" },
  { username: "storm", password: "12345", medlemskap: "bildeling" },
  { username: "tarek", password: "12345", medlemskap: "totalpakke" },
  { username: "tuva", password: "12345", medlemskap: "båtdeling" },
  { username: "test", password: "test", medlemskap: "ingen" },
];

const loginForm = document.getElementById("loginForm");
document.getElementById("usernameLogin").value =
  localStorage.getItem("Username");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let username = formData.get("username");
  let password = formData.get("password");
  if (!checkFormData(username, password)) {
    loginForm.reset();
    return;
  }

  for (const bruker of brukere) {
    /*console.log(
      bruker.username +
        ": " +
        bruker.password +
        " - " +
        username +
        ": " +
        password
    );*/
    if (username.toLowerCase() === bruker.username.toLowerCase()) {
      localStorage.setItem("Username", bruker.username);
      if (password === bruker.password) {
        localStorage.setItem("loggetInn", "true");
        localStorage.setItem("medlemskap", bruker.medlemskap);
        console.log("Logget inn");
        loginForm.reset();
        location.href = "./profil.html";
        return;
      } else {
        window.alert("Feil passord");
        console.log("Feil passord");
        loginForm.reset();
        return;
      }
    }
  }
  window.alert("Feil brukernavn");
  console.log("Feil brukernavn");
  loginForm.reset();
});

const lagBrukerBtn = document.getElementById("newAccBtn");
lagBrukerBtn.addEventListener("click", function (event) {
  loginForm.setAttribute("class", "login hidden");
  document.getElementById("nyBruker").setAttribute("class", "login");
  lagBrukerBtn.setAttribute("class", "login");
  document.getElementById("nyBrukerTekst").innerText =
    "Skriv inn ønsket brukernavn og passord";
});

const nyBrukerForm = document.getElementById("nyBruker");
nyBrukerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let username = formData.get("username").toString();
  let password = formData.get("password").toString();
  if (!checkFormData(username, password)) {
    nyBrukerForm.reset();
    return;
  }
  console.log(username + " - " + password);
  if (typeof username === "string") {
    localStorage.setItem("Username", username);
    localStorage.setItem("loggetInn", "true");
    localStorage.setItem("medlemskap", "ingen");
    console.log("Logget inn");
    nyBrukerForm.reset();
    location.href = "./profil.html";
  }
});

function checkFormData(username, password) {
  if (username.length < 1) {
    window.alert("Brukernavn mangler");
    return false;
  }
  if (password.length < 1) {
    window.alert("Passord mangler");
    return false;
  }
  return true;
}
