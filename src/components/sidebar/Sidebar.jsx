import React from "react";
import './sidebar.scss'
import logo from '../../../public/images/logo.png'
import vector from '../../../public/images/vector.png'
import youtube from '../../../public/images/youtube-logo.png'
import vk from '../../../public/images/vk-logo.png'
import telegram from '../../../public/images/telegram-logo.png'

export const SideBar = () => {
    return (
        <div className={'sidebar'}>

            <div className="upper-side">
                <div className="logo">
                    <a href="/home">
                        <img className={'logo-img'} src={logo}/>
                    </a>
                </div>
                <div className="menu-left">
                    <img src={vector} alt="vector-menu" className="vector"/>
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
    )
}
