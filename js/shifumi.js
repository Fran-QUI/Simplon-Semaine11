//Var $choixDuJoueur = document.getElementById("ShiFuMi").value


var score = 0;
var scoreIA = 0;
var choixIA = "Puit";
var resultat = "Pas de tirage effectué !";
var $txtResultat = document.getElementById("txtResultat");
var $go = document.getElementById("pret");
var $chxJoueur = document.getElementById("ShiFuMi").value;
var $txtScore = document.getElementById("txtScore");
var $txtChoixIa = document.getElementById("txtChoixIa");

//tirer le choix de l'IA
function choisirIA() {
	choixIABrut = Math.random();
	if (choixIABrut < 0.34) {
		choixIA = "Pierre";
	} else if (choixIABrut < 0.64) {
		choixIA = "Feuille";
	} else {
		choixIA = "Ciseaux";
	}
	console.log(choixIA);
}

//enregistrer le choix du joueur
function enregistrerChxJoueur(){

$chxJoueur = document.getElementById("ShiFuMi").value

}


//comparer les choix
	
function compare() {

	enregistrerChxJoueur();
	
	if ( 
	((choixIA === "Pierre") && ($chxJoueur === "Feuille")) ||
	((choixIA === "Feuille") && ($chxJoueur === "Ciseaux")) ||
	((choixIA === "Ciseaux") && ($chxJoueur === "Pierre"))
	) 
	{
		resultat = "Victoire ! :D";
		score = score + 1;
	}

	else if (choixIA === $chxJoueur) {

		resultat = "Egalité ! :/";
	}

	else 
	{
		resultat = "Perdu ! :(";
		scoreIA = scoreIA + 1;
	}
}

//afficher le réultat pus relancer choix de l'ia
function afficherResultat() {
	
	compare();
	$txtChoixIa.innerHTML = "L'I.A. a choisi " + choixIA;
	$txtResultat.innerHTML = resultat;
	$txtScore.innerHTML = "Vous : " + score + " | IA : " + scoreIA;
	choisirIA();
}

$go.onclick = afficherResultat;

choisirIA();