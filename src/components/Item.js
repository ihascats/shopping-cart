import cart from '../scripts/constructor.cart';
import './styles/Item.css';

export default function Item({ name, price, image, displayClicked }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p data-testid="productName" className="productName">
        {name}
      </p>
      <div>
        <p className="productPrice" data-testid="price">
          {price}$
        </p>
        <button
          onClick={() => {
            displayClicked();
            cart.addToCart(name);
          }}
          data-testid="addToCart"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
