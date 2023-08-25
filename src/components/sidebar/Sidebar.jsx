import React, {useState} from "react";
import './sidebar.scss'
import logo from '../../../public/images/logo.png'
import vector from '../../../public/images/vector.png'
import youtube from '../../../public/images/youtube-logo.png'
import vk from '../../../public/images/vk-logo.png'
import telegram from '../../../public/images/telegram-logo.png'
import {OpenMenu} from "../open-menu/OpenMenu.jsx";
import {Link} from "react-router-dom";
export const SideBar = ({reserveMenu}) => {
    const [menuClass, setMenuClass] = useState("open-menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () =>{
        if (!isMenuClicked){
            setMenuClass("open-menu visible")
            setIsMenuClicked(true)
        }
        else {
            setMenuClass("open-menu hidden")
            setIsMenuClicked(false)
        }
    }

    return (
        <div className="sidebar-container">
            <OpenMenu menu_status={menuClass} updateMenu={updateMenu} reserveMenu={reserveMenu}/>
            <div className={'sidebar'}>

                <div className="upper-side">
                    <div className="logo">
                        <Link to={"/"}>
                            <img className={'logo-img'} src={logo}/>
                        </Link>
                    </div>
                    <div className="menu-left">
                        <div className="vector-container" onClick={updateMenu}>
                            <img src={vector} alt="vector-menu" className="vector"/>
                        </div>
                    </div>
                </div>
                <div className="bottom-side">
                    <div className="social-media">
                        <ul className="media">
                            <li className={'media-item'}>
                                <a href="https://www.instagram.com/karinast.is/" target={'_blank'}>
                                    <img src={youtube} alt="youtube" className="soc-logo"/>
                                </a>
                            </li>
                            <li className={'media-item'}>
                                <a href="https://vk.com/kstelea" target={'_blank'}>
                                    <img src={vk} alt="vk" className="soc-logo"/>
                                </a>
                            </li>
                            <li className={'media-item'}>
                                <a href="https://t.me/krin_st" target={'_blank'}>
                                    <img src={telegram} alt="telegram" className="soc-logo"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
