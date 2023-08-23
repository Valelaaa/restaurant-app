import './App.scss'
import {Home} from "./pages/home/Home.jsx";
import React from "react";
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import {Dish} from "./pages/dish/Dish.jsx";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/dish",
            element:<Dish/>
        },
    ]
)
function App() {

    return (
       <RouterProvider router={router}/>
    )
}

export default App
