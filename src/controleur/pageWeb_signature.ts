/* eslint-disable @typescript-eslint/no-unused-vars */
type TtabAsso = {	// tableau "associatif" : clé/indice du tableau est une chaîne de caractères
	[key:string] : string;
}
type TdataSet  = TtabAsso[];	// tableau de tableau associatif 
type TtabGrille = {				// tableau associatif d'objets de la classe "GrilleTabulaire" (voir ci-dessous)
	[key:string] : GrilleTabulaire;
}

type TeditStatut = 'affi' | 'modif' | 'ajout';	// énumération des statuts possibles du mode d'édition d'une page HTML

type Tparams = { statut : string, id : string, elts : string[] };	
// type contenant les paramètres passés d'une page HTML à une autre :
// statut (rien, ou TeditSatut), iddentifiant, tableau de valeurs sous forme de chaînes de caractères 

class GrilleTabulaire {
	// gestion de l'affichage d'une grille tabulaire
	dataSet 	: { data:[] };

	show(tableId : string, dataSet : TdataSet, cleId : string, cleVisible : boolean):void {
		// afficher une liste sous la forme d'une table : balise <TABLE> en HTML
	}
	
	getIdSelect():string {
		// renvoie l'identifiant de la ligne sélectionnée dans le tableau
		return "";
	}
	
	getData(): TdataSet {
		return this.dataSet['data'];
		// renvoie le tableau de données affichées
	}

	addLine(tab2 : TdataSet):void	{
		// ajouter des lignes complètes dans la liste
	}

	delSelectLine():void	{
		// supprimer la ligne sélectionnée de la liste
	}
	count() : number {
		return this.dataSet['data'].length;
		// renovie le nombre de lignes de la liste
	}
}

class PageWeb {	
	grille		: TtabGrille;
	params		: Tparams;

	message(titre:string, texte:string):void {
	// affichage boîte de dialogue avec un titre, un texte, et un bouton "Compris"
	}
	
	confirmation(titre:string, texte:string, vue:object, fctOui:string, fctNon : string = null):void {
	// affichage boite de dialogue avec un titre, un message (une question) et deux boutons "Oui" et "Non"	
	// vue est l'objet contenant les deux fonctions fctOui et fctNon respectivement appelées si réponse "Oui" ou réponse "Non"
	}

	showArray(tableId : string, dataSet : TdataSet, cleId : string, cleVisible = true):GrilleTabulaire	{
	// instanciation d'un nouvel objet de la table "grille", appel de la méthode show de "grille" et retour de l'objet grille créé
		return this.grille[tableId];
	}

	show(fichier : string, id : string , modal = false ):void {
	// affichage de la page HTML de nom "fichier" dans la balise identifie par "id" en mode "modal" ou pas
	}
	
	showModal(fichier : string, id : string):void {	
	// affichage de la page HTML de nom "fichier" dans la balise identifié par la valeur de "id" en mode "modal"
	}             
	
	hide(id : string):void {
	// cache la fenêtre "id" 
	}

	close():void {
	// ferme l'application
	}

	SQLexec(sp : string, params : string[]):boolean {
	// exécute une requête de manipulation (insert, update, delete)
		return true;
	}
	
	SQLloadData(sp : string, params : string[], req ='interrogation'):TdataSet  {
	// exécute une requête d'interrogation et retourne le résultat soit un tableau d'objets, soit un tableau de tableaux associatifs
		let resultat	: TdataSet = [];
		return resultat;
	}
	
	bdOpen(host : string, port : string, bdname : string, user : string, pwd : string, charset ='utf8', driver ='mysql'):void {
	// ouvrir une base de données
	}
	
}
// eslint-disable-next-line no-var
var APIpageWeb : PageWeb;

