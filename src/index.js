import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('mount');

  if (!mount) {
    // eslint-disable-next-line no-console
    console.warn('no mount :(');
    return;
  }

  ReactDOM.render((
    <>
      <App />
    </>
  ), mount);
});

/*

GIVEN a cart with items in it
WHEN adding an item to the cart
THEN the cart shows all items
AND the items show description and quantity

GIVEN a cart with NO items in it
WHEN viewing the cart
THEN a message saying Nothing's in the cart is shown

Cart component (renders all the items)
Item component (displays item as a line item)
Cart page
---
Empty content component
Add item button

*/
