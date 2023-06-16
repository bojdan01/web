// Získání odkazu na element <a>
var odkaz = document.querySelector('a');

// Kontrola, zda atribut href existuje
if (odkaz.hasAttribute('href')) {
    console.log('Element <a> obsahuje atribut href.');
} else {
    console.log('Element <a> neobsahuje atribut href.');
}
