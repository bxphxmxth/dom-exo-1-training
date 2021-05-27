// > Créez une div avec dédans un h1, un h2, un input et un button

let myDiv = document.createElement("div");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let input = document.createElement("input");
let button = document.createElement("button");



// > Affichez cette div dans l'HTML

let myBody = document.querySelector("body");
myDiv.append(h1,h2,input,button)
myBody.appendChild(myDiv)

// > Le h1 doit contenir "Je suis un titre"
// > Le h2 doit contenir "Je suis un sous-titre"
// > Le button doit contenu "Acceptez"

let h1txt = document.createTextNode("Je suis un titre");
let h2txt = document.createTextNode("Je suis un sous-titre");
let buttontxt = document.createTextNode("Acceptez");

h1.appendChild(h1txt);
h2.appendChild(h2txt);
button.appendChild(buttontxt);
// > Changer le contenu du h1 en "Je suis un grand titre"

h1.innerHTML = "Je suis un grand titre";

// > NE PAS TOUCHER A L'HTML