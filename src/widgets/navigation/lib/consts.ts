import { ModalKeys } from "app/lib/consts";
import { NavItem } from "../Navigation";

export const navItems: NavItem[] = [
    { value: ModalKeys.Settings, label: 'настройки' },
    { value: ModalKeys.Subscribe, label: 'подписка' },
    { value: ModalKeys.Feedback, label: 'обратная связь' },
    { value: ModalKeys.Market, label: 'REON.Маркет' },
  ];



export { ModalKeys };
  