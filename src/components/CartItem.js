import cart from '../scripts/constructor.cart';
import './styles/CartItem.css';

export default function CartItem({ name, price, image, amount, trigger }) {
  function changeAmount(event) {
    if (event.target.value > 999) {
      event.target.value = 999;
    }
    cart.cartContents.forEach((item) => {
      if (item.name === name) {
        item.amount = event.target.value;
      }
      trigger();
    });
  }
  function removeAmount() {
    cart.cartContents.forEach((item) => {
      if (item.name === name) {
        item.amount = 0;
      }
    });
    trigger();
  }

  return (
    <div className="cartItemWrapper">
      <div className="cartItemLeft">
        <div>
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      <div className="cartItemRight">
        <input
          onChange={changeAmount}
          id="amount"
          type="number"
          min="1"
          max="999"
          defaultValue={amount}
        />
        <p>{(amount * price).toFixed(2)}$</p>
        <button onClick={removeAmount} className="removeFromCart">
          X
        </button>
      </div>
    </div>
  );
}
