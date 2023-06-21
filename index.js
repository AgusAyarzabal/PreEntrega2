

// Definir los productos disponibles
const productos = [
  { nombre: 'Loción para piercing', precio: 500 },
  { nombre: 'Crema para curado de tatuaje', precio: 1500 }
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
  alert('Productos disponibles:');
  productos.forEach((producto, index) => {
    alert(`${index + 1}. ${producto.nombre} : $${producto.precio}`);
  });
}

// Función para calcular el total de la compra
function calcularTotal(carrito) {
  const precios = carrito.map(producto => producto.precio);
  const total = precios.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
}

// Función principal del carrito de compras
function carritoCompras() {
  const carrito = [];

  let opcion = -1;
  while (opcion !== 0) {
    alert('Carrito de Compras - AldyAyarzabalTattoo');
    mostrarProductos();
    opcion = parseInt(prompt('Seleccione una opción: \n 1. Para agregar producto al carrito.  \n 2. Para ver carrito actual. \n 3. Para calcular total de la compra. \n 0. Para salir'));

    switch (opcion) {
      case 1:
        const productoIndex = parseInt(prompt('Ingrese el número del producto a agregar:')) - 1;
        const productoSeleccionado = productos[productoIndex];
        carrito.push(productoSeleccionado);
        alert(`Se ha agregado "${productoSeleccionado.nombre}" al carrito.`);
        break;
      case 2:
        alert('Carrito actual');
        if (carrito.length === 0) {
          alert('El carrito está vacío.');
        } else {
          for (let i = 0; i < carrito.length; i++) {
            alert(`${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}`);
          }
        }
        break;
      case 3:
        const totalCompra = calcularTotal(carrito);
        alert(`El total de la compra es: $${totalCompra}`);
        break;
      case 0:
        alert('Saliendo del programa...');
        break;
      default:
        alert('Opción inválida. Por favor, seleccione nuevamente.');
    }
  }
}

// Ejecutar el carrito de compras
carritoCompras();

