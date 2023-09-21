//Variable para guardar los datos del carrito en el localStore
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Funcion de localStore para pasar los datos a string        
const saveLocal = ()=> {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}; 

//Funcion para mostrar los productos de un archivo json
const getproductos = async () =>{
    const response = await fetch("productos.json");
    const data = await response.json();
//Div de los produtos
    data.forEach(producto => {
        let divConten = document.createElement("div");
        divConten.className = "divCars";
        divConten.innerHTML = `
            <img src=${producto.img}>
            <h2>Id:${producto.id}</h2>
            <p class="nombre-carrito">Nombre:${producto.nombre}</p>
            <b class="precio-carrito">Precio:$${producto.precio}</b>
            `;
        tiendaContent.append(divConten);
//Boton comprar        
    let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar"
        divConten.append(comprar);
//Funcion de comprar para que se vayan agregando al carrito        
        comprar.addEventListener("click",()=>{
            const repetir = carrito.some ((repetirProducto) => repetirProducto.id === producto.id);
            if(repetir){
                carrito.map((prod)=>{
                    if(prod.id === producto.id){
                        prod.cantidad++;
                    }
                })
            }
            else{
                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    img: producto.img,
                    precio: producto.precio,
                    cantidad: producto.cantidad,
                });
            }
        saveLocal();
        carritoCouter();
        
//Alert mediante libreria        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado!!',
            showConfirmButton: false,
            timer: 1500
          });
        });
    });   
    };
        getproductos();






