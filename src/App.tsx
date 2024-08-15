import React, { ReactNode, useState } from "react";
import './styles/style.scss';
import Feedback from "./components/Feedback";
import Market from './components/Market';
import Navigation from './components/Navigation';
import { Select } from "reon-ui-lib";

const App = () : ReactNode => {
    const [currentModal, setCurrentModal] = useState('feedback');

    return (
        <>
        <Select
  ariaIds={{
    comboboxId: 'combobox5',
    labelId: 'label5',
    listboxId: 'listbox5',
    optionIdPrefix: 'option'
  }}
  label="Название"
  options={{
    '10asdasdsa': '10',
    '26asdasdsa': '26',
    '62asdasdsa': 'df6',
    '63asdasdsa': '6sdf',
    '64asdasdsa': 'sdf6',
    '65asdasdsa': 'sdf6',
    '66asdasdsa': '6sdf',
    asd0: '0xcvzxvxzc',
    asda8: '8zxcvzxvzxv',
    asdasd5: '5xcvzv',
    asdasd9: '9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz9zxvzxcvzxvz',
    asdsa7: '7xcvzxvzx',
    first: <>Первый</>,
    fourth: 'fourth',
    second: <>Второй</>,
    test: 'test',
    third: 'third'
  }}
  placeholder="Выберите название"
  selectionSettings={{
    multiple: false,
    onChange: function iu(){},
    value: 'test'
  }}
  variant="underlined"
/>
          <Navigation setCurrentModal={setCurrentModal} />
          {currentModal === 'feedback' && <Feedback />}
          {currentModal === 'market' && <Market />}
        </>
      );
      
}

export default App