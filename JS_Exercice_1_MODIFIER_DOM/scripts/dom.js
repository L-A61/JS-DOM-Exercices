// Selection des boutons lire le DOM, modifier le DOM et modifier le style
let lireDOM = document.getElementById("dom");
let modifDOM = document.getElementById("dom_modif");
let styleDOM = document.getElementById("style");

// Selection de l'id titre1 et titre2, le .innerText de titre 2 est important pour afficher le texte qui a pour id titre2 plus bas.
let titre1 = document.getElementById("titre1");
let titre2 = document.getElementById("titre2").innerText;

// Selection de la classe .titre avec une variable qui compte le nombre de valeur dans le tableau créer
let classDOM = document.getElementsByClassName("titre");
let classDOMnB = classDOM.length;
let classArray = Array.from(classDOM);
let classDOMTEXT = [];

// Selection de l'id paragraphe1 dans une variable
let paragraphe1 = document.getElementById("paragraphe1");

// Selection des balises li et création d'un tableau pour pouvoir afficher le texte des balises li.
let liDOM = document.querySelectorAll("li");
let liArray = Array.from(liDOM);
let liTEXT = [];


// Quand on click sur le bouton lire le DOM, une alerte affiche le texte qui a pour id titre2,
// le nombre de balise avec la classe .titre,
// le texte des élements qui ont la classe .titre,
// le texte des balises <li>
lireDOM.addEventListener("click",function() {
    alert("Texte de la balise avec l'id titre2: "+ titre2);
    
    alert("Il y a "+classDOMnB+" balises avec la classe titre.");

    classArray.forEach(function(element) { 
        classDOMTEXT.push(element.innerText);
    });

    alert("Texte des élements de la classe titre: "+classDOMTEXT);

    liArray.forEach(function(element){
        liTEXT.push(element.innerText);
    })

    alert("Texte des balises li: "+liTEXT);

});

// Quand on clique sur le bouton "modifier le DOM", le h1 qui a l'id titre1 se change en "Bienvenue",
// le h2 qui a l'id titre2 se change en "Exo JS"
// le paragraphe qui a pour id paragraphe1 se change en un autre paragraphe "Voici quelques fonctions exécutées en javascript."
// Pour chaque élement avec une balise li, son HTML change en "Liste + (numéro de l'index dans la boucle + 1)"
modifDOM.addEventListener("click",function() {
    titre1.innerHTML = "<h1>Bienvenue</h1>";

    titre2.innerHTML = "<h2>Exo JS</h2>";

    paragraphe1.innerHTML = "<p>Voici quelques fonctions exécutées en javascript.</p>";
    
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].innerHTML = "<li> Liste "+[i+1]+"</li>";
    }
})

// Quand on clique sur le bouton "modifier le style", le titre1 s'aligne au centre de la page,
// pour chaque élément da la variable classDOM, leur couleur du texte devient rouge
// le paragraphe contenu dans la variable paragraphe1 est entouré d'une bordure noire, et obtient un padding de 10px
// les balises li ne s'affichent plus dans la page.
styleDOM.addEventListener("click",function() {
    titre1.style.textAlign = "center";

    for (let i = 0; i < classDOM.length; i++) {
        classDOM[i].style.color ="red";
    }

    paragraphe1.style.border="solid 1px black";
    paragraphe1.style.padding="10px";

    for (let i = 0; i < liArray.length; i++) {
        liArray[i].style.display="none";
    }
})