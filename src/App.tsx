import React, { useState } from "react";
import './styles/style.scss';
import Feedback from "./components/Feedback/Feedback";
import Market from './components/Market/Market';
import Navigation from './components/Navigation';

export type ModalKeys = 'feedback' | 'market' | 'settings' | 'subscribe'; 

const componentsMap = {
  feedback: Feedback,
  market: Market,
  settings: Feedback,
  subscribe: Market
};

const App = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useState<ModalKeys>('feedback');
  const CurrentComponent = componentsMap[currentModal];

  return (
    <>
      <Navigation 
        currentModal = {currentModal}
        setCurrentModal={setCurrentModal} 
      />
      {<CurrentComponent />}
    </>
  )
}

export default App;
