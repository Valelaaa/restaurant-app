import {PersonalNav} from "../personal-nav/PersonalNav.jsx";
import {Categories} from "../categories/categories.jsx";
import React from "react";

export const TopNav = () => {
    return (
        <div className="top-nav">
            <PersonalNav/>
            <Categories/>
        </div>
    )
}
