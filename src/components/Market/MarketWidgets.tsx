import classNames from "classnames";
import React from "react";

export type Widget = {
    component: React.ComponentType; 
    label: string | JSX.Element;
};

type MarketWidgetsProps = {
    title: string;
    widgetsList: Widget[];
    className: string
};

const MarketWidgets = ({ title, widgetsList, className}: MarketWidgetsProps): JSX.Element => {
    const titleClassnames = classNames("market__title-little ", className);
    return(
        <>
            <h3 className={titleClassnames}>{title}</h3>
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
}
    

export default MarketWidgets