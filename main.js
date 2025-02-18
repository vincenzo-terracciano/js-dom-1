const lightButtonEl = document.querySelector("button");

lightButtonEl.addEventListener("click", function(){
    const light = document.getElementById("lightOff")
    light.src = "./img/yellow_lamp.png"
    lightButtonEl.innerText = "Spegni"
})