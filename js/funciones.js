'use strict';
console.log("tareaxxx");

function areaCirculo(){
    let area=0;
    document.write("<p>Opcion 1</p>");
    let radio=0;
    radio= parseFloat(window.prompt("Radio del círculo? "));
    area=Math.PI*(radio**2);
    document.write(`<p>Área del círculo de radio ${radio}: ${area}</p>`);
}


function elegirMenu(){
    let opcion="";
    let pedirOpcion=true;
    console.log("Ha pulsado la opción:" + opcion);
    while (pedirOpcion){
        pedirOpcion=false;
        opcion= prompt(`Pulsa una opción
        1. Área de un circulo dado el radio
        2. Perímetro de una circunferencia dado el radio
        3. Perímeto de Polígono regular dado el lado
        4. Área de un polígono regular dado el lado
        0. Salir.`);
        switch (opcion) {
            case "1":
                console.log("opción 1");
                areaCirculo();
                break;
            case "2":
                console.log("opción 2");
                areaCirculo();
                break;
            case "3":
                console.log("opción 3");
                areaCirculo();
                break;
            case "4":
                console.log("opción 4");
                areaCirculo();
                break;
            case "0":
                console.log("opción 0");
                areaCirculo();
                break;            
            case null:
                return;

            default:
                console.log("opción no válida");
                pedirOpcion=true;
                break;
        }

    }
}

elegirMenu();
