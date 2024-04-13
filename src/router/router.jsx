import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import SinglProductPage from "../pages/SinglProductPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/products/:id',
                element: <SinglProductPage />
            },
            
        ]
    }
])

export default router