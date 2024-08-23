import React from 'react';
import Gong from 'shared/assets/gong.svg'
import Interface from 'shared/assets/interface.svg';
import Tasks from 'shared/assets/tasks.svg';
import NotificationsTG from 'shared/assets/nots.svg';
import Letters from 'shared/assets/letters.svg';
import Bot from 'shared/assets/bot.svg';
import Plan from 'shared/assets/plan.svg';
import Requests from 'shared/assets/requests.svg';
import Control from 'shared/assets/control.svg';
import Notifications from 'shared/assets/notifs.svg';
import Time from 'shared/assets/time.svg';
import Names from 'shared/assets/names.svg';
import Cities from 'shared/assets/cities.svg';
import Connects from 'shared/assets/connects.svg';
import Tips from 'shared/assets/tips.svg';
import { WidgetItem } from '../ui/market-widgets/MarketWidgets';

export const widgets: WidgetItem[] = [
    { id: 'gong', component: <Gong/>, label: <>ГОНГ</> },
    { id: 'interface', component: <Interface/>, label: <>РАСШИРЕННЫЙ<br/>ИНТЕРФЕЙС</> },
    { id: 'tasks', component: <Tasks/>, label: <>ЗАДАЧИ 2.0</> },
    { id: 'notificationsTG', component: <NotificationsTG/>, label: <>УВЕДОМЛЕНИЯ<br/>В TELEGRAM</> },
    { id: 'letters', component: <Letters/>, label: <>ПИСЬМА 2.0</> },
    { id: 'bot', component: <Bot/>, label: <>Telegram<br/>бот</> },
    { id: 'plan', component: <Plan/>, label: <>ПЛАН<br/>ПРОДАЖ</> },
    { id: 'requests', component: <Requests/>, label: <>РАСПРЕДЕЛЕНИЕ<br/>ЗАЯВОК</> },
    { id: 'control', component: <Control/>, label: <>КОНТРОЛЬ<br/>ЗВОНКОВ И<br/>СООБЩЕНИЙ</> },
    { id: 'notifications', component: <Notifications/>, label: <>УВЕДОМЛЕНИЯ<br/>О СОБЫТИЯХ</> },
];

export const freeWidgets: WidgetItem[] = [
    { id: 'time', component: <Time/>, label: <>ЧАСОВЫЕ<br/>ПОЯСА</> },
    { id: 'names', component: <Names/>, label: <>АВТОНАЗВАНИЯ<br/>СДЕЛОК</> },
    { id: 'cities', component: <Cities/>, label: <>СПРАВОЧНИК<br/>ГОРОДОВ</> },
    { id: 'connects', component: <Connects/>, label: <>СВЯЗАННЫЕ<br/>СДЕЛКИ</> },
    { id: 'tips', component: <Tips/>, label:<>ПОДСКАЗКИ<br/>ДЛЯ ПОЛЕЙ</> },
];

