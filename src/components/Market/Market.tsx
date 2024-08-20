import React from "react";
import MarketWidgets from "./MarketWidgets";

import Arrow from '/src/assets/Arrow.svg';
import MarketSvg from '/src/assets/market.svg';
import laptopImg from '/src/assets/img1.png';
import { widgets, freeWidgets } from "../mocks";


const Market = () => {
    return (
        <section className="market">
            <div className="market__block">
                <div className="market__column">
                    <h2 className="market__title-first">Добро пожаловать в <span className="green-span">маркетплейс reon</span></h2>
                    <p className="market__text">Сделай работу в amoCRM быстрее и удобнее!</p>
                    <p className="market__par-first">Все виджеты и разработки созданы по запросу клиентов и решают реальные проблемы отделов продаж.</p>
                </div>
                <div className="market__images-aside">
                    <img src={laptopImg} className="market__image" alt="laptop" />
                    <MarketSvg className="market__svg"/>
                </div>
            </div>
            <MarketWidgets title="Платные по подписке" widgetsList={widgets} className = 'top-40'/>
            <MarketWidgets title="Бесплатные для всех" widgetsList={freeWidgets} className = 'top-30'/>

            <h2 className="market__title-second">вЫ <span className="green-span">ИНТегратор</span>?</h2>
            <p className="market__par-second">Станьте партнером компании REON и получайте партнерское вознаграждение до 50% от стоимости оплаты виджетов вашими клиентами!</p>
            
            <div className="market__conditions">
                <Arrow className="market__svg-arrow"/>
                <button className="market__conditions-button">узнать условия</button>
            </div>
        </section>
    );
};

export default Market;

