const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");
const limpiarBtn = document.getElementById("limpiarBtn");

// Agregar una nueva tarea
agregarBtn.addEventListener("click", function () {
    const texto = tareaInput.value.trim();

    if (texto === "") {
        alert("Escribe una tarea antes de agregarla.");
        return;
    }

    const nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = texto;

    listaTareas.appendChild(nuevaTarea);

    tareaInput.value = "";
});
