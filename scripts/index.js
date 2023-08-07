function onloadhidings() {
    document.getElementById("sideverticalbar").style.visibility = "hidden";
    hideAllWPContent();
}

function loadpage() {
    onloadhidings();
    setTimeout(function () { document.getElementById("loadingcover").style.visibility = "hidden" }, 500);
    //document.getElementById("loadingcover").style.visibility = "hidden";
}


function hideAllWPContent() {
    let collection, i = 0;
    collection = document.getElementsByClassName("wpcontent");
    for (i = 0; i < collection.length; i++) {
        collection[i].classList.add("makeitsmall");
    }
}
let wpopen = 0;
function expandWPContent(OpenWaypoint) {
    hideAllWPContent();
    if (wpopen === OpenWaypoint) {
        hideAllWPContent();
        wpopen = 0;
    }
    else {
        document.getElementById("wpcontent" + OpenWaypoint).classList.remove("makeitsmall");
        wpopen = OpenWaypoint;
    }
    window.location.href = "#wpmainheading";
}
function hideWPContent(CloseWaypoint) {
    document.getElementById("wpcontent" + CloseWaypoint).classList.add("makeitsmall");
}

