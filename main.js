alert("bienvenido a su portal")

let nombrePaciente = "";

let turnoPaciente = 0;

let turnoActual = 0;

let totalTurnos = 10;


function registrarPaciente(){
    nombrePaciente = prompt ("Ingrese su nombre:");
    if (nombrePaciente === "" || nombrePaciente === null){
        alert ("Debe ingresar un nombre válido");
        return;
    }

    turnoPaciente = Number(prompt("ingrese su número de turno (1 al 10):"));
                    //number() convierte el texto ingeresado a numero
    if (turnoPaciente < 1 || turnoPaciente > totalTurnos) { // si el turno del paciente es menor a 1 o el turno del paciente es mayor al total de los turnos (10) ALERT!
        alert ("Turno inválido. Debe ser entre 1 y " + totalTurnos);
        return;
    }

    alert("Registro exitoso." + "\n1- Nombre: " + nombrePaciente + "\n2- Turno " + turnoPaciente);

}

/* registrarPaciente() */


function verEstadoTurno() {
    if (turnoPaciente === 0) {
        alert("debe registrarse primero."); //si nombrePaciente esta vacío, muestra alert.
        return;
    }

    turnoActual = Number(prompt("Ingrese el turno actual que se está atendiendo:"));

    if(turnoActual < 0 || turnoActual > totalTurnos) {
        alert ("número inválido");
        return; //detiene la función, pero es necesario ponerlo? no se puede reinciar solo? 
    }

    let faltan = turnoPaciente - turnoActual; //resta el turno proporcionado por el paciente "turnoPaciente" para saber cuantos quedan, en comparación con el turno actual que ingresó también el turnoPaciente.

    if (faltan > 0) {
        alert ("faltan " + faltan + " personas para su atención."); //si la varaible es mayor a 0, le muestra cuantos pacientes hay antes.
    } else if (faltan === 0){ // pero si, la variable es exactamente igual al número ingresado, es su turno ahora!
        alert("Es su turno ahora");
    } else {
        alert ("su turno ya paso, acérquese al mostrador."); // si es menos del numero ingresado, sale.
    }

}

/* verEstadoTurno() */

function mostrarListadoTurnos(){

    if (nombrePaciente === "");
    alert("Debe registrarse primero.");
    return;

}

let mensaje = "Lista de turnos del día:\n";
for (let i = 1; i <= totalTurnos; i++){ //inicializa en i=1 // <=totaTurnos mientras i sea menor o igual que la variable. // al final de cada vuelta se incrementa 1

    if (i === turnoPaciente){
        mensaje += i + "(Su turno)\n"; //+= i concatena el texto a la variable
    } else {
        mensaje += i + "\n"
    }
}
alert (mensaje)


let seguir = true;

while (seguir) { //mientras la opción no sea false la rpite

    let opcion = prompt("Seleccione una opción: - \n 1. Registrarme (Asignar turno). \n 2. Ves estado de mi turno. \n 3. Mostrar listado de turnos. \n 4. Salir"); //no puedo hacer que esto funcione, si le pongo número a las n es "no válido", es válido solo si no pongo "n1, n2, etc..."

    switch (opcion) { // compara según lo que seleccione el usuario 

        case "n1":
            registrarPaciente();
            break;

        case "n2":
            verEstadoTurno();
            break;

        case "n3":
            mostrarListaTurnos();
            break;

        case "n4":
            seguir = false;
            alert("Gracias por usar el simulador.");
            break; 

        default:
            alert("Opción no válida. Intente de nuevo."); //para cuando el usuario se equivoca
    }
}

