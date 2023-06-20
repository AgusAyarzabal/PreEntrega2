// // Definir productos y sus precios
// const productos = [
//     { nombre: 'Loción para piercing', precio: 500 },
//     { nombre: 'Crema para curado de tatuaje', precio: 1500 }
//   ];

//   // Función para mostrar los productos disponibles
//   function mostrarProductos() {
//     alert('Productos disponibles:');
//     for (let i = 0; i < productos.length; i++) {
//       alert(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
//     }
//     alert('Presione "0" para terminar ');
//   }

//   // Función para calcular el total de la compra
//   function calcularTotal(carrito) {
//     let total = 0;
//     for (let i = 0; i < carrito.length; i++) {
//       total += carrito[i].precio;
//     }
//     return total;
//   }

//   // Función principal del carrito de compras
//   function carritoDeCompras() {
//     const carrito = [];
//     let continuar = true;

//     while (continuar) {
//       mostrarProductos();

//       const opcion = parseInt(prompt('Seleccione un producto (Ingrese el número correspondiente):'));

//       if (opcion === 0) {
//         continuar = false;
//       } else if (opcion > 0 && opcion <= productos.length) {
//         const productoSeleccionado = productos[opcion - 1];
//         carrito.push(productoSeleccionado);
//         alert(`"${productoSeleccionado.nombre}" ha sido añadido al carrito.`);
//       } else {
//         alert('Opción inválida. Por favor, seleccione un número válido.');
//       }
//     }

//     document.write(`Total a pagar: $${calcularTotal(carrito)}`);
//   }

//   // Ejecutar el carrito de compras
//   carritoDeCompras();


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
    alert('Carrito de Compras');
    mostrarProductos();
    alert('Seleccione una opción: 1. Para agregar producto al carrito.--  2. Para ver carrito actual.--  3. Para Calcular total de la compra.--  0. Para salir');

    opcion = parseInt(prompt('Ingrese el número de opción deseada:'));

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

