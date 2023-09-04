// Agregar un evento click al botón "Procesar"
document.getElementById('procesarBtn').addEventListener('click', procesarDatos);

// Función para procesar los datos de la Tabla 01 y mostrarlos en la Tabla 02
function procesarDatos() {
    // Obtener la Tabla 01
    const tabla01 = document.getElementById('tabla01');
    const filas01 = tabla01.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const tabla02Container = document.getElementById('tabla02-container');

    // Limpiar y mostrar la Tabla 02
    const tabla02 = document.getElementById('tabla02');
    const tbody02 = tabla02.getElementsByTagName('tbody')[0];
    tbody02.innerHTML = '';
    tabla02.style.display = 'block';

    // Procesar los datos y generar la Tabla 02
    for (let i = 0; i < 3; i++) {
        // Crear una nueva fila en la Tabla 02
        const filaResultado = document.createElement('tr');
        // Crear celdas para la fila
        const celda1 = document.createElement('td');
        const celda2 = document.createElement('td');

        // Obtener datos de la Tabla 01
        const hora1 = filas01[i * 2].getElementsByTagName('td')[0].getElementsByTagName('input')[0].value;
        const hora2 = filas01[i * 2 + 1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;

        // Asignar los valores a las celdas de la Tabla 02
        celda1.textContent = hora1;
        celda2.textContent = hora2;

        // Aplicar estilos a las celdas de la Tabla 02
        celda1.style.border = '1px solid #ddd';
        celda2.style.border = '1px solid #ddd';
        celda1.style.padding = '10px';
        celda2.style.padding = '10px';
        celda1.style.textAlign = 'center';
        celda2.style.textAlign = 'center';

        // Agregar las celdas a la fila de la Tabla 02
        filaResultado.appendChild(celda1);
        filaResultado.appendChild(celda2);

        // Agregar la fila completa a la Tabla 02
        tbody02.appendChild(filaResultado);
    }

    // Ajustar el ancho de la Tabla 02 al 100%
    tabla02.style.width = '100%';
}
