import "./filled-cart.scss"
import Dish from "../../dish/Dish.js";
import Ingredient from "../../dish/ingredients/Ingredient.js";
import {info} from "sass";
import {Product} from "./cartProduct/Product.jsx";
import {useCallback, useEffect, useState} from "react";

const dish = new Dish(1, "Яичница-глазунья из трех яиц", "50",
    "400", [new Ingredient(1, "Тигровые креветки 60 г", 450),
        new Ingredient(2, "Томаты / паприка", 80),
        new Ingredient(3, "Бекон", 120),
        new Ingredient(4, "Сыр чеддер", 80),
        new Ingredient(5, "Жопа негра", 1)
    ], ["/dishes/image-57d43fb50fb93bbeca8821824246abcb.png",
        "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png",
        "/dishes/image-d7ae11ab343abcd80c5a5ecdfee7be25.png",
        "/dishes/image-f551153ef673efd803b4e19591f92b73.png",])
const dish1 = new Dish(2, "Яичница-глазунья из трех яиц", "50",
    "400", [new Ingredient(1, "Тигровые креветки 60 г", 450),
        new Ingredient(2, "Томаты / паприка", 80),
        new Ingredient(3, "Бекон", 120),
        new Ingredient(4, "Сыр чеддер", 80),
        new Ingredient(5, "Жопа негра", 1)
    ], ["/dishes/image-57d43fb50fb93bbeca8821824246abcb.png",
        "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png",
        "/dishes/image-d7ae11ab343abcd80c5a5ecdfee7be25.png",
        "/dishes/image-f551153ef673efd803b4e19591f92b73.png",])
const dish2 = new Dish(3, "Яичница-глазунья из трех яиц", "50",
    "400", [new Ingredient(1, "Тигровые креветки 60 г", 450),
        new Ingredient(2, "Томаты / паприка", 80),
        new Ingredient(3, "Бекон", 120),
        new Ingredient(4, "Сыр чеддер", 80),
        new Ingredient(5, "Жопа негра", 1)
    ], ["/dishes/image-57d43fb50fb93bbeca8821824246abcb.png",
        "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png",
        "/dishes/image-d7ae11ab343abcd80c5a5ecdfee7be25.png",
        "/dishes/image-f551153ef673efd803b4e19591f92b73.png",])
const deliveryPriceBackend = 50;
export const FilledCart = () => {
    let dishes = []
    for (let i = 0; i < 20; i++) {
        dishes.push(new Dish(i, "Яичница-глазунья из трех яиц", "50",
            "400", [new Ingredient(1, "Тигровые креветки 60 г", 450),
                new Ingredient(2, "Томаты / паприка", 80),
                new Ingredient(3, "Бекон", 120),
                new Ingredient(4, "Сыр чеддер", 80),
                new Ingredient(5, "Жопа негра", 1)
            ], ["/dishes/image-57d43fb50fb93bbeca8821824246abcb.png",
                "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png",
                "/dishes/image-d7ae11ab343abcd80c5a5ecdfee7be25.png",
                "/dishes/image-f551153ef673efd803b4e19591f92b73.png",]))
    }
    // const products = [dish, dish1, dish2]
    const products = dishes;
    const defaultSum = products.reduce((sum, product) => sum + parseInt(product.dishPrice), 0);
    const [total, setTotal] = useState(defaultSum);

    const [totalInProduct, setTotalInProduct] = useState(
        products.map((product) => parseInt(product.dishPrice))
    );

    const [deliveryPrice, setDeliveryPrice] = useState(deliveryPriceBackend);

    const handleProductsTotal = (productTotal, productIndex) => {
        const updateTotalInProduct = [...totalInProduct]
        updateTotalInProduct[productIndex] = productTotal;
        setTotalInProduct(updateTotalInProduct);
    }

    useEffect(() => {
        const sum = totalInProduct.reduce((sum, number) => sum += parseInt(number), 0)
        setTotal(sum)
    }, [totalInProduct]);


    const [activeButton, setActiveButton] = useState(false);
    const [isPreOrderActive, setIsPreOrderActive] = useState(activeButton);
    const handleFirstButton = () => {
        if (!activeButton) {
            setActiveButton(!activeButton);
            setIsPreOrderActive(!isPreOrderActive);
            setDeliveryPrice(0);
        }
    }
    const handleSecondButton = () => {
        if (activeButton) {
            setActiveButton(!activeButton);
            setIsPreOrderActive(!isPreOrderActive);
            setDeliveryPrice(deliveryPriceBackend);
        }
    }
    const handlePreOrderActivation = () => {
        if (isPreOrderActive) {
            setIsPreOrderActive(!isPreOrderActive);
        }
    }
    return (
        <div className="filled-cart">
            <div className="filled-cart-container">
                <div className="cart-title">
                    <p>
                        {products.length} Товар(а/ов) ва вашей корзине
                    </p>
                </div>
                <div className="filled-cart-main-container">
                    <div className="products-container">
                        <div className="product-container-top">
                            <div className="title"><p>Товар(ы)</p></div>
                            <ul className="total">
                                <li>Цена</li>
                                <li>Кол.</li>
                                <li>Итого:</li>
                            </ul>
                        </div>
                        <div className="products">
                            <ul className="product-list">
                                {products.map((product, index) => (
                                    <Product product={product} updateTotal={handleProductsTotal}
                                             productIndex={index}/>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className="order-block-container">
                        <div className="delivery-order">
                            <div className="choose">
                                <div className={activeButton ? "button" : "button white"} onClick={handleFirstButton}>
                                    <p>Предзаказ</p></div>
                                <div className={activeButton ? "button white" : "button"} onClick={handleSecondButton}>
                                    <p>Доставка</p></div>
                            </div>
                            <div className={isPreOrderActive ? "sliding-panel" : "sliding-panel hidden"}>
                                <div className="choose-preorder-type">
                                    <div className={"choose-preorder-type-variant"}>
                                        <div>
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                            />
                                            <p>Заказ с собой</p>
                                        </div>
                                        <div className={"choose-preorder-type-variant"}>
                                            <div>
                                                <input
                                                    className="checkbox"
                                                    type="checkbox"
                                                />
                                                <p>
                                                    На месте
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prepare-time">
                                    <div className="text-container">
                                        <p>
                                            На какое время вам приготовить:
                                        </p>

                                    </div>
                                    <div className="selects">
                                        <div className="time-hour">
                                            <select name="" id="">
                                                <option selected value="0">20</option>
                                                <option value="1">21</option>
                                                <option value="2">22</option>
                                                <option value="3">23</option>
                                            </select>
                                        </div>
                                        <div className="time-minute">
                                            <select name="" id="">
                                                <option selected value="0">00</option>
                                                <option value="1">10</option>
                                                <option value="2">20</option>
                                                <option value="3">30</option>
                                                <option value="4">40</option>
                                                <option value="5">50</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="total-info">
                            <div className="total-price-text">Всего товары</div>
                            <div className="total-price">{total}</div>
                        </div>
                        <div className="delivery-info">
                            <div className="delivery-text">Доставка</div>
                            <div className="delivery-price">{deliveryPrice}</div>
                        </div>
                        <div className="total">
                            <div className="total-text">Итого</div>
                            <div className="total-sum">{total + deliveryPrice}</div>
                        </div>
                        <div className="order-block-button">
                            Заказать
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
