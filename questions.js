/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length
}
var remplaceECar = function (texte) {
    return texte.replace("e"," ")
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2)
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substring(0,9);
  // ou return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase()
}
var minusculeString = function (texte) {
    return texte.toLowerCase()
}
var SupprEspaceString = function (texte) {
    return texte.trim()
}
var IsString = function (texte) {
    return typeof(texte) ==='string'
}
var AfficherExtensionString = function (texte) {
var result = texte.substring(texte.lastIndexOf(".")+1, texte.length)
    return result;
}
var NombreEspaceString = function (texte) {
var result = texte.split(' ').length - 1;
    return result;
}
var InverseString = function (texte) {
var result = texte.split('').reverse().join('');
    return result;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
var result = array.map(Math.abs)
    return result
    //La fonction map appelle les valeurs contenues dans la fonction(array) , et on attribut a Map  les parametres (Math.abs) pour recuperer l'absolue.
// dans ce cas : Array est un parametre mais associé a la methode .map elle devient son objet.
// fonction() est une fonction
//fonction. est l'objet de la fonction qui suit
}
var sufaceCercle = function (rayon) {
var surface = Math.PI * Math.pow(rayon, 2);
var result = Math.round(surface);
    return result
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) {
    result = Math.round(poids/(taille*taille)*100)/100
    return result
}
