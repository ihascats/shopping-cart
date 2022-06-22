import bagel from '../components/images/bagel.jpg';
import baguetteEpi from '../components/images/baguette-epi.jpg';
import batard from '../components/images/batard.jpg';
import croissant from '../components/images/croissant.png';
import ficelle from '../components/images/ficelle.jpg';
import fougasse from '../components/images/fougasse.jpg';
import navettes from '../components/images/navettes-de-marseille.jpg';
import painAuChocolat from '../components/images/pain-au-chocolat.jpg';
import pistolet from '../components/images/pistolet.jpg';

class StoreStock {
  constructor() {
    this.stock = [];
  }

  addItemToStore(name, price, url) {
    let item = {
      name: name,
      price: price,
      url: url,
    };
    this.stock.push(item);
  }
}

const stock = new StoreStock();

stock.addItemToStore('Bagel', 1.99, bagel);
stock.addItemToStore('Epi Baguette', 3.89, baguetteEpi);
stock.addItemToStore('Batard', 0.99, batard);
stock.addItemToStore('Croissant', 1.59, croissant);
stock.addItemToStore('Ficelle', 4.85, ficelle);
stock.addItemToStore('Fougasse', 4.85, fougasse);
stock.addItemToStore('Navettes', 6.24, navettes);
stock.addItemToStore('Pain Au Chocolat', 9.99, painAuChocolat);
stock.addItemToStore('Pistolet', 7.12, pistolet);

export default stock;
