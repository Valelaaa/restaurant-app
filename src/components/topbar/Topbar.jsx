import './topbar.scss';
import React from "react";

export const Topbar = () => {
    return (
        <div className={'top-bar'}>
            <div className={'list'}>
                <ul className="menu">
                    <a href="/menu">
                        <li className="menu-item"><p className={'item-text'}>Меню</p></li>
                    </a>
                    <a href="/delivery">
                        <li className="menu-item"><p className={'item-text'}>Доставка</p></li>
                    </a>
                    <a href={"/payment"}>
                        <li className="menu-item"><p className={'item-text'}>Оплата</p></li>
                    </a>
                </ul>
                <a href="/reservation">
                    <div className="button">Бронь столика</div>
                </a>
            </div>
        </div>
    )
}
