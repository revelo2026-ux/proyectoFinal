
let total = 0;

function agregarAlContador(boton) {
    if (boton.innerText === "❤️ Me interesa") {
        boton.innerText = "✔ Seleccionado";
        boton.style.backgroundColor = "red";
        total = total + 1;
    } else {
        boton.innerText = "❤️ Me interesa";
        boton.style.backgroundColor = "#1a233a";
        total = total - 1;
    }

    document.getElementById("contador").innerText = total;
}


let temporizadorNotificacion;

function agregarAlContador(boton) {
    const contadorElem = document.getElementById('contador');
    let contadorActual = parseInt(contadorElem.innerText) || 0;
    contadorElem.innerText = contadorActual + 1;

    // 2. Mostrar mensaje de alerta emergente
    alert("¡Se ha agregado al carrito!");
}


function filtrarCategoria(categoria) {
    let productos = document.querySelectorAll(".producto");

    for (let i = 0; i < productos.length; i++) {
        let prod = productos[i];

        switch (categoria) {
            case "accesorios":
                if (prod.classList.contains("accesorios")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            case "pantallas":
                if (prod.classList.contains("pantallas")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            case "cpu":
                if (prod.classList.contains("cpu")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            case "laptops":
                if (prod.classList.contains("laptops")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            default:
              
                prod.style.display = "block";
                break;
        }
    }
}


function buscarProductos() {
    let texto = document.getElementById("input-buscar").value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    for (let i = 0; i < productos.length; i++) {
        let prod = productos[i];
        let nombre = prod.innerText.toLowerCase();

        if (nombre.includes(texto)) {
            prod.style.display = "block";
        } else {
            prod.style.display = "none";
        }
    }
}