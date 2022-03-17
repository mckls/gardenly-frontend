// get all add buttons (top right corner and tile)
var addPlantsButtons = document.getElementsByClassName("add-plant");
var closeButton = document.getElementById("close-button");
var shield = document.getElementById("shield");
var overlay = document.getElementById("overlay");

// show shield
function showShield() {
    shield.classList.remove('hidden');
    shield.classList.add('block','animate__fadeIn');
    console.log("Shield angezeigt, und Animation go");

    var handler = function() {
        shield.removeEventListener("animationend", handler, false);
        shield.classList.remove('animate__fadeIn');
        console.log("Shield Animation fertig und class removed");
    };
    shield.addEventListener("animationend", handler, false);
}

// hide shield
function hideShield() {

    shield.classList.add('animate__fadeOut');

    let handler = function() {
        shield.removeEventListener("animationend", handler, false);
        shield.classList.remove('animate__fadeOut','block');
        shield.classList.add('hidden');
        console.log("Shield Outro Animation Class removed");
    };
    shield.addEventListener("animationend", handler, false);
    console.log("close button clicked");
}

// show overlay
function showOverlay() {
    showShield();
    overlay.classList.remove('hidden');
    overlay.classList.add('block','animate__fadeInUpBig');
    console.log("Overlay angezeigt, und Animation go");

    let handler = function() {
        overlay.removeEventListener("animationend", handler, false);
        overlay.classList.remove('animate__fadeInUpBig');
        console.log('❌ Overlay Entry Animation Class removed');
    };
    overlay.addEventListener("animationend", handler, false);

}

// hide overlay
function hideOverlay() {
    hideShield();
    overlay.classList.remove('animate__fadeInUpBig');
    overlay.classList.add('animate__fadeOutDownBig');   
    
    let handler = function() {
        overlay.removeEventListener("animationend", handler, false);
        overlay.classList.remove('block','animate__fadeOutDownBig');
        overlay.classList.add('hidden');
        console.log('ist fertig');
    };
    overlay.addEventListener("animationend", handler, false);

}

for (var i = 0; i < addPlantsButtons.length; i++) {
    addPlantsButtons[i].addEventListener('click', showOverlay, false);
}

closeButton.addEventListener('click', hideOverlay);
shield.addEventListener('click', hideOverlay);



