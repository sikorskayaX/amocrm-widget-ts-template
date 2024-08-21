import React from 'react';
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
import { WidgetItem } from './Market/MarketWidgets';


export const widgets: WidgetItem[] = [
    { component: Gong, label: <>ГОНГ</> },
    { component: Interface, label: <>РАСШИРЕННЫЙ<br/>ИНТЕРФЕЙС</> },
    { component: Tasks, label: <>ЗАДАЧИ 2.0</> },
    { component: NotificationsTG, label: <>УВЕДОМЛЕНИЯ<br/>В TELEGRAM</> },
    { component: Letters, label: <>ПИСЬМА 2.0</> },
    { component: Bot, label: <>Telegram<br/>бот</> },
    { component: Plan, label: <>ПЛАН<br/>ПРОДАЖ</> },
    { component: Requests, label: <>РАСПРЕДЕЛЕНИЕ<br/>ЗАЯВОК</> },
    { component: Control, label: <>КОНТРОЛЬ<br/>ЗВОНКОВ И<br/>СООБЩЕНИЙ</> },
    { component: Notifications, label: <>УВЕДОМЛЕНИЯ<br/>О СОБЫТИЯХ</> },
];

export const freeWidgets: WidgetItem[] = [
    { component: Time, label: <>ЧАСОВЫЕ<br/>ПОЯСА</> },
    { component: Names, label: <>АВТОНАЗВАНИЯ<br/>СДЕЛОК</> },
    { component: Cities, label: <>СПРАВОЧНИК<br/>ГОРОДОВ</> },
    { component: Connects, label: <>СВЯЗАННЫЕ<br/>СДЕЛКИ</> },
    { component: Tips, label:<>ПОДСКАЗКИ<br/>ДЛЯ ПОЛЕЙ</> },
];


export const widgetOptions = {
    'Распределение заявок': "Распределение заявок",
    "Распределение": "Распределение",
    "Заявок": "Заявок",
};

export const requestOptions = {
    'Добавить новый функционал': 'Добавить новый функционал',
    'Добавить': 'Добавить',
    'Новый функционал': 'Новый функционал'
};

export const politikaLink:string = "https://reon.pro/politika";
export const marketLink:string = "https://reon.pro/marketplace";
