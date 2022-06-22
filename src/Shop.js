import { useEffect, useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Item from './components/Item';
import Nav from './components/Nav';
import SuccessNotification from './components/SuccessNotification';
import stock from './scripts/constructor.store-items';

export default function Shop(props) {
  const [notification, setNotification] = useState(false);
  const [time, setTime] = useState();

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

  async function updateNotification() {
    if (notification) {
      setNotification(false);
      clearTimeout(time);
      setTime();
    }

    if (!notification) {
      setTime(
        setTimeout(() => {
          setNotification(false);
        }, 3000),
      );
      setNotification(true);
    }
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
      {notification ? <SuccessNotification /> : null}
      <Footer />
    </div>
  );
}
