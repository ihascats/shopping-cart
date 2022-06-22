import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from '../Shop.js';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
    console.log(screen.getByTestId('selectElement').value);
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
