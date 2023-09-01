import './App.scss'
import {Home} from "./pages/home/Home.jsx";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Menu} from "./pages/menu/Menu.jsx"
import {Dish} from "./pages/dish/Dish.jsx";
import {Cart} from "./pages/cart/Cart.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>,
            basePath: "/",

        },
        {
            path: "/menu",
            element: <Menu/>,
        },
        {
            path: "/menu/dish",
            element: <Dish/>
        },
        {
            path: "/cart",
            element: <Cart/>
        }
    ]
)

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
