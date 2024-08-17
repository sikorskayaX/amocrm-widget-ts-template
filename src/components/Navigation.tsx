import React from "react";
import classNames from 'classnames';

const Navigation = ({ currentModal, setCurrentModal }): JSX.Element => {
    const navItems = [
        { value: 'settings', label: 'настройки' },
        { value: 'subscribe', label: 'подписка' },
        { value: 'feedback', label: 'обратная связь' },
        { value: 'market', label: 'REON.Маркет' },
    ];

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {navItems.map(({ value, label }) => (
                    <li
                        key={value}
                        className={classNames('navigation__item', { 'active': currentModal === value })}
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

