import { Link } from 'react-router-dom';
import './styles/Nav.css';

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>BREAD</h1>
      </Link>
      <ul>
        <Link to="/">
          <li>
            <button>HOME</button>
          </li>
        </Link>
        <Link to="/shop">
          <li>
            <button>SHOP</button>
          </li>
        </Link>
        <Link to="/cart">
          <li>
            <button>CART</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
