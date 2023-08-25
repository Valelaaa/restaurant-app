import './dish.scss'
import Ingredient from "./Ingredient.js";
import Dish from "./Dish.js";
import {ImageSlider} from "../image-slider/ImageSlider.jsx";
import {useState} from "react";

const dish = new Dish(1, "Яичница-глазунья из трех яиц", "250", "400", [new Ingredient(1, "Тигровые креветки 60 г", 450), new Ingredient(2, "Томаты / паприка", 80), new Ingredient(3, "Бекон", 120), new Ingredient(4, "Сыр чеддер", 80),], ["/dishes/image-57d43fb50fb93bbeca8821824246abcb.png", "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png", "/dishes/image-d7ae11ab343abcd80c5a5ecdfee7be25.png", "/dishes/image-f551153ef673efd803b4e19591f92b73.png",])
const photos = dish.photos;
const ingredients = dish.ingredients;

export const DishComponent = () => {
    return (<div className="dish">
            <div className="dish-container">
                <div className="dish-photos">
                    <ImageSlider images={photos}/>

                </div>
                <div className="dish-info">
                    <div className="dish-name">
                        {dish.dishName}
                    </div>
                    <hr/>
                    <div className="price-weight">
                        <p className="price">{dish.dishPrice}</p>
                        <p className="weight">{dish.dishWeight}</p>
                    </div>
                    <div className="in-cart">
                        <p>Количество порций:</p>
                        <form action="">
                            <input type="number" className={"count"} min={1} max={99} defaultValue={1} placeholder={1}/>
                            <div className="button">В корзину</div>
                        </form>
                    </div>
                    <hr/>
                    <div className="ingredients-container">
                        <p>Сделать еще вкуснее</p>
                        <ul className="ingredients">
                            {ingredients.map((ingredient, index) => (<li
                                    key={index}
                                    className={"ingredient"}>
                                    <div className="checkbox-container">
                                        <p className="ingredient-name">{ingredient.name}</p>
                                        <div className="ingredient-actions">
                                            <input className={"checkbox"} type="checkbox" id={`ingredientCheckbox${index}`}/>
                                        </div>
                                    </div>
                                    <p className="ingredient-price"> {ingredient.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
