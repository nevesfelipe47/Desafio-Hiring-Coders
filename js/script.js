import Countdown from "./countdown.js";

const tempoParaBf = new Countdown("25 July 2021 20:00:00 GMT-0300");
console.log(tempoParaBf.total);

const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){
    tempos.forEach((tempo, index) =>{
        tempo.innerHTML = tempoParaBf.total[index];
    });
}

mostrarTempo();
setInterval(mostrarTempo, 1000);



