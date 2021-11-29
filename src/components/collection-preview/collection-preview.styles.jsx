import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleHeader = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  width: fit-content;

  &:after {
    content: '>';
    opacity: 0;
    top: -3px;
    position: relative;
    transition: all 0.2s ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
