import {PersonalNav} from "../personal-nav/PersonalNav.jsx";
import React from "react";
import {Categories} from "../categories/categories.jsx";
import {DishComponent} from "../dish/DishComponent.jsx"

export const DishContent = () => {
    return (
        <div className="dish-content">
            <PersonalNav/>
            <Categories/>
            <DishComponent/>
        </div>
    )
}
