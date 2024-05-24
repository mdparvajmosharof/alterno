import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Resister from "../Pages/Resister";
import PrivateRoutes from "./PrivateRoutes";
import Queries from "../Pages/Queries";
import AddQuery from "../Pages/AddQuery";
import MyQueries from "../Pages/MyQueries";
import QueryDetails from "../Pages/QueryDetails";
import MyRecommendations from "../Pages/MyRecommendations";
import RecommendationsForMe from "../Pages/RecommendationsForMe";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/estates.json')
            },{
                path: "/queries",
                element: <Queries></Queries>
            },
            {
                path: "/addQuery",
                element: <PrivateRoutes><AddQuery></AddQuery></PrivateRoutes>
            },
            {
                path: "/myQueries",
                element: <PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
            },
            {
                path:"/queryDetails/:id",
                element: <QueryDetails></QueryDetails>
            },
            {
                path: "/myRecommendations",
                element: <PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
            },
            {
                path: "/recommendationMe",
                element: <PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/resister",
                element:<Resister></Resister>
            }
        ]
    }
])

export default router;