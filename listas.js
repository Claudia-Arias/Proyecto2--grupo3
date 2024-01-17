
let nombre;
let apellido1;
let apellido2;
let rol;
let curso;
let clase;
let email;



function enviarDatos() {

    nombre = document.getElementById('txt_Name').value;
    apellido1 = document.getElementById('txt_Apellido1').value;
    apellido2 = document.getElementById('txt_Apellido2').value;
    rol = document.getElementById('txt_rol').value;
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
    //insertamos en la fila otra casilla para la descripcion
    celdaDescrip = nuevaFila.insertCell(1);
    celdaDescrip.textContent = descripcion
    //insertamos una celda para un botón
    celdaBoton = nuevaFila.insertCell(2);

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

}

