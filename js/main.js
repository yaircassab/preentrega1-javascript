function horas() {
    let cantHoras = prompt("ingrese su nombre o ESC para salir");
    contadorEx = 0;
    contadorAp = 0;
    contadorRep = 0;
    let horasT = 0;
    while (cantHoras != "ESC" && cantHoras != "esc"){
        let puntaje = Number(prompt("Ingrese cantidad de horas frente al dispositivo 0 al 10"));
        if (puntaje >= 11) {
            alert("La cantidad debe ser un numero entre 0 y 10");
            continue;
        } else if (puntaje >=7){
            contadorEx +=1;
            console.log (cantHoras + " pasa muchas horas");
        } else if (puntaje >=4 && puntaje < 7 ){
            contadorAp +=1;
            console.log (cantHoras + " pasa horas normales");
        } else if (puntaje >=0){
            contadorRep +=1;
            console.log (cantHoras + " pasa muy pocas horas");
        } else {
            alert(
                "La nota debe ser un numero entre 0 y 10 escrita en formato numerico"
            );
            continue;
        }
        horasT += puntaje
        cantHoras = prompt("ingrese su nombre o ESC para salir");
    }
    console.log(`La cantidad personas que pasan muchas horas es ${contadorEx}, la cantidad de personas que usan con frecuencia normal son ${contadorAp}, la cantidad de personas que usan muy poco son ${contadorRep}`
    );
    let puntajeobtenido = contadorEx + contadorAp + contadorRep;
    let average = horasT / puntajeobtenido
    let promedio = average.toFixed(1);
    console.log (`el tiempo promedio por persona en la familia es de ${promedio}`);
    console.log ("Chau")
}
horas();