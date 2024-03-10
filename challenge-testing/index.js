const Product = require("./modules/Product.js");

class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto({ name, price, quantity }) {
    const index = this.carrito.findIndex((product) => product.name === name);
    if (index >= 0) {
      this.carrito[index].quantity = this.carrito[index].quantity + quantity;
    } else {
      this.carrito.push(new Product(name, price, quantity));
    }
  }

  calcularTotal() {
    let suma = 0;
    for (let i = 0; i < this.carrito.length; i++) {
      //console.log(this.carrito[i]);
      suma += this.carrito[i].price * this.carrito[i].quantity;
    }
    return suma;
  }

  aplicarDescuento(descuento) {
    const descuentoPorciento = descuento / 100;
    let totalSinDescuento =  this.calcularTotal();
    //console.log(totalSinDescuento);
    let totalConDescuento = totalSinDescuento - totalSinDescuento * descuentoPorciento;
    //console.log(totalConDescuento);
    return totalConDescuento;
  }

}
module.exports = CarritoCompra;
