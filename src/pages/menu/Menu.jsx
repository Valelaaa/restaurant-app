import {useReservation} from "../../script/useReservation.js";
import {Reserve} from "../../components/reserve/Reserve.jsx";
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {Contacts} from "../../components/contacts/Contacts.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import React from "react";
import {TopNav} from "../../components/topnav/TopNav.jsx";
import {DishCatalog} from "../../dish-catalog/DishCatalog.jsx";
import './menu.scss'

export const Menu = () => {
    const {reservationStatus, reserveMenu} = useReservation();
    return (
        <div className={'section'}>
            <Reserve menuStatus={reservationStatus} updateMenu={reserveMenu}/>

            <div className="horizontal-section">
                <SideBar reserveMenu={reserveMenu}/>

            </div>
            <div className={"dish-content"}>
                <div className="nav">
                    <TopNav/>
                </div>
                <DishCatalog/>
            </div>
            <div className="content-item">
                <Contacts reserveMenu={reserveMenu}/>
            </div>
            <Footer/>
        </div>
    )
}
