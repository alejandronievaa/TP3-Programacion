// Arreglo con los 6 elementos
const productos = [
    { id: 1, nombre: "Elemento A" },
    { id: 2, nombre: "Elemento B" },
    { id: 3, nombre: "Elemento C" },
    { id: 4, nombre: "Elemento D" },
    { id: 5, nombre: "Elemento E" },
    { id: 6, nombre: "Elemento F" }
];

const contenedor = document.getElementById("contenedorTarjetas");
const btn = document.getElementById("btnInteraccion");
let destacados = false;

// Función para renderizar dinámicamente
function renderizar() {
    contenedor.innerHTML = "";
    
    productos.forEach(prod => {
        const div = document.createElement("div");
        // Modificación de la vista mediante clase condicional
        div.className = `tarjeta ${destacados && prod.id % 2 !== 0 ? 'destacado' : ''}`;
        div.innerHTML = `<h3>${prod.nombre}</h3><p>ID: ${prod.id}</p>`;
        contenedor.appendChild(div);
    });
}

btn.addEventListener("click", () => {
    destacados = !destacados;
    btn.innerText = destacados ? "Quitar destaque" : "Destacar elementos impares";
    renderizar();
});

// Carga inicial
renderizar();   

