import React, {useState} from "react";
import './dish-catalog.scss'
import {Product} from "./Product/Product.jsx";
export const DishCatalog = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Яичница-глазунья из трех яиц", price: 50, image: "/dishes/image-57d43fb50fb93bbeca8821824246abcb.png" },
        { id: 2, name: "Омлет из трех яиц", price: 50, image: "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png" },
        { id: 3, name: "Блины", price: 65, image: "/dishes/image-d7ae11ab343abcd80c5a5ecdfee7be25.png" },
        { id: 4, name: "Домашние сырники", price: 70, image: "/dishes/image-f551153ef673efd803b4e19591f92b73.png" },
        { id: 2, name: "Омлет из трех яиц", price: 50, image: "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png" },
        { id: 2, name: "Омлет из трех яиц", price: 50, image: "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png" },
        { id: 1, name: "Яичница-глазунья из трех яиц", price: 50, image: "/dishes/image-57d43fb50fb93bbeca8821824246abcb.png" },
        { id: 2, name: "Омлет из трех яиц", price: 50, image: "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png" },
        { id: 1, name: "Яичница-глазунья из трех яиц", price: 50, image: "/dishes/image-57d43fb50fb93bbeca8821824246abcb.png" },
        { id: 2, name: "Омлет из трех яиц", price: 50, image: "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png" },
        { id: 2, name: "Омлет из трех яиц", price: 50, image: "/dishes/image-b96a75a5ca0cb16f30f4775b491e2fb4.png" },
    ]);
    return (
        <div className="catalog">
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    )
}
