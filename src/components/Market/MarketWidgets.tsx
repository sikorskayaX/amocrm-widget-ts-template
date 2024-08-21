import React, { ReactNode } from "react";

export type WidgetItem = {
    component: ReactNode; 
    label: ReactNode;
};

type MarketWidgetsProps = {
    title: string;
    widgetsList: WidgetItem[];
};

const MarketWidgets = ({ title, widgetsList }: MarketWidgetsProps): JSX.Element => (
    <>
        <h3 className="market__title-little">{title}</h3>
        <div className="market__images">
            {widgetsList.map(({ component: Component, label }, index) => (
                <div className="market__images-block" key={index}>
                    <Component />
                    <span className="market__images-span">{label}</span>
                </div>
            ))}
        </div>
    </>
);

export default MarketWidgets