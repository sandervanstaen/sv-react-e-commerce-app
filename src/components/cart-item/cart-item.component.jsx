import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  ImageContainer,
  NameTag,
  PriceTag,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameTag>{name}</NameTag>
      <PriceTag>
        {quantity} x € {price}
      </PriceTag>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
