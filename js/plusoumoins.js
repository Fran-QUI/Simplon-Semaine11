var $text = document.getElementById("texteInformation");
var nombreIa;
var nombreJoueur;
var $valider = document.getElementById("valider");
var resultat = "entrez un nombre entre 1 et 100";

//définir un nombre aléatoire
function definirNombreIa() {
	nombreIa=Math.floor(Math.random() * 100);
}

//défnir le nombre joueur
function definirNombreJoueur() {
	nombreJoueur= document.getElementById("nombreJoueur");
}

//comparer le nombre avec le nombre aléatoire
function comparer() {
	if (nombreIa==nombreJoueur) {
		resultat = "trouvé";
	} else if (nombreIa<nombreJoueur) {
		resultat = "trop grand";
	} else {
		resultat = "trop petit";
	}
	afficher()
}

//afficher le résultat
function afficher() {
	$text.innerHTML = resultat;
}

$valider.onclick = comparer;

definirNombreIa();
afficher();