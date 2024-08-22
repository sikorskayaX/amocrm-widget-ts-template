import React from "react";
import classNames from 'classnames';
import { ModalKeys } from "@/app/App";
import classes from './Navigation.module.scss'

type NavigationProps = {
    currentModal: string;
    setCurrentModal: React.Dispatch<React.SetStateAction<ModalKeys>>;
}

type NavItem = {
    value: ModalKeys;
    label: string;
  };

const Navigation = ({ currentModal, setCurrentModal }: NavigationProps) => {
    const navItems: NavItem[] = [
        { value: 'settings', label: 'настройки' },
        { value: 'subscribe', label: 'подписка' },
        { value: 'feedback', label: 'обратная связь' },
        { value: 'market', label: 'REON.Маркет' },
    ];

    return (
        <nav className={classes["navigation"]}>
            <ul className={classes["navigation__list"]}>
                {navItems.map(({ value, label }) => (
                    <li
                        key={value}
                        className={classNames(classes['navigation__item'], { [classes.active]: currentModal === value })}
                        onClick={() => setCurrentModal(value)}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

