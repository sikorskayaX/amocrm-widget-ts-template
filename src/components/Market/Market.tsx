import React from "react";
import MarketWidgets from "./MarketWidgets";

import Arrow from '/src/assets/Arrow.svg';
import laptopImg from '/src/assets/Arrow.svg';
import { widgets, freeWidgets } from "../mocks";


const Market = () => {
    return (
        <section className="market">
            <div className="market__block">
                <div className="market__column">
                    <h2 className="market__title-first"></h2>
                    <p className="market__text">Сделай работу в amoCRM быстрее и удобнее!</p>
                    <p className="market__par">Все виджеты и разработки созданы по запросу клиентов и решают реальные проблемы отделов продаж.</p>
                </div>
                <div className="market__images-aside">
                    <img src={laptopImg} alt="laptop" />
                </div>
            </div>
            <MarketWidgets title="Платные по подписке" widgetsList={widgets} />
            <MarketWidgets title="Бесплатные для всех" widgetsList={freeWidgets} />

            <h2 className="market__title-second"></h2>
            <p className="market__par">Станьте партнером компании REON и получайте партнерское вознаграждение до 50% от стоимости оплаты виджетов вашими клиентами!</p>
            
            <div className="market__conditions">
                <Arrow className="market__svg"/>
                <button className="market__conditions-button">узнать условия</button>
            </div>
        </section>
    );
};

export default Market;

