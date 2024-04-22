//----------------- code ajouté : masque la fenêtre contextuelle lorsqu'un élément avec la classe popup-close est cliqué -----------
const popupOverlay = document.querySelector(".popup-overlay");     //sélectionne l'élément avec la classe popup-overlay 
const popupClose = document.querySelector(".popup-close");         // sélectionne l'élément avec la classe popup-close  (le bouton fermer)
popupClose.addEventListener("click", function () {                 //gestionnaire d'événements de clic à l'élément popupClose
  popupOverlay.style.display = "none";                             //cache la fenêtre contextuelle lorsque l'élément popupClose est cliqué.
});