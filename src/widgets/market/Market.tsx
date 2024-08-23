import React from "react";
import MarketWidgets from "./ui/market-widgets/MarketWidgets";

import Arrow from 'shared/assets/Arrow.svg';
import MarketSvg from 'shared/assets/market.svg';
import laptopImg from 'shared/assets/img1.png';

import classes from './Market.module.scss';
import { widgets, freeWidgets } from "./lib/consts";

const Market = () : JSX.Element => {
    return (
        <section className={classes["market"]}>
            <div className={classes["market__block"]}>
                <div className={classes["market__column"]}>
                    <h2 className={classes["market__title-first"]}>
                        Добро пожаловать в <span className={classes["green-span"]}>маркетплейс reon</span>
                    </h2>
                    <p className={classes["market__text"]}>Сделай работу в amoCRM быстрее и удобнее!</p>
                    <p className={classes["market__par-first"]}>Все виджеты и разработки созданы по запросу клиентов и решают реальные проблемы отделов продаж.</p>
                </div>
                <div className={classes["market__images-aside"]}>
                    <img src={laptopImg} className={classes["market__image"]} alt="ноутбук" />
                    <MarketSvg className={classes["market__svg"]} />
                </div>
            </div>
            <MarketWidgets title="Платные по подписке" widgetsList={widgets} />
            <MarketWidgets title="Бесплатные для всех" widgetsList={freeWidgets} />

            <h2 className={classes["market__title-second"]}>вЫ <span className={classes["green-span"]}>ИНТегратор</span>?</h2>
            <p className={classes["market__par-second"]}>Станьте партнером компании REON и получайте партнерское вознаграждение до 50% от стоимости оплаты виджетов вашими клиентами!</p>

            <div className={classes["market__conditions"]}>
                <Arrow className={classes["market__svg-arrow"]} />
                <button className={classes["market__conditions-button"]}>узнать условия</button>
            </div>
        </section>
    );
};

export default Market;

