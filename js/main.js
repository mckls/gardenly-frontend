
// get all add buttons (top right corner and tile)
var addPlantsButtons = document.getElementsByClassName("add-plant");
var overlayCloseButtons = document.getElementsByClassName("close-button");

// show function to show shield
function showShield() {
    var shields = document.getElementsByClassName('shield');

    for(var i = 0; i < shields.length; i++) {
        shields[i].classList.remove('hidden');
        shields[i].classList.add('block','animate__animated','animate__fadeIn');
        console.log(shields[i]);
    }

}

function hideShield() {
    
}

function showOverlay() {
    showShield();
    document.getElementById("overlay").classList.remove('hidden');
    document.getElementById("overlay").classList.add('block','animate__animated','animate__fadeInUpBig');
}

function hideOverlay() {
    var overlays = document.getElementsByClassName('overlay');
    console.log(overlays)
    for(var i = 0; i < shields.length; i++) {
        overlays[i].classList.remove('animate__fadeIn');
        overlays[i].classList.add('animate__fadeOut');
        overlays[i].classList.remove('block','animate__animated','animate__fadeOut');
        overlays[i].classList.add('hidden');
    }
}



for (var i = 0; i < addPlantsButtons.length; i++) {
    addPlantsButtons[i].addEventListener('click', showOverlay, false);
}

for (var i = 0; i < overlayCloseButtons.length; i++) {
    overlayCloseButtons[i].addEventListener('click', hideOverlay, false);
}


