import { useEffect, useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Item from './components/Item';
import Nav from './components/Nav';
import SuccessNotification from './components/SuccessNotification';
import stock from './scripts/constructor.store-items';

export default function Shop(props) {
  const [time, setTime] = useState();
  const [elements, setElements] = useState([]);

  const descendingStock = [...stock.stock.sort((a, b) => b.price - a.price)];
  const ascendingStock = [...stock.stock.sort((a, b) => a.price - b.price)];

  const [sortedStock, setSortedStock] = useState(descendingStock);

  const stockDisplay = sortedStock.map((item, index) => {
    return (
      <Item
        key={item.name}
        name={item.name}
        price={item.price}
        image={item.url}
        displayClicked={updateNotification}
      />
    );
  });

  function updateNotification() {
    if (time) {
      clearTimeout(time);
    }
    setTime(
      setTimeout(() => {
        setElements([]);
      }, 3000),
    );
    const list = [...elements];
    list.push(<SuccessNotification key={list.length} />);
    setElements(list);
  }

  function changeOrder(event) {
    const value = event.target.value;
    if (value === 'ascending') {
      setSortedStock(ascendingStock);
    }
    if (value === 'descending') {
      setSortedStock(descendingStock);
    }
  }

  const itemDisplay = (
    <div className="shopDiv">
      <div className="sortBy">
        <p>Sort By:</p>
        <select
          onChange={changeOrder}
          data-testid="selectElement"
          name="order"
          id="order"
        >
          <option data-testid="desc" value="descending">
            desc &#8595;
          </option>
          <option data-testid="asc" value="ascending">
            asc &#8593;
          </option>
        </select>
      </div>
      <div className="products">{stockDisplay}</div>
    </div>
  );

  return (
    <div className="container">
      <Nav />
      <Content content={itemDisplay} />
      {elements ? elements : null}
      <Footer />
    </div>
  );
}
