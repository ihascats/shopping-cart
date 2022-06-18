import './styles/Item.css';

export default function Item({ image, name, price }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="productName">{name}</p>
      <div>
        <p className="productPrice">{price}$</p>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}
