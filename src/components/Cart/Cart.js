import React from 'react';
import PropTypes from 'prop-types';

import {
  map,
  flow,
  sortBy,
} from 'lodash/fp';

import CartLineItem, {
  CartLineItemProps,
} from '../CartLineItem';

const Cart = ({ items }) => (
  <div>
    {flow(
      sortBy('quantity'),
      map(
        ({
          description,
          quantity,
        }) => (
          <CartLineItem
            key={description}
            description={description}
            quantity={quantity}
          />
        ),
      ),
    )(items)}
  </div>
);
Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(CartLineItemProps)).isRequired,
};

export default Cart;

/*
const type Node =
  string |
  number |
  function |
  boolean |
  React component |
  Array<Node>
*/
