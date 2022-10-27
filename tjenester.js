/**
 * @desc	en onclick handler for å skjule
 * 			det som vises i tjeneste visningsrute
 * 			og deretter vise den som ble trykket på
 *
 * @param {string} id string med id til element som skal vises
 */
function tjeneste_onclick(id) {
  // finn alle div elementer inne i et element med klasse tjenesteinnhold
  // deretter sett style display til none på hver av de
  // dette vil gjemme elementet, og gjøre at det ikke bruker noe DOM plass
  document.querySelectorAll(".visningsrute-innhold").forEach((e) => {
    let strings = e.className.split(" ");
    //console.log(e.className);
    let outstr = "";
    for (const str of strings) {
      if (str !== "hidden") {
        outstr += str;
      }
    }
    e.className = outstr + " hidden";
    //console.log(e.className);
  });
  // sett style til den som ble trykket på (id) til display block
  // dette vil vise elementet
  let e = document.getElementById(id);
  let strings = e.className.split(" ");
  let outstr = "";
  for (const str of strings) {
    if (str !== "hidden") {
      outstr += str;
    }
  }
  e.className = outstr;
}
