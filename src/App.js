import './App.css';
import './Container.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Content from './components/Content';
import { Link } from 'react-router-dom';

export default function App() {
  const introduction = (
    <div className="introduction">
      <h1>BREAD</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link to={process.env.PUBLIC_URL + '/shop'}>
        <button>ORDER NOW!</button>
      </Link>
    </div>
  );

  return (
    <div className="container">
      <Nav />
      <Content content={introduction} />
      <Footer />
    </div>
  );
}
