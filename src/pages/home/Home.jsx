import React, {useState} from "react";
import './home.scss'
import {TopContent} from "../../components/topContent/TopContent.jsx";
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {BasicContent} from "../../components/basic-content/BasicContent.jsx"
import {Footer} from "../../components/footer/Footer.jsx"
import {Reserve} from "../../components/reserve/Reserve.jsx";
import {useReservation} from "../../script/useReservation.js";

export const Home = () => {
    const {reservationStatus, reserveMenu} = useReservation();
    return (
        <div className={'section'}>
            <Reserve menuStatus={reservationStatus} updateMenu={reserveMenu}/>

                <div className="horizontal-section">
                    <SideBar reserveMenu = {reserveMenu}/>
                    <TopContent reserveMenu={reserveMenu}/>
                </div>
                <BasicContent reserveMenu={reserveMenu}/>
            <Footer/>
        </div>
    )
}
