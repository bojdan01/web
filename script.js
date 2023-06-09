function Ai(){
 window.location.href = "/Ai/index.html";   
}
setInterval(()=>{
    let cas = new Date()
    document.querySelector(".hodiny").innerHTML = cas.getHours()+":"+cas.getMinutes()+":"+cas.getSeconds()
})
