import React from "react";
import {Topbar} from '../topbar/Topbar.jsx'
import './topcontent.scss'
import {Reserve} from "../reserve/Reserve.jsx";

export const TopContent = ({reserveMenu}) => {
    return (
        <div className={'content'}>
            <Topbar updateMenu={reserveMenu}/>
            <div className={"top-text"}>
                <p className={'text'}>
                    Видовой ресторан L'Étoile Dorée
                    <br/>
                    в Центре Кишинева
                </p>
            </div>
        </div>
    )
}
