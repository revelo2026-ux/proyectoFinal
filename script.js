// ===============================
// PRODUCTOS RINOK
// ===============================

const PRODUCTOS = [

    {
        id: 1,
        nombre: "AUDIFONO BLUETOOTH JBL TUNE 520BT",
        categoria: "accesorios",
        precio: 50,
        imagen: "./imagenes/NomadaWare_audifono_jbl_tune_520bt_azul-1000x1000.webp"
    },


    {
        id: 2,
        nombre: "TECLADO Y MOUSE INALAMBRICO MEETION MINI5000",
        categoria: "accesorios",
        precio: 20,
        imagen: "./imagenes/NomadaWare_Teclado_inalambrico_meetion_mini5000-500x500.webp"
    },


    {
        id: 3,
        nombre: "MONITOR CURVO MSI MAG 242C 1080P VA 180HZ 1MS",
        categoria: "pantallas",
        precio: 239,
        imagen: "./imagenes/NomadaWare_monitor_MSI_MAG_242C.webp"
    },


    {
        id: 4,
        nombre: "MOUSE ERGONOMICO MEETION M390",
        categoria: "accesorios",
        precio: 15,
        imagen: "./imagenes/NomadaWare_mouse_meetion_m390-500x500.webp"
    },


    {
        id: 5,
        nombre: "CPU INTEL CORE I5 1TB",
        categoria: "cpu",
        precio: 444,
        imagen: "./imagenes/img_2565d0png"
    },


    {
        id: 6,
        nombre: "LAPTOP ENV BOOK PRO MAX 14 INTEL N4020 +8GB RAM +256GB SSD",
        categoria: "laptops",
        precio: 319,
        imagen: "./imagenes/NomadaWare_laptop_env_book_pro_max_14.webp"
    }

];



// ===============================
// VARIABLES DEL CARRITO
// ===============================


let carrito = JSON.parse(localStorage.getItem("carritoRinok")) || [];




// ===============================
// AGREGAR PRODUCTO
// ===============================


function agregarAlCarrito(id) {


    let producto = PRODUCTOS.find(p => p.id === id);


    let existe = carrito.find(p => p.id === id);



    if (existe) {


        existe.cantidad++;


    } else {


        carrito.push({

            ...producto,

            cantidad: 1

        });


    }



    guardarCarrito();

    actualizarCarrito();

    mostrarMensaje();



}




// ===============================
// GUARDAR CARRITO
// ===============================


function guardarCarrito() {


    localStorage.setItem(

        "carritoRinok",

        JSON.stringify(carrito)

    );


}




// ===============================
// MOSTRAR CARRITO
// ===============================


function actualizarCarrito() {


    let contenedor = document.getElementById("carritoProductos");

    let contador = document.getElementById("contador");

    let subtotal = document.getElementById("subtotal");

    let total = document.getElementById("total");

    let carritoVacio = document.getElementById("carritoVacio");



    if (!contenedor) return;



    contenedor.innerHTML = "";



    let cantidadTotal = 0;

    let suma = 0;



    carrito.forEach(producto => {


        cantidadTotal += producto.cantidad;



        suma += producto.precio * producto.cantidad;



        let div = document.createElement("div");



        div.className = "item-carrito";



        div.innerHTML = `


<div>


<h6>

${producto.nombre}

</h6>


<p>

$${producto.precio}

x ${producto.cantidad}

</p>



<button onclick="cambiarCantidad(${producto.id},-1)">

-

</button>


<span>

${producto.cantidad}

</span>



<button onclick="cambiarCantidad(${producto.id},1)">

+

</button>



<button 
onclick="eliminarProducto(${producto.id})"
class="btn btn-danger btn-sm">


<i class="bi bi-trash"></i>


</button>


</div>



<hr>


`;



        contenedor.appendChild(div);



    });





    contador.innerText = cantidadTotal;



    subtotal.innerText = "$" + suma.toFixed(2);

    total.innerText = "$" + suma.toFixed(2);




    if (carrito.length === 0) {


        carritoVacio.style.display = "block";


    } else {


        carritoVacio.style.display = "none";


    }



}




// ===============================
// CAMBIAR CANTIDAD
// ===============================


function cambiarCantidad(id, cambio) {


    let producto = carrito.find(p => p.id === id);



    producto.cantidad += cambio;



    if (producto.cantidad <= 0) {


        eliminarProducto(id);


        return;


    }



    guardarCarrito();

    actualizarCarrito();



}




// ===============================
// ELIMINAR PRODUCTO
// ===============================


function eliminarProducto(id) {


    carrito = carrito.filter(p => p.id !== id);



    guardarCarrito();

    actualizarCarrito();



}




// ===============================
// VACIAR CARRITO
// ===============================


function vaciarCarrito() {


    carrito = [];


    guardarCarrito();


    actualizarCarrito();


}




// ===============================
// FINALIZAR COMPRA
// ===============================


document.addEventListener("DOMContentLoaded", () => {


    actualizarCarrito();



    let comprar = document.getElementById("comprarBtn");



    if (comprar) {


        comprar.addEventListener("click", () => {


            if (carrito.length === 0) {


                alert("El carrito está vacío");


                return;


            }



            alert("¡Gracias por comprar en RINOK!");


            vaciarCarrito();



        });

    }



});






// ===============================
// BUSCADOR
// ===============================


function buscarProductos() {


    let texto = document
        .getElementById("input-buscar")
        .value
        .toLowerCase();



    let productos = document.querySelectorAll(".producto");



    productos.forEach(producto => {


        let nombre = producto.innerText.toLowerCase();



        if (nombre.includes(texto)) {


            producto.style.display = "block";


        } else {


            producto.style.display = "none";


        }



    });



}






// ===============================
// FILTRO CATEGORÍAS
// ===============================


function filtrarCategoria(categoria) {


    let productos = document.querySelectorAll(".producto");



    productos.forEach(producto => {


        if (categoria === "todas") {


            producto.style.display = "block";


        }

        else if (producto.classList.contains(categoria)) {


            producto.style.display = "block";


        }

        else {


            producto.style.display = "none";


        }



    });



}




// ===============================
// TOAST
// ===============================


function mostrarMensaje() {


    let toast = document.getElementById("mensajeToast");


    if (toast) {


        let mensaje = new bootstrap.Toast(toast);


        mensaje.show();


    }



}