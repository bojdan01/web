function Ai(){
 window.location.href = "/Ai/index.html";   
}

setInterval(()=>{
let x;
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
x = this.responseText;
x = JSON.parse(x);
document.querySelector(".hodiny").innerHTML = x.datetime.slice(0,19).slice(11,19)
}
xhttp.open("GET", "https://worldtimeapi.org/api/timezone/Europe/Prague", true);
xhttp.send();
},100)

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    document.querySelector("title").innerHTML = "Bojdan.cz";
    document.querySelectorAll("link")[0].href = '/image/letter-b.ico'
  } else {
    document.querySelector("title").innerHTML = "Come back";
    document.querySelectorAll("link")[0].href = '/image/smile.png'
  }
});
