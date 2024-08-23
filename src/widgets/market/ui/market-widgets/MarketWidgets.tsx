import React, { ReactNode } from "react";
import classes from "./MarketWidgets.module.scss";

export type WidgetItem = {
  id: string;
  component: ReactNode;
  label: ReactNode;
};

type MarketWidgetsProps = {
  title: string;
  widgetsList: WidgetItem[];
};

const MarketWidgets = ({
  title,
  widgetsList,
}: MarketWidgetsProps): JSX.Element => (
  <>
    <h3 className={classes["market__title-little"]}>{title}</h3>
    <div className={classes["market__images"]}>
      {widgetsList.map(({ id, component, label }) => (
        <div className={classes["market__images-block"]} key={id}>
          {component}
          <span className={classes["market__images-span"]}>{label}</span>
        </div>
      ))}
    </div>
  </>
);

export default MarketWidgets;
