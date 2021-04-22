import React from 'react';
import PropTypes from 'prop-types';

export const CartLineItemProps = {
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

const CartLineItem = ({
  description,
  quantity,
}) => (
  <div>
    {description}
    {quantity}
  </div>
);
CartLineItem.propTypes = CartLineItemProps;

export default CartLineItem;
