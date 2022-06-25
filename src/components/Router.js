import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Cart from '../Cart';
import Shop from '../Shop';
const RouteSwitch = () => {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<App />} />
        <Route path={process.env.PUBLIC_URL + '/shop'} element={<Shop />} />
        <Route path={process.env.PUBLIC_URL + '/cart'} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
