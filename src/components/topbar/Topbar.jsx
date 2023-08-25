import './topbar.scss';
import React, {useState} from "react";
import {Reserve} from "../reserve/Reserve.jsx";
import {Link} from "react-router-dom";

export const Topbar = ({updateMenu}) => {

    return (
            <div className={'top-bar'}>
                <div className={"list"}>
                    <ul className="menu">
                        <Link to="/menu">
                            <li className="menu-item"><p className={'item-text'}>Меню</p></li>
                        </Link>
                        <a href="/delivery">
                            <li className="menu-item"><p className={'item-text'}>Доставка</p></li>
                        </a>
                        <a href={"/payment"}>
                            <li className="menu-item"><p className={'item-text'}>Оплата</p></li>
                        </a>
                    </ul>
                        <div className="button" onClick={updateMenu}>Бронь столика</div>
                </div>
            </div>
    )
}
