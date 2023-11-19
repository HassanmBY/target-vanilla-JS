// On récupère les éléments du DOM
const ul = document.querySelector("#list"); // Ici ul est l'élément parent
const logzone = document.querySelector("#logzone"); // logzone est juste un container dans lequel on afficher des données, on aurait pu utiliser n'importe quelle autre option de "log" (console.log, alert, ...)

ul.addEventListener("click", e => {
	// On écoute les évènements de type "click" sur la liste complète
	//Le click nous retourne un objet représentant l'évènement
	let clickedElement = e.target; // On enregistre l'élément sur lequel on a clické (si c'est un element du DOM, clickedElement est de type HTMLElement)
	logzone.innerText += `Tu as cliqué sur ${clickedElement.innerText} \n`; // On vient afficher le contenu (Texte) de l'élément sur lequel on vient de cliquer
});
