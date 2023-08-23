import React, {useState} from "react";
import './home.scss'
import {TopContent} from "../../components/topContent/TopContent.jsx";
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {BasicContent} from "../../components/basic-content/BasicContent.jsx"
import {Footer} from "../../components/footer/Footer.jsx"
import {Reserve} from "../../components/reserve/Reserve.jsx";

export const Home = () => {
    const [reservationStatus, setReservationStatus] = useState("reserve reserve-hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const reserveMenu = () => {
        if (!isMenuClicked) {
            setReservationStatus("reserve reserve-visible")
            setIsMenuClicked(true)
        } else {
            setReservationStatus("reserve reserve-hidden")
            setIsMenuClicked(false)
        }
    }
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
