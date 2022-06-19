import Content from './components/Content';
import Footer from './components/Footer';
import Item from './components/Item';
import Nav from './components/Nav';

export default function Shop() {
  const itemDisplay = (
    <div className="shopDiv">
      <div className="sortBy">
        <p>Sort By:</p>
        <select name="order" id="order">
          <option value="descending">desc &#8595;</option>
          <option value="ascending">asc &#8593;</option>
        </select>
      </div>
      <div className="products">{/* products here */}</div>
    </div>
  );

  return (
    <div className="container">
      <Nav />
      <Content content={itemDisplay} />
      <Footer />
    </div>
  );
}
