const CarritoCompra = require("../index");

// El enunciado es el siguiente:

// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

////////////////////////

// constructor(): Inicializa el carrito como un array vacío.

// Debería inicializar el carrito como un array vacío.

describe(".constructor", () => {
  it("Debería inicializar el carrito como un array vacío", () => {
    let miCarrito = new CarritoCompra();
    expect(miCarrito.carrito).toEqual([]);
  });
});

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

//  Se le pasará un producto con nombre , precio y cantidad.
//  Deberá validar que se puedan agregar varios productos del mismo tipo a la vez, no solo uno.
//  Si el producto ya existe en  el carrito, debe sumarle su cantidad actual a la nueva cantidad.

describe(".agregarProducto", () => {
  //Crear una instancia de CarritoCompra antes de ejecutar cada test
  let miCarrito;
  beforeEach(() => {
    miCarrito = new CarritoCompra();
  });

  // Validar que se agrega un producto
  it("Debería agregra al carrito el producto con nombre, precio y cantidad", () => {
    let product = { name: "papas fritas", price: 2.5, quantity: 3 };
    miCarrito.agregarProducto(product);
    expect(miCarrito.carrito[0]).toEqual(product);
  });

  // Validar que se pueden  agregar varios productos a la vez.
  it("Se pueden agregar varios productos del mismo tipo a la vez.", () => {
    let p1 = { name: "papas fritas", price: 2.5, quantity: 3 };
    let p2 = { name: "hamburguesa", price: 6.5, quantity: 4 };
    miCarrito.agregarProducto(p1);
    miCarrito.agregarProducto(p2);
    expect(miCarrito.carrito[0]).toEqual(p1);
    expect(miCarrito.carrito[1]).toEqual(p2);
  });

  //Validar que si el producto ya existe en el carrito, se sume su cantidad actual a la nueva cantidad.
  it("Si el producto ya existe en el carrito, se sume su cantidad actual a la nueva cantidad.", () => {
    miCarrito.agregarProducto({
      name: "papas fritas",
      price: 2.5,
      quantity: 1,
    });
    miCarrito.agregarProducto({
      name: "papas fritas",
      price: 2.5,
      quantity: 1,
    });
    expect(miCarrito.carrito[0].quantity).toBe(2);
  });
});

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

//  Devuelve el monto total de la compra.

describe(".calcularTotal", () => {
  it("Devuelve el monto total de la compra.", () => {
    let miCarrito = new CarritoCompra();
    miCarrito.agregarProducto({
      name: "Papas Fritas",
      price: 2.5,
      quantity: 2,
    });
    miCarrito.agregarProducto({ name: "Hamburguesa", price: 6.5, quantity: 1 });
    expect(miCarrito.calcularTotal()).toBe(11.5);
  });
});

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

// Devuelve el precio total de la compra después de aplicarle el descuento.

describe(".aplicarDescuento", () => {
  it("Aplica un descuento al total de la compra según el porcentaje especificado y devuelve el precio total de la compra después de aplicar el descuento", () => {
    let miCarrito = new CarritoCompra();
    miCarrito.agregarProducto({
      name: "Papas Fritas",
      price: 2.5,
      quantity: 2,
    });
    miCarrito.agregarProducto({ name: "Hamburguesa", price: 6.5, quantity: 1 });
    expect(miCarrito.aplicarDescuento(25)).toBeCloseTo(8.625);
  });
});
