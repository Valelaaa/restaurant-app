import {Reserve} from "../../components/reserve/Reserve.jsx";
import React from "react";
import {useReservation} from "../../script/useReservation.js";
import {Link, useLocation} from "react-router-dom";
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {PersonalNav} from "../../components/personal-nav/PersonalNav.jsx";
import {Contacts} from "../../components/contacts/Contacts.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {EmptyCard} from "../../components/cart/empty-cart/EmptyCard.jsx";
import {FilledCart} from "../../components/cart/filledCart/FilledCart.jsx";


export const Cart = () => {
    const {reservationStatus, reserveMenu} = useReservation();
    const location = useLocation();
    return (
        <div className="section">
            <Reserve menuStatus={reservationStatus} updateMenu={reserveMenu}/>
            <div className="horizontal-section">
                <SideBar reserveMenu={reserveMenu}/>
                <div className="container">
                    <PersonalNav/>

                    <div className="breadcrumbs">
                        <Link to={"/"}
                              className={location.pathname === "/home" ? "breadcrumb active" : "breadcrumb not-active"}>
                            Главная
                        </Link>
                        <Link to={"/cart"}
                              className={location.pathname === "/cart" ? "breadcrumb active" : "breadcrumb not-active"}>
                            Корзина
                        </Link>
                    </div>
                </div>
            </div>
            <FilledCart/>

            <div className="content-item">
                <Contacts reserveMenu={reserveMenu}/>
            </div>
            <Footer/>
        </div>
    )
}