import React from "react";

export type Widget = {
    component: React.ComponentType; 
    label: string | JSX.Element;
};

type MarketWidgetsProps = {
    title: string;
    widgetsList: Widget[];
};

const MarketWidgets = ({ title, widgetsList }: MarketWidgetsProps): JSX.Element => (
    <>
        <h3 className="market__title-little">{title}</h3>
        <div className="market__images">
            {widgetsList.map(({ component: Component, label }, index) => (
                <div className="market__images-block" key={index}>
                    {Component && <Component />}
                    <span className="market__images-span">{label}</span>
                </div>
            ))}
        </div>
    </>
);

export default MarketWidgets