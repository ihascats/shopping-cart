import stock from './constructor.store-items';

class Cart {
  constructor() {
    this.cartContents = [];
  }

  addToCart(productName) {
    stock.stock.forEach((element) => {
      if (element.name.toLowerCase() === productName.toLowerCase()) {
        this.cartContents.push(element);
      }
    });
  }
}

const cart = new Cart();
export default cart;
