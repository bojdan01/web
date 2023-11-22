
cas()
setInterval(()=>{
cas()
},1000)
function cas(){
let x;
try {
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
x = this.responseText;
x = JSON.parse(x);
document.querySelector(".hodiny").innerHTML = x.datetime.slice(0,19).slice(11,19)
}
xhttp.open("GET", "https://worldtimeapi.org/api/timezone/Europe/Prague", true);
xhttp.send();
} catch (error) {
    
}
}

var windowWidth;

function getWindowDimensions() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
}

function updateContent(windowWidth) {
    windowWidth = getWindowDimensions().width;
    return windowWidth;
}
window.onload = function () {
    updateContent();
};

window.addEventListener('resize', function () {
    updateContent();
});

function pohyb(a, b, c, d,) {
    let e = "vmin";
        document.querySelector(".obsah").style.marginLeft = a + e;
        document.querySelector(".konvertor").style.marginLeft = b + e;
        document.querySelector(".informace").style.marginLeft = c + e;
        document.querySelector(".autori").style.marginLeft = d + e;
}
function pohybMin(a, b, c, d,) {
    let e = "vmin";
        document.querySelector(".obsah").style.marginTop = a + e;
        document.querySelector(".konvertor").style.marginTop = b + e;
        document.querySelector(".informace").style.marginTop = c + e;
        document.querySelector(".autori").style.marginTop = d + e;
}
