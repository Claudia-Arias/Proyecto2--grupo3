
let nombre;
let apellido1;
let apellido2;
let rol;
let selectedOption;
let curso;
let clase;
let email;



function enviarDatos() {

    nombre = document.getElementById('txt_Name').value;
    apellido1 = document.getElementById('txt_Apellido1').value;
    apellido2 = document.getElementById('txt_Apellido2').value;
    rol = document.getElementById('txt_rol');
    selectedOption = rol.options[rol.selectedIndex].value;
    curso = document.getElementById('txt_curso').value;
    clase = document.getElementById('txt_clase').value;
    email = document.getElementById('txt_email').value;

    crearFilaTabla();

    //para que no se recarge el formulario y se puedan ver los datos
    return 1;
}


function crearFilaTabla() {

    let tabla;
    let nuevaFila;
    let celdaNombre;
    let celdaDescrip;
    let celdaBoton;
    let boton;

    //recuperamos la tabla donde queremos insertar los datos
    tabla = document.getElementById('tablaDatos');

    //creamos una nueva fila con los datos pasados como parámetros, la fila se añade al final de las que ya existan
    nuevaFila = tabla.insertRow();

    //en la fila que acabamos de crear insertamos la primera casilla para introducir el nombre en este caso
    celdaNombre = nuevaFila.insertCell(0);
    celdaNombre.textContent = nombre;

    //insertamos en la fila otra casilla para el primer apellido
    celdaApellido1 = nuevaFila.insertCell(1);
    celdaApellido1.textContent = apellido1;

//insertamos en la fila otra casilla para el segundo apellido
celdaApellido2 = nuevaFila.insertCell(2);
celdaApellido2.textContent = apellido2;

//insertamos en la fila otra casilla para el primer apellido
celdaRol = nuevaFila.insertCell(3);
celdaRol.textContent = rol;

//insertamos en la fila otra casilla para el primer apellido
celdaCurso = nuevaFila.insertCell(4);
celdaCurso.textContent = curso;

//insertamos en la fila otra casilla para el primer apellido
celdaClase = nuevaFila.insertCell(5);
celdaClase.textContent = clase;

//insertamos en la fila otra casilla para el primer apellido
celdaEmail = nuevaFila.insertCell(6);
celdaEmail.textContent = email;





    //insertamos una celda para un botón
    celdaBoton = nuevaFila.insertCell(7);

    // Crear un botón
    boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.type = "button";

    // Añadir el botón a la celda
    celdaBoton.appendChild(boton);

    //agregamos un evento al botón para hacerlo funcionar
    boton.addEventListener("click", function() {
        alert("biennnnn funcionaaaaa !!!!!!!!!!!");
      });
      boton.

}

