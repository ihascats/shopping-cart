import { useState } from 'react';
import CartItem from './components/CartItem';
import Content from './components/Content';
import Footer from './components/Footer';
import Nav from './components/Nav';
import cart from './scripts/constructor.cart';

export default function Cart() {
  const items = [];
  const [trigger, setTrigger] = useState(true);

  function fire() {
    setTrigger(!trigger);
  }

  cart.cartContents.forEach((item) => {
    if (item.amount > 0) {
      items.push(
        <CartItem
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.url}
          amount={item.amount}
          trigger={fire}
        />,
      );
    }
  });

  const something = (
    <div className="cartContainer">
      <div className="cartProducts">{items}</div>
      <div className="checkout">
        <p>CHECKOUT:</p>
        <button className="checkoutButton">TOTAL: {cart.totalPrice()}$</button>
      </div>
    </div>
  );

  return (
    <div className="container">
      <Nav />
      <Content content={something} />
      <Footer />
    </div>
  );
}
