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