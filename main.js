// VARIABLES FOR HTML ELEMENTS
var classicGameButton = document.getElementById("classicGameButton");
var difficultGameButton = document.getElementById("difficultGameButton");

// EVENT LISTENERS
classicGameButton.addEventListener("click", classicView)




 // EVENT HANDLERS AND GLOBAL FUNCTIONS
function classicView(){
  hide(difficultGameButton, false)
  hide(classicGameButton, false)
}

function hide(element, hidden) {
   if (hidden) {
     element.classList.remove('hidden');
   } else {
     element.classList.add('hidden');
   }
 }
