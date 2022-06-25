import { Link } from 'react-router-dom';
import './styles/Nav.css';

export default function Nav() {
  return (
    <nav>
      <Link to={process.env.PUBLIC_URL + '/'}>
        <h1>BREAD</h1>
      </Link>
      <ul>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <li>
            <button>HOME</button>
          </li>
        </Link>
        <Link to={process.env.PUBLIC_URL + '/shop'}>
          <li>
            <button>SHOP</button>
          </li>
        </Link>
        <Link to={process.env.PUBLIC_URL + '/cart'}>
          <li>
            <button>CART</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
