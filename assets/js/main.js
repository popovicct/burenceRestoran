//alert("ok")

const meni=[{naziv:"Početna", linK:"index.html#navigacija"},
			{naziv:"Jelovnik", linK:"index.html#jelovnikFilter"},
			{naziv:"Karta pića", linK:"index.html#picePrilozi"},
			{naziv:"Prilozi", linK:"index.html#picePrilozi"},
			{naziv:"Poručite", linK:"index.html#poruciNaslov"},
			{naziv:"Autor", linK:"autor.html"},
];

const slikePocetna=[{putanja:"assets/images/restoran1.jpg", altTag:"rim"},
					{putanja:"assets/images/restoran2.jpg", altTag:"moskva"},
					{putanja:"assets/images/restoran1.jpg", altTag:"lisabon"},
					{putanja:"assets/images/restoran2.jpg", altTag:"istanbul"}
];
function ispisiNav(x,y){
let cuvanje=`<ul class="${y}">`
for(let i=0;i<meni.length;i++){
	cuvanje+=`<li> <a class="zlink" href="${meni[i].linK}">${meni[i].naziv}</a></li>`;
}
cuvanje+=`</ul>`;
document.getElementById(x).innerHTML=cuvanje;
}
ispisiNav("meni-lista","lezi");

const hamburger=document.getElementById("hamburger");
if(hamburger){
	hamburger.addEventListener("click", function(){
	const listaMeni=document.querySelector(".lezi");
	listaMeni.classList.toggle("prikazi-meni");
})
}




let ubacivanjeSlike=""
	for(let i=0;i<slikePocetna.length;i++){
		ubacivanjeSlike+=`<img class="setSlika" src="${slikePocetna[i].putanja}" alt="${slikePocetna[i].altTag}"/>`
	}
var provera1=document.getElementById("rest-dost");
if(provera1){provera1.innerHTML=ubacivanjeSlike;}



const jelovnik=[
	{slika:"assets/images/burg10.jpeg", jelo:"Bacon burger", kolicina:"350 gr", kategorija:"burger", cena:"680 RSD"},
	{slika:"assets/images/burg4.jpeg", jelo:"Double burger", kolicina:"350 gr", kategorija:"burger", cena:"750 RSD"},
	{slika:"assets/images/burg9.jpeg", jelo:"Double cheese", kolicina:"350 gr", kategorija:"burger", cena:"650 RSD"},
	{slika:"assets/images/burg5.jpeg", jelo:"Chicken burger", kolicina:"350 gr", kategorija:"burger", cena:"700 RSD"},
	{slika:"assets/images/burg6.jpeg", jelo:"Klasik", kolicina:"350 gr", kategorija:"burger", cena:"650 RSD"},
	{slika:"assets/images/burg8.jpeg", jelo:"Smash sa slaninom", kolicina:"350 gr", kategorija:"burger", cena:"650 RSD"},
	
	{slika:"assets/images/pica3.jpeg", jelo:"Četiri vrste sira", kolicina:"24cm, 32cm, 42cm", kategorija:"pica", cena:"600 RSD, 1100 RSD, 2000 RSD"},
	{slika:"assets/images/pica1.jpeg", jelo:"Mediteran", kolicina:"24cm, 32cm, 42cm", kategorija:"pica", cena:"700 RSD, 850 RSD, 2500 RSD"},
	{slika:"assets/images/pica2.jpeg", jelo:"Piletina", kolicina:"24cm, 32cm, 42cm", kategorija:"pica", cena:"700 RSD, 850 RSD, 2500 RSD"},
	{slika:"assets/images/pica5.jpeg", jelo:"Premium piletina", kolicina:"24cm, 32cm, 42cm", kategorija:"pica", cena:"800 RSD, 1350 RSD, 2800 RSD"},
	{slika:"assets/images/pica4.jpeg", jelo:"Margarita", kolicina:"24cm, 32cm, 42cm", kategorija:"pica", cena:"650 RSD, 850 RSD, 2100 RSD"},

	{slika:"assets/images/karadjordjeva.jpeg", jelo:"Karađorđeva", kolicina:"350 gr", kategorija:"meso", cena:"1200 RSD"},
	{slika:"assets/images/cevapi2.jpeg", jelo:"Ćevapi", kolicina:"300 gr", kategorija:"meso", cena:"1100 RSD"},
	{slika:"assets/images/meso1.jpeg", jelo:"Pohovana piletina", kolicina:"250 gr", kategorija:"meso", cena:"850 RSD"},
	{slika:"assets/images/meso2.jpeg", jelo:"Biftek", kolicina:"300 gr", kategorija:"meso", cena:"23000 RSD"},
	
	{slika:"assets/images/sopska.jpeg", jelo:"Šopska salata", kolicina:"200 gr", kategorija:"salate", cena:"450 RSD"},
	{slika:"assets/images/srpska.jpeg", jelo:"Srpska salata", kolicina:"200 gr", kategorija:"salate", cena:"400 RSD"},
	{slika:"assets/images/paprika1.jpeg", jelo:"Pečena paprika", kolicina:"200 gr", kategorija:"salate", cena:"350 RSD"},
	{slika:"assets/images/paradajz.jpeg", jelo:"Paradajz", kolicina:"200 gr", kategorija:"salate", cena:"300 RSD"},
	{slika:"assets/images/cezar.jpeg", jelo:"Cezar Salata", kolicina:"200 gr", kategorija:"salate", cena:"300 RSD"},
	{slika:"assets/images/salataPiletina.jpeg", jelo:"Salata Sa Piletinom", kolicina:"200 gr", kategorija:"salate", cena:"300 RSD"},
	
	{slika:"assets/images/corba1.jpeg", jelo:"Teleća čorba", kolicina:"250 ml, 400 ml", kategorija:"corbe", cena:"280 RSD, 320 RSD"},
	{slika:"assets/images/corba7.jpeg", jelo:"Riblja čorba", kolicina:"250 ml, 400 ml", kategorija:"corbe", cena:"330 RSD, 370 RSD"},
	{slika:"assets/images/corba5.jpeg", jelo:"Čorba od povrća", kolicina:"250 ml, 400 ml", kategorija:"corbe", cena:"330 RSD, 370 RSD"},
	{slika:"assets/images/corba9.jpeg", jelo:"Pileća supa", kolicina:"250 ml, 400 ml", kategorija:"corbe", cena:"280 RSD, 320 RSD"},
	{slika:"assets/images/corba6.jpeg", jelo:"Potaž od bundeve", kolicina:"250 ml, 400 ml", kategorija:"corbe", cena:"320 RSD, 380 RSD"}
];

function napisiJelovnik(){
	var provera2=document.getElementById("jelovnik");
	if(!provera2) return;
	let ispisJelovnika="";
	for(let i=0;i<jelovnik.length;i++){
		ispisJelovnika+=`
			<div class="kartica">
					<img src="${jelovnik[i].slika}" alt="${jelovnik[i].jelo}"/>
					<h2>${jelovnik[i].jelo}</h2>
					<h3>${jelovnik[i].cena}</h3>
					<h4>${jelovnik[i].kolicina}</h4>
			</div>	`	
	}
provera2.innerHTML=ispisJelovnika;
}

napisiJelovnik();

function pronadjiFilter(){
	var filterDugme=document.querySelectorAll(".dugme");
	for(var i=0;i<filterDugme.length;i++){
		filterDugme[i].addEventListener("click", odabirFiltera)
	}
}

function odabirFiltera(){
var kategorija=this.value;
filtrirajPoKategoriji(kategorija);	
}

function filtrirajPoKategoriji(kategorija){
	var provera3=document.getElementById("jelovnik");
	if(!provera3) return;
	var ispisKategorija="";
	for(var i=0;i<jelovnik.length;i++){
		if(jelovnik[i].kategorija===kategorija){
			ispisKategorija+=`
			<div class="kartica">
					<img src="${jelovnik[i].slika}" alt="${jelovnik[i].jelo}"/>
					<h2>${jelovnik[i].jelo}</h2>
					<h3>${jelovnik[i].cena}</h3>
					<h4>${jelovnik[i].kolicina}</h4>
			</div>`
		}
		
	}
provera3.innerHTML=ispisKategorija;
}

pronadjiFilter();
filtrirajPoKategoriji("burger");

var vrati=document.getElementById("vratiGore")
if(vrati){
	vrati.addEventListener('mouseover', promeniBoju);
	vrati.addEventListener('mouseout', vratiBoju);
}

function promeniBoju(){
	this.style.backgroundColor="#ffffff";
	this.style.color="#ff9a24";
	this.style.border="2px solid #ff9a24";
}
function vratiBoju(){
	this.style.backgroundColor="#000000";
	this.style.color="#ffffff";
	this.style.border="none";
}



const pice=[
	{naziv:"Domaća kafa", cena:"190 RSD"},
	{naziv:"Espreso", cena:"200 RSD"},
	{naziv:"Coca Cola 0.33", cena:"270 RSD"},
	{naziv:"Fanta", cena:"270 RSD"},
	{naziv:"Kisela voda 0.33", cena:"220 RSD"},
	{naziv:"Kisela voda 1l", cena:"360 RSD"},
	{naziv:"Limunada", cena:"240 RSD"},
	{naziv:"Gusti sokovi", cena:"250 RSD"},
	
];

let sacuvajPice=`<ul>`;
for(let i=0;i<pice.length;i++){
	sacuvajPice+=`<li class="razdvoji">${pice[i].naziv} <span>${pice[i].cena}</span></li>`
}
sacuvajPice+=`</ul>`

var provera4=document.getElementById("pice");
if(provera4){provera4.innerHTML=sacuvajPice;};


const prilozi=[
	{naziv:"Hleb", cena:"50 RSD"},
	{naziv:"Lepinja", cena:"100 RSD"},
	{naziv:"Pomfrit", cena:"250 RSD"},
	{naziv:"Luk", cena:"20 RSD"},
	{naziv:"Kajmak", cena:"60 RSD"},
	{naziv:"Urnebes", cena:"60 RSD"},
	{naziv:"Tartar sos", cena:"40 RSD"},
	{naziv:"Slatko ljuti sos", cena:"40 RSD"},
];

let sacuvajPrilog=`<ul>`;
for(let i=0;i<prilozi.length;i++){
	sacuvajPrilog+=`<li class="razdvoji">${prilozi[i].naziv} <span>${prilozi[i].cena}</span></li>`
}
sacuvajPrilog+=`</ul>`

var provera5=document.getElementById("prilozi");
if(provera5){provera5.innerHTML=sacuvajPrilog;};



function dohvatiListu(){
	var listaBurger=document.getElementById("listaBurger");
	var listaPica=document.getElementById("listaPica");
	var listaMeso=document.getElementById("listaMeso");
	var listaSalate=document.getElementById("listaSalate");
	var listaCorbe=document.getElementById("listaCorbe");
	
	for(var i=0;i<jelovnik.length;i++){
		var red=document.createElement("div");
		red.style.display="block";
		
		var tekst=document.createElement("label");
		tekst.textContent = " " + jelovnik[i].jelo;
		
		var cekiraj=document.createElement("input");
		cekiraj.type="checkbox";
		cekiraj.value=jelovnik[i].jelo;
		cekiraj.className="listeSve";
		
		red.appendChild(cekiraj);
		red.appendChild(tekst);
		
		if(jelovnik[i].kategorija==="burger"){
			listaBurger.appendChild(red);
		}
		else if(jelovnik[i].kategorija==="pica"){
			listaPica.appendChild(red);
		}
		else if(jelovnik[i].kategorija==="meso"){
			listaMeso.appendChild(red);
		}
		else if(jelovnik[i].kategorija==="salate"){
			listaSalate.appendChild(red);
		}
		else if(jelovnik[i].kategorija==="corbe"){
			listaCorbe.appendChild(red);
		}
		else {console.log("nepostojeća kategorija: "+jelovnik[i].kategorija);}
	}
}

function prikaziOdabir(){
	var dohvatiDugme=this.id;
	
	if(dohvatiDugme==="dugmeBurger"){
		var dohvatiListu=document.getElementById("listaBurger");
		if(dohvatiListu.style.display==="none"||dohvatiListu.style.display===""){
			dohvatiListu.style.display="block";
		}
		else{dohvatiListu.style.display="none";}
	}
	
	else if(dohvatiDugme==="dugmePica"){
		var dohvatiListu=document.getElementById("listaPica");
		if(dohvatiListu.style.display==="none"||dohvatiListu.style.display===""){
			dohvatiListu.style.display="block";
		}
		else{dohvatiListu.style.display="none";}
	}
	else if(dohvatiDugme==="dugmeMeso"){
		var dohvatiListu=document.getElementById("listaMeso");
		if(dohvatiListu.style.display==="none"||dohvatiListu.style.display===""){
			dohvatiListu.style.display="block";
		}
		else{dohvatiListu.style.display="none";}
	}
		
	else if(dohvatiDugme==="dugmeSalate"){
		var dohvatiListu=document.getElementById("listaSalate");
		if(dohvatiListu.style.display==="none"||dohvatiListu.style.display===""){
			dohvatiListu.style.display="block";
		}
		else{dohvatiListu.style.display="none";}
	}
	
	else if(dohvatiDugme==="dugmeCorbe"){
		var dohvatiListu=document.getElementById("listaCorbe");
		if(dohvatiListu.style.display==="none"||dohvatiListu.style.display===""){
			dohvatiListu.style.display="block";
		}
		else{dohvatiListu.style.display="none";}
	}
	else{console.log("greska");}
}

if(document.getElementById("poruci")){dohvatiListu();}
 

var provera9=document.getElementById("sub-btn");
if(provera9){
document.getElementById("dugmeBurger").addEventListener("click", prikaziOdabir);
document.getElementById("dugmeMeso").addEventListener("click", prikaziOdabir);
document.getElementById("dugmePica").addEventListener("click", prikaziOdabir);
document.getElementById("dugmeSalate").addEventListener("click", prikaziOdabir);
document.getElementById("dugmeCorbe").addEventListener("click", prikaziOdabir);

document.getElementById("ip").addEventListener("blur", proveraImePrezime);
document.getElementById("adresa").addEventListener("blur", proveraAdrese);
document.getElementById("telefon").addEventListener("blur", proveraTelefona);
document.getElementById("cb").addEventListener("change", proveraCheckboxa);

provera9.addEventListener("click", function(){
	var proveri1=proveraImePrezime();
	var proveri2=proveraAdrese();
	var proveri3=proveraTelefona();
	var proveri4=proveraCheckboxa();
	var proveri5=proveraOdabraneHrane();
	
	if(proveri1&&proveri2&&proveri3&&proveri4&&proveri5){
		document.activeElement.blur();
		var poruci=document.getElementById("poruci");
		var inputTag=document.getElementsByTagName("input");
		poruci.reset()
		for(var i=0;i<inputTag.length;i++){
			inputTag[i].style.border="1px solid #ccc";
		}
	}
})
}
function proveraImePrezime(unos){
	var provera6=document.getElementById("porukaGreska1");
	if(!provera6)return;
	var imePrezime=document.getElementById("ip");
	var uneto=imePrezime.value;
	var javiGresku=`<i class="fa-solid fa-circle-exclamation"></i> Neispravan unos`;
	var regIz=/^[A-ZČĆŠĐŽ][a-zčćšđž]{1,12}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{1,12})+$/
	
	var rezultat=regIz.test(uneto);
	if(rezultat){
		imePrezime.style.border="1px solid green";
		provera6.innerHTML=`<i class="fa-regular fa-circle-check tacno"></i>`;
		return true;
	}
	else{
		imePrezime.style.border="1px solid red";
		provera6.innerHTML=javiGresku;
		return false;
	}
}


function proveraAdrese(){
	var provera7=document.getElementById("porukaGreska2");
	if(!provera7) return;
	var adresa=document.getElementById("adresa");
	var uneto=adresa.value;
	
	var javiGresku=`<i class="fa-solid fa-circle-exclamation"></i> Neispravan unos`;
	var regIz=/^[A-ZČĆŠĐŽ]([\sA-Za-zČĆŠĐŽčćšđž]{1,12})+[\s0-9]{1,5}([a-zA-Z]{1,3})?$/
	var rezultat=regIz.test(uneto);
	if(rezultat){
		adresa.style.border="1px solid green";
		provera7.innerHTML=`<i class="fa-regular fa-circle-check tacno"></i>`;
		return true;
	}
	else{
		adresa.style.border="1px solid red";
		provera7.innerHTML=javiGresku;
		return false;
	}
}

function proveraTelefona(){
	var provera8=document.getElementById("porukaGreska3");
	if(!provera8) return;
	var telefon=document.getElementById("telefon");
	var uneto=telefon.value;
	
	var javiGresku=`<i class="fa-solid fa-circle-exclamation"></i> Neispravan unos`;
	var regIz=/^[0-9]{3}\s[0-9]{2}\s[0-9]{7}$/
	var rezultat=regIz.test(uneto);
	if(rezultat){
		telefon.style.border="1px solid green";
		provera8.innerHTML=`<i class="fa-regular fa-circle-check tacno"></i>`;
		return true;
	}
	else{
		telefon.style.border="1px solid red";
		provera8.innerHTML=javiGresku;
		return false;
	}
}

function proveraCheckboxa(){
	var cekirano=document.getElementById("cb");
	if(cekirano.checked){return true;}
	else return false;
}

function proveraOdabraneHrane(){
	proveriHranu=document.querySelectorAll(".listeSve");
	for(var i=0;i<proveriHranu.length;i++){
		if(proveriHranu[i].checked) return true;
	}
	return false;
}





ispisiNav("footer-lista","futer-meni")

const info=[{ikonica:"fa-solid fa-location-dot", tekst:" Zdravka Čelara 16, Beograd"},
			{ikonica:"fa-solid fa-phone", tekst:" +381 67 1456746"},
			{ikonica:"fa-solid fa-envelope", tekst:" restoran@gmail.com"}
];
const drustveneMreze=[
			{linkDM:"https://www.instagram.com/", ikonica:"fa-brands fa-instagram"}, 
			{linkDM:"https://www.facebook.com/?locale=sr_RS", ikonica:"fa-brands fa-facebook"},
			{linkDM:"https://x.com/?lang=sr", ikonica:"fa-brands fa-x-twitter"}
			];

let ubacivanjeInfo=""
	for(let i=0;i<info.length;i++){
		ubacivanjeInfo+=`<div class="info-klasa">
							<i class="stilizuj ${info[i].ikonica}"></i> 
							<p class="stilizuj2">${info[i].tekst}</p>
						</div>`
	}
var provera10=document.getElementById("info");
if(provera10){provera10.innerHTML=ubacivanjeInfo;}


let ubacivanjeDrMr=""
	for(let i=0;i<drustveneMreze.length;i++){
		ubacivanjeDrMr+=`<a class="zlink" href="${drustveneMreze[i].linkDM}" target="_blank"><i class="${drustveneMreze[i].ikonica}"></i></a>
						`
	}
var provera11=document.getElementById("dr-mreze");
if(provera11){provera11.innerHTML=ubacivanjeDrMr;}




