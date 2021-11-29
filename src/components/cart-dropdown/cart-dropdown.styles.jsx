import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  max-height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const EmptyMessageTag = styled.span`
  margin: 24px auto;
`;

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
