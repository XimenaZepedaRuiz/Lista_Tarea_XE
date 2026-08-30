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

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textoTarea = document.createElement("span");
    textoTarea.textContent = texto;

    checkbox.addEventListener("change", function () {
        textoTarea.style.textDecoration = checkbox.checked
            ? "line-through"
            : "none";
    });

    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(textoTarea);

    listaTareas.appendChild(nuevaTarea);

    tareaInput.value = "";
});

// Limpiar tareas completadas
limpiarBtn.addEventListener("click", function () {
    const tareas = listaTareas.querySelectorAll("li");

    tareas.forEach(function (tarea) {
        const checkbox = tarea.querySelector("input");

        if (checkbox.checked) {
            tarea.remove();
        }
    });
});

 
