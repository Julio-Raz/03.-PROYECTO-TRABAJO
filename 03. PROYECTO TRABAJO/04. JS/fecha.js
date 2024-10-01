// Obtiene la fecha actual
const fechaActual = new Date();
// Formatea la fecha como una cadena legible
const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

// Selecciona todos los elementos con la clase "fecha"
const elementosFecha = document.querySelectorAll('.fecha');

// Inserta la fecha en cada elemento con la clase "fecha"
elementosFecha.forEach(elemento => {
    elemento.textContent = `Fecha: ${fechaFormateada}`;
});
