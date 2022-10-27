const totalBtn = document.getElementById("totalBtn");
const boatBtn = document.getElementById("båtBtn");
const bilBtn = document.getElementById("bilBtn");

function modifyButtons() {
  /*if (localStorage.getItem("loggetInn") === "true") {*/
  /*document.getElementById("loggedInTable").setAttribute("class", "");*/
  let medlemskap = localStorage.getItem("medlemskap");
  switch (medlemskap) {
    case "totalpakke":
      totalBtn.innerHTML = "Aktivt Medlem";
      boatBtn.innerHTML = "Kjøp Båtdeling";
      bilBtn.innerHTML = "Kjøp Bildeling";
      break;
    case "båtdeling":
      totalBtn.innerHTML = "Kjøp Totalpakke";
      boatBtn.innerHTML = "Aktivt Medlem";
      bilBtn.innerHTML = "Kjøp Bildeling";
      break;
    case "bildeling":
      totalBtn.innerHTML = "Kjøp Totalpakke";
      boatBtn.innerHTML = "Kjøp Båtdeling";
      bilBtn.innerHTML = "Aktivt Medlem";
      break;
    default:
      totalBtn.innerHTML = "Kjøp Totalpakke";
      boatBtn.innerHTML = "Kjøp Båtdeling";
      bilBtn.innerHTML = "Kjøp Bildeling";
  }
  /*}*/
}

modifyButtons();

totalBtn.addEventListener("click", function (event) {
  localStorage.setItem("medlemskap", "totalpakke");
  modifyButtons();
});

boatBtn.addEventListener("click", function (event) {
  localStorage.setItem("medlemskap", "båtdeling");
  modifyButtons();
});

bilBtn.addEventListener("click", function (event) {
  localStorage.setItem("medlemskap", "bildeling");
  modifyButtons();
});
