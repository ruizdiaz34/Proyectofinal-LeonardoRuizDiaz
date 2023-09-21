//Creando los document del carrito
//Div de tindaContent
    const tiendaContent = document.getElementById("tiendaContent");
//P de verCarrito
    const verCarrito = document.getElementById("verCarrito");
//Div de modalContent
    const modalContent = document.getElementById("modalContent");
//Span de cantidad de carrito
    const cantidadCarrito = document.getElementById("cantidadCarrito");
//app de carrito
    const pintarcarrito = () =>{
    modalContent.innerHTML = " ";
    modalContent.style.display = "flex";
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h2 class="h2-modal">Carrito</h2>
    `;
    modalContent.append(modalHeader);

//Boton para cerrar carrito
    const modalboton = document.createElement("h2");
    modalboton.innerText = "x";
    modalboton.className = "modal-boton"; 
    modalboton.addEventListener("click", () =>{
        modalContent.style.display = "none";
    });
    modalHeader.append(modalboton);

//Mostrar carrito en pantalla
    carrito.forEach((productos)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-conten";
        carritoContent.innerHTML = `
        <img  src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <span class="restar">-</span>
        <p>$${productos.precio}</p>
        <p>Cantidad: ${productos.cantidad}</p>
        <span class="sumar">+</span>
        <p>Total: $${productos.cantidad * productos.precio}</p>
        <span class="eliminar-productos">🗑</span>
    `;
    modalContent.append(carritoContent);
    
//Boton para eliminar produtos
    let eliminarProducto = carritoContent.querySelector(".eliminar-productos");
    eliminarProducto.addEventListener("click", ()=>{
        eliminarProductos(productos.id);

//Alert mediante libreria    
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: '¡Producto eliminado!',
            showConfirmButton: false,
            timer: 1500
          });
    });
    
    //Boton para restar cantidad de productos
    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", ()=> {
        if (productos.cantidad !== 1) {
            productos.cantidad--;
        }
        saveLocal();
        pintarcarrito()
    });

    //Boton para sumar cantidad de productos
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", ()=>{
        productos.cantidad++;
        saveLocal();
        pintarcarrito()
    })
});

    //Funcion para sumar y multiplicar los productos
    const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

    //Div del total a pagar
    const totalProductos = document.createElement("div");
    totalProductos.className = "total-productos";
    totalProductos.innerHTML = `Total a pagar:$${total}`;
    modalContent.append(totalProductos);
};

//Al hacer click en el icono carrito se muestra la app pintarcarrito
verCarrito.addEventListener("click", pintarcarrito)

//Funcion para eliminar los productos reconociendo su id
const eliminarProductos = (id) => {
    const elimiarId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== elimiarId;
    });
    carritoCouter();
    saveLocal();
    pintarcarrito();
};

//Funcion contador de productos agregados al carrito
const carritoCouter =() => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
};