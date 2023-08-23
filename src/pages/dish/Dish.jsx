import '../home/home.scss'
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import React from "react";
import {useReservation} from "../../script/useReservation.js";
import {Reserve} from "../../components/reserve/Reserve.jsx";
import {Contacts} from "../../components/contacts/Contacts.jsx";
import {PersonalNav} from "../../components/personal-nav/PersonalNav.jsx";
import {DishContent} from "../../components/dish-content/DishContent.jsx";

export const Dish = () => {
    const {reservationStatus, reserveMenu} = useReservation();
    return (
        <div className={'section'}>
            <Reserve menuStatus={reservationStatus} updateMenu={reserveMenu}/>

            <div className="horizontal-section">
                <SideBar reserveMenu = {reserveMenu}/>
                <DishContent/>
            </div>
                {/*<Contacts reserveMenu={reserveMenu}/>*/}
            <Footer/>
        </div>
    )
}
