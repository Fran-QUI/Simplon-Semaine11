var $text = document.getElementById("texteInformation");
var nombreIa;
var $nombreJoueur = document.getElementById("nombreJoueur");
var $valider = document.getElementById("valider");
var resultat = "L'ordinateur à choisi un chiffre entre 1 et 100. Entrez un nombre entre 1 et 100 pour le trouver.";
var $btnNouvellePartie = document.getElementById("nouvellePartie");
var $nombreEssai = document.getElementById("nombreEssai");
var nombreEssai = 0

//définir un nombre aléatoire
function definirNombreIa() {
	nombreIa = Math.floor(Math.random() * 100);
}

//afficher le résultat et le nombre d'essais
function afficher() {
	$text.innerHTML = resultat;
}

//comparer le nombre avec le nombre aléatoire et afficher le résultat
function comparer() {
	
	if (nombreIa == $nombreJoueur.value) {
		victoire();
	} else if (nombreIa < $nombreJoueur.value) {
		resultat = "Vous avez vu trop grand";
		nombreEssai = nombreEssai + 1;
	} else {
		resultat = "Vous avez vu trop petit";
		nombreEssai = nombreEssai + 1;
	}
	
	function victoire() {
		if (nombreEssai == 0) {
			resultat = "Du premier coup !!! vous avez triché ?"
		} else if (nombreEssai <= 4) {
			resultat = "Vous avez trouvé au bout de seulement " + (nombreEssai+1) + " coups !!! Avez-vous des dons de voyance ?"
		} else if (nombreEssai <= 9) {
			resultat = "Vous avez trouvé au bout de " + (nombreEssai+1) + " coups !!! Vous semblez avoir des talents de déduction hors norme..."
		} else if (nombreEssai <= 14) {
			resultat = "Vous avez trouvé au bout de " + (nombreEssai+1) + " coups ! Vous faites trop confiance au hasard !"
		} else {
			resultat = "Vous avez trouvé au bout de " + (nombreEssai+1) + " coups ! Pensez à réfléchir de temps en temps..."
		}
		
	}

	afficher();
}

//lancer une nouvelle partie
function nouvellePartie() {
	definirNombreIa();
	resultat = "Une nouvelle partie commence, choisissez entre 1 et 100.";
	nombreEssai = 0
	afficher();
	}

$valider.onclick = comparer;
$btnNouvellePartie.onclick = nouvellePartie;

definirNombreIa();
afficher();