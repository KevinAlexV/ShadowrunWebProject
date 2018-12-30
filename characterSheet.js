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

/**
 * 
 * @param {HTMLCollection} data: All relevant data 
 */
function showCharSheetData(data) {
    var dataStr = "";

    for (var i = 0; i < data.length; i++) {
        dataStr += data.item(i).getAttribute("name") + "=" + data.item(i).value + ";";
    }
    dataStr = dataStr.slice(0, -1);

    alert(dataStr);
}