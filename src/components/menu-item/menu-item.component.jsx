import React from 'react';

import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  TitleTag,
  SubtitleTag,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage className="background-image" imageUrl={imageUrl} />
    <ContentContainer>
      <TitleTag>{title.toUpperCase()}</TitleTag>
      <SubtitleTag>SHOP NOW</SubtitleTag>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
