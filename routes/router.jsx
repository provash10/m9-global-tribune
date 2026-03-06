import { createBrowserRouter } from "react-router";
import HomeLayout from "../src/layouts/HomeLayout";
import Home from "../src/pages/Home";
import CategoryNews from "../src/pages/CategoryNews";

export const router =createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element: <Home></Home>
            },
            {
                path:"/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader:()=>fetch("/demo-data/news.json"),
            },
        ]
    },
    {
        path:"/auth",
        element: <h2>Auth Layout</h2>
    },
    {
        path:"/news",
        element: <h2>News Layout</h2>
    },
    {
        path:"/*",
        element: <h2>Error Layout</h2>
    },
])