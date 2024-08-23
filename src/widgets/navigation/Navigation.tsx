import React from "react";
import classNames from 'classnames';
import classes from './Navigation.module.scss'
import { ModalKeys, navItems } from "./lib/consts";

type NavigationProps = {
    currentModal: string;
    setCurrentModal: React.Dispatch<React.SetStateAction<ModalKeys>>;
}

export type NavItem = {
    value: ModalKeys;
    label: string;
  };

const Navigation = ({ currentModal, setCurrentModal }: NavigationProps) => {
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

