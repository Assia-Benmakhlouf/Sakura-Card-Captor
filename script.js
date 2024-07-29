/*alert("Bonjours, vous avez atterie au bon endroit... ❤️");
console.log("j'ai envie de faire pipiiiiiii")
alert("bah la enfaite j'ai vraiment envie de faire pipi")
console.log("c'est très vrai")*/


/*It's a variable*/

alert("regarde la console");

let name = prompt("Bon... en vrai c'est quoi ton petit nom");
console.log("Okiiii, alors " + name);
console.log("Comment ca va ? "+ name);
alert("Tu sais je peux te parler partout " + name + " !");

let surname = prompt("Mais maintenant c'est quoi ton prenom " + name + " !");

alert("Je vois ! merci " + surname + " " + name + " ! Pour ces information si préscieuse.... MUHAHAHAHAHHHAHAHA !");


/*Other part of the lesson*/
/*Recup Title*/
let myTitle = document.getElementById("Title");

/*Modification*/
myTitle.innerText = "Mon premier anime et un de mes animes préférer est " + surname + " " + name + " chasseuse de carte";

/* if... then...*/

let uOk = prompt("Ca va ? Repond par oui ou par non.");

if ((uOk == "oui") || (uOk == "Oui") || (uOk == "OUI"))
{
	alert(" Génial moi aussi je vais bien !");
}
else if ((uOk == "non") || (uOk == "Non") || (uOk == "NON"))
{
	alert(" Oh... Mince désoler pour toi :(");
	myTitle.innerText = "Désoler bebou :( j'éspère que tu ira mieux " + name +" !"
}

else {
	alert(" t'es bête ou quoi je t'ai demander de repondre par oui ou par non ?????");
	alert("Tu sais quoi je t'aime bien voila un truc utile pour toi");
	window.location.href = "https://www.youtube.com/watch?v=sukfYLbMbaU";
}


let color = prompt("Dit moi... Tu préfère quoi entre le rouge et le violet ?")

if (color == rouge) {
	window.location.href = "https://www.youtube.com/watch?v=vKJO1mnj8bE"
}

else if (color == violet) {
	window.location.href = "https://fr.vecteezy.com/videos-gratuites/violet"
}

else {
	alert("Mais ???? t'es un peu bêbête....")
}