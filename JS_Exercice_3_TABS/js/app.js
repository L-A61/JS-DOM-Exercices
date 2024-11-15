// Récupérer le sélecteur .about, tous les sélecteurs .tab-btn et .content
// Ecouter l'évènement 'click' sur .about

// Récupérer la valeur de l'id de l'élément courant avec e.target.dataset.id
// voir tuto https://codepen.io/dizakids/pen/WNNVLEz

  // si id
  
    // supprimer .active sur les autres boutons

    // le btn courant devient .active

    // supprimer .active sur les autres contenus

    // récupérer le contenu courant grâce à l'id

    // ajouter .active au contenu courant




// Récupére le sélecteur .about ainsi que tous les sélecteurs .tab-btn et .content avec des variables
let about = document.querySelector(".about")
let tabBtn = document.querySelectorAll(".tab-btn")
let content = document.querySelectorAll(".content")

//Ecoute l'évènement 'click' sur la variable about
about.addEventListener("click", function() {
  // id a pour valeur le bouton selectionner via le addEventListener
  let id = event.target.dataset.id;

  // On recupère le contenu du bouton selectionner via son ID et on le met dans la variable idContent
  let idContent = document.getElementById(id)
  
  // Si id
  if (id) {

    // supprime la classe .active sur tous les query de tabBtn
    tabBtn.forEach(function(_tabBtn) {
      _tabBtn.classList.remove("active");
    });

    // le bouton selectionner reçoit la classe .active
    event.target.classList.add("active");

    // On retire la classe active des contenus
    content.forEach(function(_content) {
      _content.classList.remove("active");
    })

    // On ajoute la classe active au contenu récupéré
    idContent.classList.add("active");
  }
})