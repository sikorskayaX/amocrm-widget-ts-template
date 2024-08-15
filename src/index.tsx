
import { WidgetSchema } from 'shared/types/Widget.types';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Widget: WidgetSchema = {
  async render(): Promise<boolean> {
    console.debug('widget works !');
    return true;
  },

  async init(): Promise<boolean> {
    return true;
  },

  settings(): boolean {
    console.debug('settings');
    const widgetBlock = document.querySelector('.widget-settings') as HTMLElement;
    const modalRoot = ReactDOM.createRoot(widgetBlock);
    modalRoot.render(
      <App/>
    );
    return true;
  },

  async dpSettings(): Promise<boolean> {
    return true;
  },

  async onSave(): Promise<boolean> {
    return true;
  },

  async initMenuPage(): Promise<boolean> {
    return true;
  },

  destroy(): void {
  },

};

export default Widget;
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
);
*/