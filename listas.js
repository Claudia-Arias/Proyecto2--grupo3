
let nombre;
let descripcion;


function enviarDatos() {

    nombre = document.getElementById('cajaNombre').value;
    descripcion = document.getElementById('cajaDescripcion').value;

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

