import '../home/home.scss'
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import React from "react";
import {useReservation} from "../../script/useReservation.js";
import {Reserve} from "../../components/reserve/Reserve.jsx";
import {Contacts} from "../../components/contacts/Contacts.jsx";
import {TopNav} from "../../components/topnav/TopNav.jsx";
import {DishComponent} from "../../components/dish/DishComponent.jsx";

export const Dish = () => {
    const {reservationStatus, reserveMenu} = useReservation();
    return (
        <div className={'section'}>
            <Reserve menuStatus={reservationStatus} updateMenu={reserveMenu}/>

            <div className="horizontal-section">
                <SideBar reserveMenu={reserveMenu}/>
                <div className="container">
                    <TopNav/>
                    <DishComponent/>
                </div>
            </div>
            <div className="content-item">
                <Contacts reserveMenu={reserveMenu}/>
            </div>
            <Footer/>
        </div>
    )
}
