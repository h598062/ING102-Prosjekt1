// string variabel for å holde header html kode
// bruk extension https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
// for å få highlighting av html kode i variabelen

// Header html kode, felles for alle html filer
let navBar = /* html */ `
	<div>
		<ul class="nav-list">
			<li class="nav-list-elem"><a href="./index.html">Forside</a></li>
			<li class="nav-list-elem"><a href="./tjenester.html">Ulike kjøretøy</a></li>
			<li class="nav-list-elem"><a href="./medlemskap.html">Medlemskap</a></li>
			<li class="nav-list-elem"><a href="./steder.html">Våre lokasjoner</a></li>
		</ul>
	</div>
`;
// plasser html kode fra appHeader variabel inn i et element med id "app-header"
document.getElementById("nav-bar").innerHTML = navBar;
let elements = document.querySelectorAll("a");
for (const x of elements) {
	//let page = x.href.match(/\/\w+\.html/);
	//console.log(page[0]);
	if (x.href == document.URL) {
		console.log(x.className);
		x.className = x.className + "active";
	}
}
