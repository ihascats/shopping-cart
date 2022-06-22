import './styles/Item.css';

export default function Item({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="productName">{name}</p>
      <div>
        <p className="productPrice" data-testid="price">
          {price}$
        </p>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}
