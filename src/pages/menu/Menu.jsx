import {useReservation} from "../../script/useReservation.js";
import {Reserve} from "../../components/reserve/Reserve.jsx";
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {Contacts} from "../../components/contacts/Contacts.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import React from "react";
import {DishCatalog} from "../../components/dish-catalog/DishCatalog.jsx";
import './menu.scss'
import {Link, useLocation} from "react-router-dom";
import {PersonalNav} from "../../components/personal-nav/PersonalNav.jsx";
import {Categories} from "../../components/categories/categories.jsx";

export const Menu = () => {
    const {reservationStatus, reserveMenu} = useReservation();
    const location = useLocation();
    return (
        <div className={'section'}>
            <Reserve menuStatus={reservationStatus} updateMenu={reserveMenu}/>

            <div className="horizontal-section">
                <SideBar reserveMenu={reserveMenu}/>

            </div>
            <div className={"dish-content"}>
                <div className="nav">
                    <PersonalNav/>
                    <div className="breadcrumbs">
                        <Link to={"/"}
                              className={location.pathname === "/home" ? "breadcrumb active" : "breadcrumb not-active"}>
                            Главная
                        </Link>
                        <Link to={"/menu"}
                              className={location.pathname === "/menu" ? "breadcrumb active" : "breadcrumb not-active"}>
                            Меню
                        </Link>
                    </div>
                    <Categories/>
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
