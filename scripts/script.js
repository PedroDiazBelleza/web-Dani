const $dias = document.getElementById('dias'),
$horas = document.getElementById('horas'),
$minutos = document.getElementById('minutos'),
$segundos = document.getElementById('segundos'),
$panelFinal = document.querySelector('.panel_final');

//Fecha final
const fechaFinal = new Date('Mar 10, 2024 00:00:00').getTime();
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
        $panelFinal.style.transform = 'translateY(0)'
    }
}, 1000)

 
