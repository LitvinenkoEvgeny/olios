import React from 'react';

import MainPageView from './MainPageView';
import '../styles/main page/swiper-settings.scss';

import Search from '../containers/SearchContainer';

const MainPage = () => {
  return (
    <div>
      <MainPageView />
      <Search />
    </div>
  );
};

export default MainPage;