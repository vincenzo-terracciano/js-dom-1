const lightButtonEl = document.querySelector("button");
let isLightOnOff = false;

lightButtonEl.addEventListener("click", function(){
    const light = document.getElementById("lightOff")
    if(isLightOnOff == false){
        light.src = "./img/yellow_lamp.png"
        lightButtonEl.innerText = "Spegni"
        isLightOnOff = true;
    } else {
        light.src = "./img/white_lamp.png"
        lightButtonEl.innerText = "Accendi"
        isLightOnOff = false;
    }
})