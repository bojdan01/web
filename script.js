function Ai(){
 window.location.href = "/Ai/index.html";   
}
setInterval(()=>{
    let cas = new Date()
    let min = cas.getMinutes()
if (min < 10) {
    min = "0"+min
}
let sec = cas.getSeconds()
if (sec < 10) {
    sec = "0"+sec
}
    document.querySelector(".hodiny").innerHTML = cas.getHours()+":"+min+":"+sec
})
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    document.querySelector("title").innerHTML = "Bojdan.cz";
  } else {
    document.querySelector("title").innerHTML = "Come back";
  }
});
