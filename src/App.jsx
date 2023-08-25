import './App.scss'
import {Home} from "./pages/home/Home.jsx";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Menu} from "./pages/menu/Menu.jsx"
import {Dish} from "./pages/dish/Dish.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>,
            basePath: "/",

        },
        {
            path: "/menu",
            element: <Dish/>,
            children: [
                {
                    path: "dish",
                    element: <Dish/>,
                    basePath:"/"
                }
            ]
        }
]
)

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
