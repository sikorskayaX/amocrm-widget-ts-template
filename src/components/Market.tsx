import React, { ReactNode } from "react";

import Gong from '../assets/gong.svg';
import Interface from '../assets/interface.svg';
import Tasks from '../assets/tasks.svg';
import NotificationsTG from '../assets/nots.svg';
import Letters from '../assets/letters.svg';
import Bot from '../assets/bot.svg';
import Plan from '../assets/plan.svg';
import Requests from '../assets/requests.svg';
import Control from '../assets/control.svg';
import Notifications from '../assets/notifs.svg';
import Time from '../assets/time.svg';
import Names from '../assets/names.svg';
import Cities from '../assets/cities.svg';
import Connects from '../assets/connects.svg';
import Tips from '../assets/tips.svg';
import Arrow from '../assets/arrow.svg';

const widgets = [
    { component: Gong, label: "ГОНГ" },
    { component: Interface, label: "РАСШИРЕННЫЙ ИНТЕРФЕЙС" },
    { component: Tasks, label: "ЗАДАЧИ 2.0" },
    { component: NotificationsTG, label: "УВЕДОМЛЕНИЯ В TELEGRAM" },
    { component: Letters, label: "ПИСЬМА 2.0" },
    { component: Bot, label: "Telegram бот" },
    { component: Plan, label: "ПЛАН ПРОДАЖ" },
    { component: Requests, label: "РАСПРЕДЕЛЕНИЕ ЗАЯВОК" },
    { component: Control, label: "КОНТРОЛЬ ЗВОНКОВ И СООБЩЕНИЙ" },
    { component: Notifications, label: "УВЕДОМЛЕНИЯ О СОБЫТИЯХ" },
];

const freeWidgets = [
    { component: Time, label: "ЧАСОВЫЕ ПОЯСА" },
    { component: Names, label: "АВТОНАЗВАНИЯ СДЕЛОК" },
    { component: Cities, label: "СПРАВОЧНИК ГОРОДОВ" },
    { component: Connects, label: "СВЯЗАННЫЕ СДЕЛКИ" },
    { component: Tips, label: "ПОДСКАЗКИ ДЛЯ ПОЛЕЙ" },
];

const WidgetBlock = ({ Component, label }) => (
    <div className="market__images-block">
        {Component && <Component />}
        <span className="market__images-span">{label}</span>
    </div>
);

const Market = (): ReactNode => {
    return (
        <section className="market">
            <div className="market__block">
                <div className="market__column">
                    <h2 className="market__title-first"></h2>
                    <p className="market__text">Сделай работу в amoCRM быстрее и удобнее!</p>
                    <p className="market__par">Все виджеты и разработки созданы по запросу клиентов и решают реальные проблемы отделов продаж.</p>
                </div>
                <div className="market__images-aside">
                </div>
            </div>

            <h3 className="market__title-little">Платные по подписке</h3>
            <div className="market__images">
                {widgets.map(({ component, label }) => (
                    <WidgetBlock key={label} Component={component} label={label} />
                ))}
            </div>

            <h3 className="market__title-little">Бесплатные для всех</h3>
            <div className="market__images">
                {freeWidgets.map(({ component, label }) => (
                    <WidgetBlock key={label} Component={component} label={label} />
                ))}
            </div>

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
