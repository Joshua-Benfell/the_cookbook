import React from 'react';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import TitlePage from './TitlePage';
import "./styles/main.scss"

function App() {
  return (
    <div className="cookbook">
      <TopNavigation />
      <TitlePage />
      <BottomNavigation backLink='' forwardLink='#' />
    </div>
  );
}

export default App;
