const formulario= document.querySelector(".form-create");
let contador = 1;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div id="${contador}"class="publicacion">
            <p>id: ${contador}p>
            <p contenteditable="true">${descripcion}</p>
            <button id="editar" onclick="editar(this)">Editar</button>
            <button id="eliminar" onclick="eliminar(this)">Eliminar</button>
        </div>`;
        contador++;
});

function eliminar(e){
    e.parentElement.remove(); //sirve para poder borrar la variable  que deseas
};

function editar(e){
    const parrafo= e.parentElement.querySelector("p:nth-child(2)");
    parrafo.contentEditable = true;
    e.value = "Guardar";
    if(parrafo.contentEditable){
        parrafo.contentEditable = false;
    }
    if(e.value == "Guardar"){
        e.value = "editar";
    }
}

