import { Routes, Route, HashRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../Cart';
import Shop from '../Shop';
const RouteSwitch = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<App />} />
        <Route path={process.env.PUBLIC_URL + '/shop'} element={<Shop />} />
        <Route path={process.env.PUBLIC_URL + '/cart'} element={<Cart />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
