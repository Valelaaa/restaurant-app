import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import React from "react";
import {useReservation} from "../../script/useReservation.js";
import {Reserve} from "../../components/reserve/Reserve.jsx";
import {Contacts} from "../../components/contacts/Contacts.jsx";
import {DishComponent} from "../../components/dish/DishComponent.jsx";
import {PersonalNav} from "../../components/personal-nav/PersonalNav.jsx";
import {Categories} from "../../components/categories/categories.jsx";
import {Link, useLocation} from "react-router-dom";

export const Dish = () => {
    const location = useLocation();
    const {reservationStatus, reserveMenu} = useReservation();
    return (
        <div className={'section'}>
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
                        <Link to={"/menu"}
                              className={location.pathname === "/menu" ? "breadcrumb active" : "breadcrumb not-active"}>
                            Меню
                        </Link>
                        <Link to={"/dish"}
                              className={location.pathname === "/menu" ? "breadcrumb active" : "breadcrumb not-active"}>
                            Продукт
                        </Link>
                    </div>
                    <Categories/>
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
