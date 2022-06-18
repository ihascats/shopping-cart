import Content from './components/Content';
import Footer from './components/Footer';
import Item from './components/Item';
import Nav from './components/Nav';

export default function Shop() {
  return (
    <div className="container">
      <Nav />
      <Content
        content={
          <Item
            image="https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg"
            name="White Bread"
            price="6.86"
          />
        }
      />
      <Footer />
    </div>
  );
}
