// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay





// On sélectionne la classe modal-btn, modal-overlay et close-btn dans des variables
let modalBtn = document.querySelector(".modal-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

// Écoute l'évènement d'un click du bouton contenant la variable modalBtn
modalBtn.addEventListener("click",function() {
    // Ajoute la classe open-modal avec la classe modal-Overlay
    modalOverlay.classList.add("open-modal");
})

// Écoute l'évènement d'un click du bouton contenant la variable modalBtn
closeBtn.addEventListener("click",function() {
    // Retire la classe open-modal de la classe modal-Overlay
    modalOverlay.classList.remove("open-modal");
})