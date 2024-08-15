import React, { ReactNode } from "react";

const Navigation = ({ setCurrentModal }): ReactNode => {
    const navItems = [
        { value: 'settings', label: 'настройки' },
        { value: 'subscribe', label: 'подписка' },
        { value: 'feedback', label: 'обратная связь' },
        { value: 'market', label: 'REON.Маркет' },
    ];

    const handleChangeModal = (value: string): void => {
        setCurrentModal(value);
        console.debug(value);
    };

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {navItems.map(item => (
                    <li
                        key={item.value}
                        className="navigation__item"
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