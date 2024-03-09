


const $dias = document.getElementById('dias'),
$horas = document.getElementById('horas'),
$minutos = document.getElementById('minutos'),
$segundos = document.getElementById('segundos'),
$panelFinal = document.querySelector('.panel_final');
$contenedor_historia = document.getElementById('contenedor_historia');
$espacio_3 = document.querySelector('.espacio_3');
$body = document.querySelector('body');
//Fecha final
const fechaFinal = new Date('Mar 9, 2024 00:14:30').getTime();
//1709279400000

let intervalo = setInterval(function(){
    //obtener fecha actual y milisegundos
    const now = new Date().getTime();
    //1709318516781

    //obtener distancias entre ambas fechas
    let distancia = fechaFinal - now;

    //calculo a dias, horas, minutos, segundos
    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60))/(1000 * 60 ));
    let segundos = Math.floor((distancia % (1000 * 60))/(1000));

    //Escribimos resultados
    $dias.innerHTML = dias;
    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;    
    $segundos.innerHTML = ('0'+segundos).slice(-2);

    //cuando llegue a 0
    if(distancia <= 0){
        clearInterval(intervalo);
        $body.style.overflowY = "auto"; 
        $panelFinal.style.transform = 'translateY(0)';
        $contenedor_historia.style.transform = 'translateY(0)';
        $espacio_3.style.transform = 'translateY(0)';

    }
}, 1000)

function scrollToSection() {
    var seccionDestino = document.getElementById("contenedor_historia");
    seccionDestino.scrollIntoView({ behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const saludos = document.querySelector(".saludos");
    const totalItems = document.querySelectorAll(".saludos-item").length;
  
    function mostrarSiguiente() {
      currentIndex = (currentIndex + 1) % totalItems;
      actualizarCarrusel();
    }
  
    function mostrarAnterior() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      actualizarCarrusel();
    }
  
    function actualizarCarrusel() {
      const translateValue = -currentIndex * 100 + "%";
      saludos.style.transform = "translateX(" + translateValue + ")";
    }
  
    setInterval(mostrarSiguiente, 3000); // Cambia la imagen cada 3 segundos
  });

  function reproducirCancion() {
    var pausa = document.getElementById("pausa");
    var audio = document.getElementById("miAudio");
  
    if (audio.paused) {
      audio.play();
      pausa.src ="./fotos/Objetos/pausa.png";
    } else {
      audio.pause();
      pausa.src = "./fotos/Objetos/play.png";

    }
  }


