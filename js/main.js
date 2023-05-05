function horas() {
    let familia = []; // arreglo para almacenar objetos persona
    let nombre = prompt("Ingrese su nombre o ESC para salir");
    let contadorEx = 0;
    let contadorAp = 0;
    let contadorRep = 0;
    let horasT = 0;

    while (nombre !== "ESC" && nombre !== "esc") {
        let puntaje = Number(prompt("Ingrese cantidad de horas frente al dispositivo 0 al 10"));

        if (puntaje >= 11) {
            alert("La cantidad debe ser un número entre 0 y 10");
            continue;
        } else if (puntaje >=7){
            contadorEx += 1;
            console.log (nombre + " pasa muchas horas");
        } else if (puntaje >=4 && puntaje < 7 ){
            contadorAp += 1;
            console.log (nombre + " pasa horas normales");
        } else if (puntaje >=0){
            contadorRep += 1;
            console.log (nombre + " pasa muy pocas horas");
        } else {
            alert(
                "La nota debe ser un número entre 0 y 10 escrita en formato numérico"
            );
            continue;
        }
        horasT += puntaje;

        // Agregar objeto persona al arreglo
        familia.push({
            nombre: nombre,
            horas: puntaje
        });

        nombre = prompt("Ingrese su nombre o ESC para salir");
    }

    console.log(`La cantidad personas que pasan muchas horas es ${contadorEx}, la cantidad de personas que usan con frecuencia normal son ${contadorAp}, la cantidad de personas que usan muy poco son ${contadorRep}`);
    let puntajeobtenido = contadorEx + contadorAp + contadorRep;
    let average = horasT / puntajeobtenido;
    let promedio = average.toFixed(1);
    console.log (`El tiempo promedio por persona en la familia es de ${promedio}`);

    // Imprimir arreglo de personas
    console.log("Lista de personas en la familia:");
    console.log(familia);

    // Filtrar personas que pasan muchas horas
    let muchasHoras = familia.filter(persona => persona.horas >= 7);
    console.log("Personas que pasan muchas horas:");
    console.log(muchasHoras);

    // Buscar persona por nombre
    let nombreBuscar = prompt("Ingrese el nombre de la persona que desea buscar o ESC para salir:");

while (nombreBuscar !== "ESC" && nombreBuscar !== "esc") {
    let personaEncontrada = familia.find(persona => persona.nombre === nombreBuscar);
    if (personaEncontrada) {
        console.log(`La persona ${personaEncontrada.nombre} pasó ${personaEncontrada.horas} horas frente al dispositivo.`);
        alert(`La persona ${personaEncontrada.nombre} pasó ${personaEncontrada.horas} horas frente al dispositivo.`);
        nombreBuscar = prompt("Ingrese el nombre de la persona que desea buscar o ESC para salir:")
        break;
    } else {
        console.log(`No se encontró a ninguna persona con el nombre ${nombreBuscar}.`);
        alert(`No se encontró a ninguna persona con el nombre ${nombreBuscar}.`);
        nombreBuscar = prompt("Ingrese el nombre de la persona que desea buscar o ESC para salir:");
    }
}


    
}

horas();
