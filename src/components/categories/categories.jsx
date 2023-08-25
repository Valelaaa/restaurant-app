import './categories.scss'
import React, {useState} from "react";
const categories = [
    "Завтраки",
    "Raw",
    "Холодные закуски",
    "Брускетты",
    "К вину",
    "Салаты",
    "Супы",
    "Паста и ризотто",
    "Мясо",
    "Рыба",
    "Grill",
    "Мангал",
    "Гарниры"
];
export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState("Завтраки");
    const handleCategoryClick = (category)=>{
        setActiveCategory(category);
    };

    return (
        <div className="dish-categories">
            <ul className={'categories-list'}>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`category ${activeCategory === category ? "active" : ""}`}
                        onClick={()=> handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}

            </ul>
        </div>
    )
}
