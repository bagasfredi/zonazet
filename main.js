document.querySelector("#open").addEventListener("click",function(){
    document.querySelector(".menubar").style.visibility="visible";
    this.style.visibility="hidden";
});
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".menubar").style.visibility="hidden";
    document.querySelector("#open").style.visibility="visible";
});
