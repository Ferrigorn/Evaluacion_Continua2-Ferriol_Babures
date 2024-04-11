
//Funcion para el select de la página fitness

function objetivoFitness() {
         let seleccion = document.getElementById("select1").value; //perque agafi el valor del select
         document.getElementById("objetivoSelect").value = seleccion; //perque iguali el valor del select i el mostri a l'input "objetivoSelect"
         let imagen= document.getElementById("imgPeso"); //variable per la imatge
       
       //Switch segons la selecció
        switch (seleccion) {
            case "Adelgazar": //si el select es perder peso, afegeix aquesta imatge
                imagen.src = "Recursos/Imagenes/perderpeso_big.png";
                break;
            case "Muscular": //si el select es muscular, afegeix aquesta imatge
                imagen.src = "Recursos/Imagenes/Logo.png";
                break;
            case "Desestresarse": //si el select es desestresarse, afegeix aquesta imatge
                imagen.src = "Recursos/Imagenes/perderpeso_big.png";
                break;
            case "MindFullness": //si el select es mindfullnes, afegeix aquesta imatge
                imagen.src = "Recursos/Imagenes/perderpeso_big.png";
                break;

                    
            default:
                break;
         }
};


//Función para crear e insertar tabla musculación
//creación de array de objetos para la información a mostrar en la tabla de musculación
const Musculacion = [
    {
    "ejercicio": "Biceps",
    "duracion": 10,
    "series": 3,
    "repeticiones": 12,
    "peso": 20
    },
    {
    "ejercicio": "Tríceps",
    "duracion": 10,
    "series": 3,
    "repeticiones": 12,
    "peso": 20
    },
    {
    "ejercicio": "Pectoral",
    "duracion": 10,
    "series": 3,
    "repeticiones": 12,
    "peso": 20
    }
]


 
 function construirTablaMusculacion() {
   //creación de la tabla
    let htmlString = "";

    htmlString += "<table>";
    htmlString += "<tr>";
    htmlString += "<th>Ejercicio</th>";
    htmlString += "<th>Duración</th>";
    htmlString += "<th>Series</th>";
    htmlString += "<th>Repeticiones</th>";
    htmlString += "<th>Peso</th>";
    htmlString += "</tr>";
    //bucle para recorrer el array creado anteriormente
    for (let i = 0; i < Musculacion.length; i++) {
        let propiedad = Musculacion[i];
       //aquí definimos la información extraida del bucle 
       //para poner la información del valor de la clave de cada objeto recorrido en el array 
        htmlString += "<tr>";
        htmlString += "<td>" + propiedad.ejercicio + "</td>";
        htmlString += "<td>" + propiedad.duracion + "</td>";
        htmlString += "<td>" + propiedad.series + "</td>";
        htmlString += "<td>" + propiedad.repeticiones + "</td>";
        htmlString += "<td>" + propiedad.peso + "</td>";
        htmlString += "</tr>";
        
    }

    htmlString += "</table>";
    
    //variable para "apuntar" al elemento al que queremos inyectar la información
    let contenedorMusculacion = document.getElementById("tablaMusculacion");
    contenedorMusculacion.innerHTML = htmlString;  //inyectamos la información a este elemento
}

//Función para crear e insertar tabla Aerobico

//constante para la creación de un array con la información que queremos mostrar
const Aerobico = [
    {
    "ejercicio": "Correr",
    "duracion": 40,
    "Velocidad": "Alta",
    "Kcal Quemadas": 200
    },
    {
    "ejercicio": "Nadar",
    "duracion": 40,
    "Velocidad": "Media",
    "Kcal Quemadas": 400
    },
    {
    "ejercicio": "Bicicleta",
    "duracion": 60,
    "Velocidad": "Alta",
    "Kcal Quemadas": 300
    }
]

//Función tabla Aerobica (sigue la misma pauta que la funcion construirTablaMusculacion)
function construirTablaAerobico() {
    let htmlString = "";

    htmlString += "<table>";
    htmlString += "<tr>";
    htmlString += "<th>Ejercicio</th>";
    htmlString += "<th>Duración minutos</th>";
    htmlString += "<th>Velocidad</th>";
    htmlString += "<th>Kcal Quemadas</th>";
    htmlString += "</tr>";

    for (let i = 0; i < Aerobico.length; i++) {
        let propiedad = Aerobico[i];
        
        htmlString += "<tr>";
        htmlString += "<td>" + propiedad.ejercicio + "</td>";
        htmlString += "<td>" + propiedad.duracion + "</td>";
        htmlString += "<td>" + propiedad.Velocidad + "</td>";
        htmlString += "<td>" + propiedad["Kcal Quemadas"] + "</td>";
        htmlString += "</tr>";
        
    }

    htmlString += "</table>";
    

    let contenedorAerobico = document.getElementById("tablaAerobico");
    contenedorAerobico.innerHTML = htmlString;
}

//Función para crear e insertar tabla Yoga


//constante para la creación de un array con la información que queremos mostrar


const Yoga = [
    {
    "tipo": "Vinyasa",
    "duracion": 40,
    "Intensidad": "Alta",
    "Objetivo": "Movilidad y Fuerza"
    },
    {
        "tipo": "Vinyasa",
        "duracion": 40,
        "Intensidad": "Alta",
        "Objetivo": "Movilidad y Fuerza"
    },
    {
        "tipo": "Vinyasa",
        "duracion": 40,
        "Intensidad": "Alta",
        "Objetivo": "Movilidad y Fuerza"
    },
];


// Funció para crear tabla a partir del formulario



    document.getElementById("creaTuRutina").addEventListener('click', function(event){
        if (event.target.id == 'crearMiTabla'){
            event.preventDefault();//preventDefault per evitar que faci l'acció que té per defecte
            prova();//executa la funció
        }


    });
    function prova(){
        let ejercicio = document.getElementById("ejercicio").value;//cogemos el valor del input 
        let duracion = document.getElementById("duracion").value;//cogemos el valor del input 
        let series = document.getElementById("series").value;//cogemos el valor del input 
        let repeticiones = document.getElementById("repeticiones").value;//cogemos el valor del input 
        let peso = document.getElementById("peso").value;//cogemos el valor del input 
         let htmlString = "";
    
        htmlString += "<table>";
        htmlString += "<tr>";
        htmlString += "<th>Ejercicio</th>";
         htmlString += "<th>Duración</th>";
         htmlString += "<th>Series</th>";
         htmlString += "<th>Repeticiones</th>";
         htmlString += "<th>Peso</th>";
         htmlString += "</tr>";
         htmlString += "<tr>";
         htmlString += "<td>" + ejercicio + "</td>";
         htmlString += "<td>" + duracion + "</td>";
         htmlString += "<td>" + series + "</td>";
         htmlString += "<td>" + repeticiones + "</td>";
         htmlString += "<td>" + peso + "</td>";
         htmlString += "</tr>";
         htmlString += "</table>";
         
         let contenedorTabla = document.getElementById("miTabla");
         
         contenedorTabla.innerHTML = htmlString;
         alert("Aprieta Aceptar para visualizar tu Tabla");
    };


//Funcions pels controls dels videos
    //Funcions pels controls del video musculacion
    let controles = document.getElementById("videoPlayer");
    
    //Funcion play
    function playPause(){
        if (controles.paused){
            controles.play()
        }else{
            controles.pause()
        }
    };

    //funcion stop
    function stop(){
        controles.pause();
        controles.currentTime = 0;
    };

    //funcion avanzar/retroceder
    function skip(value){
        controles.currentTime += value;
    };
    
    //funcion silenciar
    function mute(){
        if(controles.muted){
            controles.muted = false;
        }else{
            controles.muted = true;
        }
    };

     //Funcions pels controls del video Aerobico

     let controlesAero = document.getElementById("videoPlayerAero");
    
     //Funcion play
     function playPauseAero(){
         if (controlesAero.paused){
             controlesAero.play()
         }else{
             controlesAero.pause()
         }
     };
 
     //funcion stop
     function stopAero(){
         controlesAero.pause();
         controlesAero.currentTime = 0;
     };
 
     //funcion avanzar/retroceder
     function skipAero(value){
         controlesAero.currentTime += value;
     };
     
     //funcion silenciar
     function muteAero(){
         if(controlesAero.muted){
             controlesAero.muted = false;
         }else{
             controlesAero.muted = true;
         }
     };

// Funcio per contador de temps


// function actualizarTiempo(){
//     let segundos = 0;
//     document.getElementById("tiempo").innerHTML = "Llevas: " + segundos + " segundos";
//     segundos++;
//     setInterval("actualizarTiempo()", 1000);
// }