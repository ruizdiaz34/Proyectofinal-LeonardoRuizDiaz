let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
productos.forEach(producto => {
    let divConten = document.createElement("div");
    divConten.className = "divCars";
    divConten.innerHTML = `
        
        <img src=${producto.img}>
        <h2>Id:${producto.id}</h2>
        <p>Nombre:${producto.nombre}</p>
        <b>Precio:$${producto.precio}</b>
        
        
    `;

    tiendaContent.append(divConten);
    
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar"
    divConten.append(comprar);

    comprar.addEventListener("click",()=>{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            img: producto.img,
            precio: producto.precio,
        });
    saveLocal()    
    });
});   
const saveLocal = ()=> {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};




