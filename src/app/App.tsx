import React, { useState } from "react";
import 'shared/styles/layout/layout.scss';
import Feedback from "../widgets/feedback/feedback/Feedback";
import Market from '../widgets/market/market/Market';
import Navigation from '../widgets/navigation/Navigation';

export type ModalKeys = 'feedback' | 'market' | 'settings' | 'subscribe'; 

const componentsMap = {
  feedback: <Feedback/>,
  market: <Market/>,
  settings: <Feedback/>,
  subscribe: <Market/>
};

const App = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useState<ModalKeys>('feedback');

  return (
    <>
      <Navigation 
        currentModal={currentModal}
        setCurrentModal={setCurrentModal} 
      />
      {componentsMap[currentModal]}
    </>
  )
}

export default App;

