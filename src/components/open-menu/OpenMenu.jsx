import './open-menu.scss'
import logo from "../../../public/images/logo.png";
import React from "react";
import close from '../../../public/images/close.png';
import youtube from '../../../public/images/youtube-logo.png';
import telegram from '../../../public/images/telegram-logo.png';
import vk from "../../../public/images/vk-logo.png";
import {Link} from "react-router-dom";

export const OpenMenu = ({menu_status,updateMenu,reserveMenu}) => {
    function updateAndReserve(){
        updateMenu();
        reserveMenu();
    }
    return (
        <div className={menu_status}>
            <div className="open-menu-container">
                <div className="open-menu-pics">
                    <div className="open-menu-logo">
                        <Link to={"/"} >
                            <img className={'logo-img'} src={logo} alt={"home"}/>
                        </Link>
                    </div>
                    <div className="return-back" onClick={updateMenu}>
                        <img className={'close-img'} src={close} alt="close menu"/>
                    </div>
                </div>
                <div className="open-menu-options">
                    <div className="open-menu-option">Меню</div>
                    <div className="open-menu-option">Доставка</div>
                    <div className="open-menu-option">Оплата</div>
                </div>
                <div className="button" onClick={updateAndReserve}>Бронь столика</div>
                <div className="social-networks">
                    <div className="media-item">
                        <a href="https://www.instagram.com/karinast.is/" target={'_blank'}>
                            <img src={youtube} alt="youtube" className="soc-logo"/>
                        </a>
                    </div>
                    <div className="media-item">
                        <a href="https://vk.com/kstelea" target={'_blank'}>
                            <img src={vk} alt="vk" className="soc-logo"/>
                        </a>
                    </div>
                    <div className="media-item">
                        <a href="https://t.me/krin_st" target={'_blank'}>
                            <img src={telegram} alt="telegram" className="soc-logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
