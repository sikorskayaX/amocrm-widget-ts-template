import React, { useState } from "react";
import 'shared/styles/layout/layout.scss';
import Feedback from "../widgets/feedback/Feedback";
import Market from '../widgets/market/Market';
import Navigation from '../widgets/navigation/Navigation';
import { ModalKeys } from "./lib/consts";

const componentsMap = {
  feedback: <Feedback/>,
  market: <Market/>,
  settings: <Feedback/>,
  subscribe: <Market/>
};

const App = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useState<ModalKeys>(ModalKeys.Feedback);

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

