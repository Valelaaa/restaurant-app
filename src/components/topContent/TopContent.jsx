import React from "react";
import {Topbar} from '../topbar/Topbar.jsx'
import './topcontent.scss'

export const TopContent = () => {
    return (
        <div className={'content'}>
            <Topbar/>
            <div className={"top-text"}>
                <p className={'text'}>
                    Видовой ресторан RedRin Food
                    <br/>
                    в Центре Кишинева
                </p>
            </div>
        </div>
    )
}
