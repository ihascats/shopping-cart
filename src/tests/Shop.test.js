import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Shop from '../Shop.js';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import cart from '../scripts/constructor.cart.js';

describe('Store Sorting', () => {
  it('Store items are sorted in descending order at first', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>,
    );
    const prices = screen
      .getAllByTestId('price')
      .map((value) => Number(value.textContent.slice(0, -1)));
    const descendingPrices = [...prices];
    descendingPrices.sort((a, b) => {
      return b - a;
    });
    expect(prices).toStrictEqual(descendingPrices);
  });

  it('Changing the select option changes the order of items displayed', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>,
    );
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByTestId('selectElement'),
      // Find and select the Ireland option, like a real user would.
      screen.getByTestId('asc'),
    );
    const prices = screen
      .getAllByTestId('price')
      .map((value) => Number(value.textContent.slice(0, -1)));

    const ascendingPrices = [...prices];
    ascendingPrices.sort((a, b) => {
      return a - b;
    });

    expect(prices).toStrictEqual(ascendingPrices);
  });
});

//
describe('Cart', () => {
  it('Pressing add to cart button shows a notification', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>,
    );
    const button = screen.getAllByTestId('addToCart')[0];
    fireEvent.click(button);
    expect(screen.getByTestId('notification').textContent).toBe(
      'Successfully Added To The Cart!',
    );
  });
  it('Item has been added to the cart', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>,
    );
    // Button is pressed in the example above
    // const button = screen.getAllByTestId('addToCart')[0];
    // fireEvent.click(button);

    // eslint-disable-next-line array-callback-return
    let content = cart.cartContents.map((value) => {
      if (value.amount === 1) {
        return value.name;
      }
    });
    content.forEach((value) => {
      if (value) {
        content = value;
        return;
      }
    });
    expect(content).toBe(screen.getAllByTestId('productName')[0].textContent);
  });
});
