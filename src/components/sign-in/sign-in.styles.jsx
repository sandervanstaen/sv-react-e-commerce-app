import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const TitleTag = styled.h2`
  margin: 10px 0;
`;

export const SignInButton = styled(CustomButton)``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
