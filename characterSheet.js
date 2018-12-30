"use-strict";

/**
 * @param {String} src: Single cookie-formatted key-val pair. 
 */
function applyProperty(src) {
    var keyval = src.split("=");
    document.getElementById(keyval[0]).innerText = keyval[1];
}

/**
 * 
 * @param {String} src: Many cookie-formatted key-val pairs. 
 */
function applyProperties(src) {
    for (var prop of src.split(";"))
        applyProperty(prop);
}

function showCharSheetData() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal)
            modal.style.display = "none";
    } 
}