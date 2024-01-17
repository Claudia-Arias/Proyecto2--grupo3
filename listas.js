
let tabla;
let nombre;
let apellido1;
let apellido2;
let rol;
let selectedOption;
let curso;
let clase;
let email;

let contadorFilas = 0;
var edicionHabilitada = false;
let campoVacio = "";
let campoVacioElement = "";

function validarEmail() {
    let emailInput = document.getElementById("txt_email");
    let email = emailInput.value;

    // Expresión regular para validar el formato del correo electrónico
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico cumple con la expresión regular
    if (regex.test(email)) {
        emailInput.style.color = "grey";
         return true;
    } else {
        emailInput.setCustomValidity("Ingresa un formato de correo electrónico válido.");
        emailInput.value = "Email no válido";
        emailInput.style.color = "red";
         return false;
    }
}

function enviarDatos() {

    if (validarEmail()) {

        //guardar los datos de los campos input
        nombre = document.getElementById('txt_Name').value;
        apellido1 = document.getElementById('txt_Apellido1').value;
        apellido2 = document.getElementById('txt_Apellido2').value;
        rol = document.getElementById('txt_rol');
        selectedOption = rol.options[rol.selectedIndex].value;
        curso = document.getElementById('txt_curso').value;
        clase = document.getElementById('txt_clase').value;
        email = document.getElementById('txt_email').value;

        if (campoVacioElement != "") {
            //para devolver el borde a sus valores por defecto una vez se ha llenado el campo y que no se quede rojo
            document.getElementById(campoVacioElement).style.borderWidth = "2px";
            document.getElementById(campoVacioElement).style.borderStyle = "insert";
            document.getElementById(campoVacioElement).style.borderColor = "black";
            document.getElementById(campoVacioElement).style.borderColor = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
            document.getElementById(campoVacioElement).style.borderImage = "initial";
        }

        //comprobar si algun campo está vacio
        switch (campoVacio) {
            case nombre:
                document.getElementById('txt_Name').style.borderColor = "red";
                alert("Debes completar el nombre");
                campoVacioElement = 'txt_Name';
                break;
            case apellido1:
                document.getElementById('txt_Apellido1').style.borderColor = "red";
                alert("Debes completar el primer apellido");
                campoVacioElement = document.getElementById('txt_Apellido1');
                break;
            case apellido2:
                document.getElementById('txt_Apellido2').style.borderColor = "red";
                alert("debes completar el segundo apellido");
                break;
            case selectedOption:
                document.getElementById('txt_rol').style.borderColor = "red";
                alert("debes completar el rol");
                break;
            case curso:
                document.getElementById('txt_curso').style.borderColor = "red";
                alert("debes completar eel curso");
                break;
            case clase:
                document.getElementById('txt_clase').style.borderColor = "red";
                alert("debes completar la clase");
                break;
            case email:
                document.getElementById('txt_email').style.borderColor = "red";
                alert("debes completar el email");
                break;
            default:
                crearFilaTabla();
                contadorFilas++;
        }

        //para que no se recarge el formulario y se puedan ver los datos
        return 1;
    }
}


function crearFilaTabla() {


    let nuevaFila;
    let celdaNombre;
    let celdaApellido1;
    let celdaApellido2;
    let celdaClase;
    let celdaRol;
    let celdaCurso;
    let celdaEmail;

    //recuperamos la tabla donde queremos insertar los datos
    tabla = document.getElementById('tablaDatos');

    //creamos una nueva fila con los datos pasados como parámetros, la fila se añade al final de las que ya existan
    nuevaFila = tabla.insertRow();
    //asignamos un id a cada fila para luego poder localizarla y borrar o editar
    nuevaFila.id = contadorFilas;

    //en la fila que acabamos de crear insertamos la primera casilla para introducir el nombre en este caso
    celdaNombre = nuevaFila.insertCell(0);
    celdaNombre.textContent = nombre;

    //insertamos en la fila otra casilla para el primer apellido
    celdaApellido1 = nuevaFila.insertCell(1);
    celdaApellido1.textContent = apellido1;

    //insertamos en la fila otra casilla para el segundo apellido
    celdaApellido2 = nuevaFila.insertCell(2);
    celdaApellido2.textContent = apellido2;

    //insertamos en la fila otra casilla para el rol
    celdaRol = nuevaFila.insertCell(3);
    celdaRol.textContent = selectedOption;

    //insertamos en la fila otra casilla para el curso
    celdaCurso = nuevaFila.insertCell(4);
    celdaCurso.textContent = curso;

    //insertamos en la fila otra casilla para la clase
    celdaClase = nuevaFila.insertCell(5);
    celdaClase.textContent = clase;

    //insertamos en la fila otra casilla para el email
    celdaEmail = nuevaFila.insertCell(6);
    celdaEmail.textContent = email;


    insertarBoton(7, "Eliminar", nuevaFila);
    insertarBoton(8, "Editar", nuevaFila);


}

function insertarBoton(celda, texto, nuevaFila) {
    let celdaBoton;
    let boton;
    let filaBorrar;
    let filaEditar;
    let celdasEditar;

    //insertamos una celda para un botón
    celdaBoton = nuevaFila.insertCell(celda);

    // Crear un botón
    boton = document.createElement("button");
    boton.textContent = texto;
    boton.type = "button";
    boton.id = "btnFila" + contadorFilas;

    // Añadir el botón a la celda
    celdaBoton.appendChild(boton);

    //agregamos un evento al botón para hacerlo funcionar
    boton.addEventListener("click", function () {
        if (boton.textContent == "Eliminar") {
            alert("eliminar ... " + boton.id.slice(-1));

            filaBorrar = boton.parentNode.parentNode;
            filaBorrar.remove();

        } else {
            // Obtén la fila actual (tr) a partir del botón clickeado
            filaEditar = boton.parentNode.parentNode;

            // Obtén todas las celdas (td) en la fila
            celdasEditar = filaEditar.querySelectorAll('td');

            //si la edición está habilitada cambio el texto del boton y ahora pongo a No Editable las celdas de nuevo   
            if (edicionHabilitada) {
                boton.textContent = 'Editar';
                celdasEditar.forEach(function (celdaEditar) {
                    celdaEditar.contentEditable = false;
                });

                edicionHabilitada = false;
            } else { // Si la edición no está habilitada, habilita y cambia el texto del botón
                boton.textContent = 'Fin Edición';
                celdasEditar.forEach(function (celdaEditar) {
                    celdaEditar.contentEditable = true;
                });

                edicionHabilitada = true;
            }

        };
    });

}