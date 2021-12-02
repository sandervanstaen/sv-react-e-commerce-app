import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;
export const TitleTag = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.25rem;

  & > div {
    padding: 0 0.25rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
  }
`;
