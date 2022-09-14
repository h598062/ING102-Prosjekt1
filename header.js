// string variabel for å holde header html kode
// bruk extension https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
// for å få highlighting av html kode i variabelen

// Header html kode, felles for alle html filer
let appHeader = /* html */ `
	<div id="banner">
		<h1>EDEL</h1>
		<p>For deling av elektriske kjøretøy</p>
	</div>
`;
// plasser html kode fra appHeader variabel inn i et element med id "app-header"
document.getElementById("app-header").innerHTML = appHeader;
