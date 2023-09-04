
const tiendaContent = document.getElementById("tiendaContent")
const verCarrito = document.getElementById("verCarrito")
const modalContent = document.getElementById("modalContent")

verCarrito.addEventListener("click",()=>{
    modalContent.innerHTML = " ";
    modalContent.style.display = "flex";
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h2 class="h2-modal">Carrito</h2>
    `;
    modalContent.append(modalHeader);
    
    const modalboton = document.createElement("h2");
    modalboton.innerText = "x";
    modalboton.className = "modal-boton"; 
    modalboton.addEventListener("click", () =>{
        modalContent.style.display = "none";
    });

    modalHeader.append(modalboton);
    
    carrito.forEach((productos)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-conten";
        carritoContent.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>$${productos.precio}</p>
    `;

    modalContent.append(carritoContent);

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "eliminar-productos";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProductos)
});
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const totalProductos = document.createElement("div");
    totalProductos.className = "total-productos";
    totalProductos.innerHTML = `Total a pagar:$${total}`;
    modalContent.append(totalProductos);
});



const eliminarProductos = () => {
    const elimiarId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== elimiarId;
    });
    saveLocal();
    verCarrito();
};