import React from 'react';

import Cart from '../Cart';

const items = [
  { description: 'sock', quantity: 17 },
  { description: 'shoe', quantity: 5 },
  { description: 'shirt', quantity: 3 },
];
const App = () => (
  <Cart
    items={items}
  />
);

export default App;
