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
