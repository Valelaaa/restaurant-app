import {useEffect, useRef, useState} from "react";
import "./product.scss"

export const Product = ({product, updateTotal, productIndex}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [count, setCount] = useState(1);
    const [totalProductPrice, setTotalProductPrice] = useState(parseInt(product.dishPrice));

    useEffect(() => {
        const totalIngredientPrice = selectedIngredients.reduce(
            (sum, index) => sum + product.ingredients[index].price,
            0
        );

        const newTotalProductPrice = (parseInt(product.dishPrice) + totalIngredientPrice) * count;
        setTotalProductPrice(newTotalProductPrice);
        updateTotal(newTotalProductPrice, productIndex);
    }, [selectedIngredients, count]);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleIncrement = () => {
        if (count < 99) {
            setCount(count + 1);
        }
    }
    const handleCheckboxChange = (index, price) => {
        setSelectedIngredients(prevSelectedIngredients => {
            if (prevSelectedIngredients.includes(index)) {
                // Ингредиент уже выбран, удаляем из списка
                return prevSelectedIngredients.filter(item => item !== index);
            } else {
                // Ингредиент не выбран, добавляем в список
                return [...prevSelectedIngredients, index];
            }
        });
    };

    return (
        <li className="product-list-item">
            <div className="item-container">
                <div className="product-info">
                    <div className="image-container">
                        <img src={product.photos[0]} alt=""/>
                    </div>
                    <div className="cart-product">
                        <p> {product.dishName}</p>
                        <div className="ingredients-container">
                            <ul className="ingredients">
                                {product.ingredients.map((ingredient, index) => (
                                    <li
                                        key={index}
                                        className={"ingredient"}>
                                        <div className="checkbox-container">
                                            <p className="ingredient-name">{ingredient.name}</p>
                                            <div className="ingredient-actions">
                                                <input
                                                    className="checkbox"
                                                    type="checkbox"
                                                    id={`ingredientCheckbox${index}`}
                                                    checked={selectedIngredients.includes(index)}
                                                    onChange={() => handleCheckboxChange(index, ingredient.price)}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="purchase-info">
                    <ul className="purchase-info-list">
                        <li>
                            <div className="product-price">
                                <p>{product.dishPrice}</p>
                            </div>
                            <ul className="ingredients-price-list">
                                {product.ingredients.map((ingredient, index) => (
                                    <li className="price-container">
                                        <p className="ingredient-price"> {ingredient.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <div className="product-count">
                                <div className="custom-input">
                                    <div className="button" onClick={handleDecrement}>—</div>
                                    <input className={"product-input"} type="number" value={count} min={"1"}
                                           max={"99"}
                                           onChange={() => {
                                           }}
                                    />
                                    <div className="button" onClick={handleIncrement}><p>+</p></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product-total">
                                <p>{totalProductPrice}</p>
                            </div>
                        </li>
                    </ul>


                </div>
            </div>
        </li>
    )
}
