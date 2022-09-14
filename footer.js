// string variabel for å holde footer html kode
// bruk extension https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
// for å få highlighting av html kode i variabelen

// Footer html kode, felles for alle html filer
let appFooter = /* html */ `
	
`;
// plasser html kode fra appFooter variabel inn i et element med id "app-footer"
document.getElementById("app-footer").innerHTML = appFooter;
