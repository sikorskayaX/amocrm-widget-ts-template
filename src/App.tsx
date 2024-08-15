import React, { ReactNode, useState } from "react";
import './styles/style.scss';
import Feedback from "./components/Feedback";
import Market from './components/Market';
import Navigation from './components/Navigation';

const App = () : ReactNode => {
    const [currentModal, setCurrentModal] = useState('feedback');

    return (
        <>
          <Navigation setCurrentModal={setCurrentModal} />
          {currentModal === 'feedback' && <Feedback />}
          {currentModal === 'market' && <Market />}
        </>
      );
      
}

export default App