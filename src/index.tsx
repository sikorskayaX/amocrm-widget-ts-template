import { WidgetSchema } from "shared/types/Widget.types";
import App from "./app/App";
import React from "react";
import ReactDOM from "react-dom/client";

const Widget: WidgetSchema = {
  async render(): Promise<boolean> {
    console.debug("widget works 1!");
    return true;
  },

  async init(): Promise<boolean> {
    return true;
  },

  settings(): boolean {
    const widgetBlock = document.querySelector(
      ".widget-settings__wrap-desc-space",
    ) as HTMLDivElement;
    const modalRoot = ReactDOM.createRoot(widgetBlock);
    modalRoot.render(<App />);
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

  destroy(): void {},
};

export default Widget;
