import stock from './constructor.store-items';

class Cart {
  constructor() {
    this.cartContents = stock.stock.map((value) => {
      const objectClone = value;
      objectClone['amount'] = 0;
      return objectClone;
    });
  }

  addToCart(productName) {
    this.cartContents.forEach((value) => {
      if (value.name.toLowerCase() === productName.toLowerCase()) {
        value.amount = Number(value.amount) + 1;
      }
    });
  }

  totalPrice() {
    let price = 0;
    this.cartContents.forEach((value) => {
      price += Number(value.price) * Number(value.amount);
    });
    return price.toFixed(2);
  }
}

const cart = new Cart();
export default cart;
