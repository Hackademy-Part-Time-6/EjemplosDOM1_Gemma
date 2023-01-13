let info = [
    {
        nombre: "Paola",
        apellido: "García",
        años: 32,
        característica1: "Trabajadora",
        característica2: "Impaciente",
        característica3: "Ilusionada",
        característica4: "Romántica",
        img: "./img/Artboards_Diversity_Avatars_by_Netguru-09.png"

    },
    {
        nombre: "María",
        apellido: "Álvarez",
        años: 28,
        característica1: "Honesta",
        característica2: "Respetuosa",
        característica3: "Amable",
        característica4: "Egoísta",
        img: "./img/Artboards_Diversity_Avatars_by_Netguru-30.png"

    },
    {
        nombre: "David",
        apellido: "Cots",
        años: 24,
        característica1: "Gracioso",
        característica2: "Adaptable",
        característica3: "Competitivo",
        característica4: "Paciente",
        img: "./img/Artboards_Diversity_Avatars_by_Netguru-05.png"

    },
    {
        nombre: "Joaquín",
        apellido: "Gutiérrez",
        años: 38,
        característica1: "Sensible",
        característica2: "Perfeccionista",
        característica3: "Solitario",
        característica4: "Capaz",
        img: "./img/Artboards_Diversity_Avatars_by_Netguru-26.png"

    }

];

info.forEach(persona => {

   console.log(persona);
 
    // Seleccionar nodo
    let fila = document.querySelector("#fila");

    // Crear las col
    let col = document.createElement('div');

    // Añadimos las clases a col
    col.classList.add("col-12", "col-md-3", "d-flex", "justify-content-center");

    // Escribimos el contenido HTML de col
    col.innerHTML = `
    <div class="card my__card" style="width: 18rem;">
        <img src=${persona.img} class="card-img-top" alt="...">
        <div class="card-body text-end pe-5">
            <h3 class="card-title">${persona.nombre}</h3>
            <h4 class="card-subtitle">${persona.apellido}</h4>
            <h5>${persona.años}</h5>
            <p class="card-text">${persona.característica1}, ${persona.característica2}, ${persona.característica3}</p>            
        </div>
    </div>
    `

    // Hacer que sea visible en el DOM, es decir, en nuestro navegador
    fila.appendChild(col);



})

