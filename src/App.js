import './App.css';
import './Container.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Content from './components/Content';

export default function App() {
  return (
    <div className="container">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}
