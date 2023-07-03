
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
document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
    document.querySelector("title").innerHTML = "Bojdan.cz";
    document.querySelectorAll("link")[0].href = '/image/letter-b.ico'
    } else {
    document.querySelector("title").innerHTML = "Come back";
    document.querySelectorAll("link")[0].href = '/image/smile.png'
    }
});
var y;
setInterval(()=>{
    y = screen.width;
    document.getElementById("txt").innerHTML = y;
})
function pohyb(a,b,c,d){
    let e = "vmin"
    if(screen.width<=481){
        document.querySelector(".obsah").style.marginTop = a+e
        document.querySelector(".konvertor").style.marginTop = b+e
        document.querySelector(".informace").style.marginTop = c+e
        document.querySelector(".autori").style.marginTop = d+e
        //document.querySelectorAll("link")[1].href = '/stylepc.css'
        document.querySelector('link[href="style.css"]');
    }
    else{
        document.querySelector(".obsah").style.marginLeft = a+e
        document.querySelector(".konvertor").style.marginLeft = b+e
        document.querySelector(".informace").style.marginLeft = c+e
        document.querySelector(".autori").style.marginLeft = d+e
        document.querySelector('link[href="stylepc.css"]');
    }
}
