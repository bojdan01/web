// Získání odkazu na element s ID 'file'
var element = document.getElementById('file');

// Kontrola, zda atribut href existuje
let rep = setInterval(()=>{
    if (element.hasAttribute('href')) {
        element.style = `
        display: block;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        left: 50%;
        top: 50%;
  font-family: arial;
  font-weight: bold;
  color: #FFFFFF !important;
  font-size: 16px;
  text-shadow: 1px 1px 0px #FF0000;
  box-shadow: 1px 1px 1px #FF0000;
  padding: 10px 25px;
  border-radius: 10px;
  border: 2px solid #FF5252;
  background: #EE0000;
  background: linear-gradient(to top, #EE0000, #FF7A70);
        `
        document.querySelector(".tet").style.display = "none"
        clearInterval(rep)
    }
})
let rep2 = setInterval(()=>{
    if(document.querySelectorAll("form")[0].style.display=="none"){
        let d = document.createElement("div")
        d.innerHTML = '<div class="custom-loader"></div>'
        d.className = "tet"
        document.body.appendChild(d)
        clearInterval(rep2)
    }
})
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    document.querySelector("title").innerHTML = "Bojdan.cz";
    document.querySelectorAll("link")[0].href = '/image/letter-b.ico'
  } else {
    document.querySelector("title").innerHTML = "Come back";
    document.querySelectorAll("link")[0].href = '/image/smile.png'
  }
});
