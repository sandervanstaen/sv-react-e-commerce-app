import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 100;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// export const OptionLink = styled(Link)`
//   ${OptionContainerStyles}
// `;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
