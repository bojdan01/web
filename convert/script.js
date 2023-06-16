// Získání odkazu na element s ID 'file'
var element = document.getElementById('file');

// Kontrola, zda atribut href existuje
if (element.hasAttribute('href')) {
    console.log("Element s ID 'file' obsahuje atribut href.");
} else {
    console.log("Element s ID 'file' neobsahuje atribut href.");
}
