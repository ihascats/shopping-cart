import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Cart from '../Cart';
import Shop from '../Shop';
const RouteSwitch = () => {
  return (
    <BrowserRouter basename="https://ihascats.github.io/shopping-cart">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
