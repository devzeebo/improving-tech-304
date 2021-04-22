/**
 * @jest-environment jsdom
 */
import test from 'jest-gwt';
import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Cart from './Cart';

describe('components > cart', () => {
  test('add item to cart', {
    given: {
      cart_with_items,
      new_item,
    },
    when: {
      rendering_cart,
      adding_new_item_to_cart,
    },
    then: {
      cart_shows_old_items,
      cart_shows_new_item,
    },
  });
});

function cart_with_items() {
  this.cart = {
    items: [
      { description: 'sock', quantity: 1 },
      { description: 'shoe', quantity: 2 },
      { description: 'shirt', quantity: 3 },
    ],
  };
}

function new_item() {
  this.new_item = {
    description: 'pants',
    quantity: 500,
  };
}

function rendering_cart() {
  const { rerender } = render((
    <Cart items={this.cart.items} />
  ));

  this.rerender = rerender;
}

function adding_new_item_to_cart() {
  this.rerender((
    <Cart items={[
      ...this.cart.items,
      this.new_item,
    ]}
    />
  ));
}

function cart_shows_old_items() {
  expect(screen.getByText('sock1')).toBeVisible();
  expect(screen.getByText('shoe2')).toBeVisible();
  expect(screen.getByText('shirt3')).toBeVisible();
}

function cart_shows_new_item() {
  expect(screen.getByText('pants500')).toBeVisible();
}
