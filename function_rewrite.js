//Fonction pour traiter la syntaxe
function rewriteAT(myString) {
    var myNewString = myString.charAt(0).toUpperCase() + myString.substring(1).toLowerCase(); // Ajout d'une majuscule à la première lettre de la chaîne
    var myNewString = myNewString.replace(/[\,\-\/#!$%'\^&\*;:{}=\`~()@\+\?><\[\]\+]/g, ""); // Suppression de tous les caractères spéciaux
    var myNewString = myNewString.replace(/\s{2,}/g, " "); // Remplacement des espaces en trop type "    " par un espace simple " "
    //var myNewString = myNewString.replace(/_/g, " "); //Remplacement underscore par espace (correction marquage quand unserscore déjà présent)
    var myNewString = myNewString.replace(/ /g, "_"); // Remplacement des espaces " " par des underscore "_"
    var myNewString = myNewString.replace(/[\274]/g, "OE"); // Remplacement des "Œ" majuscule avec accent par "OE" sans accent
    var myNewString = myNewString.replace(/[\275]/g, "oe"); // Remplacement des "œ" majuscule avec accent par "oe" sans accent
    var myNewString = myNewString.replace(/[\300-\306]/g, "A"); // Remplacement des "A" majuscule avec accent par "A" sans accent
    var myNewString = myNewString.replace(/[\340-\346]/g, "a"); // Remplacement des "a" minuscule avec accent par "a" sans accent
    var myNewString = myNewString.replace(/[\310-\313]/g, "E"); // Remplacement des "E" majuscule avec accent par "E" sans accent
    var myNewString = myNewString.replace(/[\350-\353]/g, "e"); // Remplacement des "e" majuscule avec accent par "e" sans accent
    var myNewString = myNewString.replace(/[\314-\317]/g, "I"); // Remplacement des "I" majuscule avec accent par "I" sans accent
    var myNewString = myNewString.replace(/[\354-\357]/g, "i"); // Remplacement des "i" majuscule avec accent par "i" sans accent
    var myNewString = myNewString.replace(/[\322-\330]/g, "O"); // Remplacement des "O" majuscule avec accent par "O" sans accent
    var myNewString = myNewString.replace(/[\362-\370]/g, "o"); // Remplacement des "o" majuscule avec accent par "o" sans accent
    var myNewString = myNewString.replace(/[\331-\334]/g, "U"); // Remplacement des "U" majuscule avec accent par "U" sans accent
    var myNewString = myNewString.replace(/[\371-\374]/g, "u"); // Remplacement des "u" majuscule avec accent par "u" sans accent
    var myNewString = myNewString.replace(/[\321]/g, "N"); // Remplacement des "N" majuscule avec accent par "N" sans accent
    var myNewString = myNewString.replace(/[\361]/g, "n"); // Remplacement des "n" majuscule avec accent par "n" sans accent
    var myNewString = myNewString.replace(/[\307]/g, "C"); // Remplacement des "C" majuscule avec accent par "C" sans accent
    var myNewString = myNewString.replace(/[\347]/g, "c"); // Remplacement des "c" majuscule avec accent par "c" sans accent
    return myNewString;
}