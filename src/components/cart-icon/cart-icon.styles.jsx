import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShoppingIcon = styled.i`
  font-size: 25px;
`;
export const ItemCountContainer = styled.div`
  position: absolute;
  background-color: orange;
  right: -5px;
  top: -5px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
`;
