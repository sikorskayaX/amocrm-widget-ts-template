import React, { ReactNode } from "react";

type MarketWidgetsProps = {
    title:string,
    widgetsList: any
}

const MarketWidgets = ({ title, widgetsList }:MarketWidgetsProps) : JSX.Element => (
    <section>
        <h3 className="market__title-little">{title}</h3>
        <div className="market__images">
            {widgetsList.map(({ component: Component, label }) => (
                <div className="market__images-block" key={label}>
                    {Component && <Component />}
                    <span className="market__images-span">{label}</span>
                </div>
            ))}
        </div>
    </section>
);

export default MarketWidgets