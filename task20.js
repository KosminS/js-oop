class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(name, price) {
    this.products.push({ name, price });
  }

  removeProduct(name) {
    this.products = this.products.filter(product => product.name !== name);
  }

  getTotal() {
    let total = 0;
    this.products.forEach(product => {
      total += product.price;
    });
    return total;
  }

  showProducts() {
    console.log(this.products);
  }
}

const cart = new ShoppingCart();
cart.addProduct("Ноутбук", 25000);
cart.addProduct("Мишка", 800);
cart.showProducts();
console.log(cart.getTotal());
cart.removeProduct("Мишка");
cart.showProducts();