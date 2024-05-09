import React, { useState } from 'react';

function Item({ item }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {item.name}
      <button onClick={toggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
