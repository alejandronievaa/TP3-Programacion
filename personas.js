const form = document.getElementById("formPersona");
const tablaCuerpo = document.getElementById("tablaCuerpo");

// Manejo de eventos directo
form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    // Captura de valores del DOM
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Cálculo del IMC requerido
    const imc = (peso / (altura * altura)).toFixed(2);

    // Manipulación directa del DOM: Crear el nodo fila (tr)
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura} m</td>
        <td>${peso} kg</td>
        <td><strong>${imc}</strong></td>
        <td><button class="btn-borrar">Quitar</button></td>
    `;

    // Evento directo sobre el botón de la fila para removerla
    fila.querySelector(".btn-borrar").addEventListener("click", function() {
        fila.remove(); // Quitado de filas directo del DOM
    });

    // Carga dinámica en la tabla
    tablaCuerpo.appendChild(fila);

    // Limpiar campos del formulario
    form.reset();
});

