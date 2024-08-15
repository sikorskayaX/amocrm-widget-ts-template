import React, { useState, ReactNode } from "react";
import classNames from 'classnames';

const Navigation = ({ setCurrentModal }): ReactNode => {
    const [currentValue, setCurrentValue] = useState<string | null>('feedback');

    const navItems = [
        { value: 'settings', label: 'настройки' },
        { value: 'subscribe', label: 'подписка' },
        { value: 'feedback', label: 'обратная связь' },
        { value: 'market', label: 'REON.Маркет' },
    ];

    const handleChangeModal = (value: string): void => {
        setCurrentModal(value);
        setCurrentValue(value);
        console.debug(value);
    };

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {navItems.map(item => (
                    <li
                        key={item.value}
                        className={
                            classNames('navigation__item', { 'active' : currentValue === item.value })
                        }
                        onClick={() => handleChangeModal(item.value)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
