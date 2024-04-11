//Funcion cronometro

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; //creamos array para cada unidad
let timeRef = document.querySelector(".timer-display"); // apuntamos al contenedor que nos muestra el tiempo
let int = null; // creamos variable para gestionar el tiempo (setInterval, clearInterval) y lo ponemos en null para que "no haya nada"

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) { //si no es igual a null muestra el valor que haya en int
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10); //si es null, lo igualamos al valor que tenga dentro de la funcion. esta accion se repetira cada 10 ms
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    alert("Tu sesión ha durado" +  + "! Felicidades!");
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours; //ternarios para que iguale o una opcion o la otra
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`; //pintado del componente

}


// Funcion para añadir ejercicio a la tabla


const diaInput = document.getElementById("dia")
const ejercicioInput = document.getElementById("ejercicio");
const duracionInput = document.getElementById("duracion");
const seriesInput = document.getElementById("series");
const repeticionesInput = document.getElementById("repeticiones");
const pesoInput = document.getElementById("peso");
document.getElementById("añadirEjercicio").addEventListener('click', function(event){
         event.preventDefault();
        if (!diaInput.checkValidity()){
            
            alert(diaInput.validationMessage + " --> Día");
            return;
        }
        if (!ejercicioInput.checkValidity()){
            
            alert(ejercicioInput.validationMessage + " --> Ejercicio");
            return;
        }
        if (!duracionInput.checkValidity()){
            alert(duracionInput.validationMessage + " --> Duración");
            return;
        }
        if (!seriesInput.checkValidity()){
            alert(seriesInput.validationMessage + " --> Series");
            return;
        }
        if (!repeticionesInput.checkValidity()){
            alert(repeticionesInput.validationMessage + " --> Repeticiones");
            return;
        }
        if (!pesoInput.checkValidity()){
            alert(pesoInput.validationMessage + " --> Peso");
            return;
        }
        afegir();
   

})

function afegir(){
    let dia = document.getElementById("dia").value;
    let ejercicio = document.getElementById("ejercicio").value;//cogemos el valor del input 
    let duracion = document.getElementById("duracion").value;//cogemos el valor del input 
    let series = document.getElementById("series").value;//cogemos el valor del input 
    let repeticiones = document.getElementById("repeticiones").value;//cogemos el valor del input 
    let peso = document.getElementById("peso").value;//cogemos el valor del input 
     let htmlString = "";
    
    
     htmlString += "<tr>";
     htmlString += "<td>" + dia + "</td>";
     htmlString += "<td>" + ejercicio + "</td>";
     htmlString += "<td>" + duracion + "</td>";
     htmlString += "<td>" + series + "</td>";
     htmlString += "<td>" + repeticiones + "</td>";
     htmlString += "<td>" + peso + "</td>";
     htmlString += "</tr>";
     
     
     let contenedorTabla = document.getElementById("cuerpoTabla");
     
     contenedorTabla.innerHTML += htmlString;
    
};