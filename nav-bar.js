// string variabel for å holde header html kode
// bruk extension https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
// for å få highlighting av html kode i variabelen

// Header html kode, felles for alle html filer
let navBar = /* html */ `
	<div>
		<ul class="nav-list">
			<li><a href="./index.html">Forside</a></li>
			<li><a href="./tjenester.html">Ulike kjøretøy</a></li>
			<li><a href="./medlemskap.html">Medlemskap</a></li>
			<li><a href="./steder.html">Våre lokasjoner</a></li>
		</ul>
	</div>
`;
// plasser html kode fra appHeader variabel inn i et element med id "app-header"
document.getElementById("nav-bar").innerHTML = navBar;
let elements = document.querySelectorAll("a");
for (const x of elements) {
	//let page = x.href.match(/\/\w+\.html/);
	//console.log(page[0]);
	// hvis link target er lik nåværende url eller om link target er lik nåværende url uten #text
	if (x.href == document.URL || x.href == document.URL.split("#")[0]) {
		//console.log(x.className);
		x.className = x.className + "active";
	}
}
