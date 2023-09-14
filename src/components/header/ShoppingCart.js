import React from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart() {
  return (
    <div className='cart'>
          <FontAwesomeIcon icon={faShoppingCart}  className='icon-cart'/>
    </div>
  );
}
;