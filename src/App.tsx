import React, { useState } from "react";
import './styles/style.scss';
import Feedback from "./components/Feedback/Feedback";
import Market from './components/Market/Market';
import Navigation from './components/Navigation';

const componentsMap = {
  feedback: Feedback,
  market: Market,
};

const App = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useState('feedback');
  const CurrentComponent = componentsMap[currentModal];

  return (
    <>
      <Navigation 
        currentModal = {currentModal}
        setCurrentModal={setCurrentModal} 
      />
      {CurrentComponent && <CurrentComponent />}
    </>
  )
}

export default App;
