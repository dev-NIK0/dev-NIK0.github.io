document.addEventListener( "DOMContentLoaded" , () => {
    const razas = document.getElementById("razas");
    const busquedaRaza = document.getElementById("busquedaRaza");
    const razaEncontrada = document.getElementById("razaEncontrada");

    
    razas.addEventListener("click",(e) => {
        if (e.target.tagName === "ARTICLE") {
            mostrarRaza(e.target);
        }
    });

    busquedaRaza.addEventListener("input", function () {
        buscarRaza(busquedaRaza.value.toLowerCase());
    });

    function mostrarRaza(nombreRaza) {
        razaEncontrada.innerHTML = "";
        const razaSeleccionada = nombreRaza.cloneNode(true);
        razaEncontrada.appendChild(razaSeleccionada);
        
    }

    function buscarRaza(nombre) {
        const todasLasRazas = razas.querySelectorAll("article");
        todasLasRazas.forEach( (raza) => {
            const nombreRaza = raza.querySelector(".razasSection-h3").innerText.toLowerCase();
            if (nombreRaza.includes(nombre)) {
                raza.style.display = "block";
            } else {
                raza.style.display = "none";
            }

        });
        setTimeout(() => {
            todasLasRazas.style.display = "block";
        }, 2000)
        
    }
    function mostrarMensaje() {
        const mensaje = document.createElement("p");
        mensaje.innerText = "No se encontraron razas con ese término de búsqueda.";
        mensaje.id = "mensaje";
        mensaje.style.textAlign = "center";

        razaEncontrada.innerHTML = "";
        razaEncontrada.appendChild(mensaje);
    }

});


