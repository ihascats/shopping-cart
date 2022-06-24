import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../Cart';
import Shop from '../Shop';
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </BrowserRouter>
  );
};

export default RouteSwitch;
