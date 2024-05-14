import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Resister from "../Pages/Resister";
import PrivateRoutes from "./PrivateRoutes";
import EstateDetails from "../Component/EstateDetails";
import InquiryForm from "../Pages/InquiryForm";
import AddTouristsSpots from "../Pages/AddTouristsSpots";
import Myspots from "../Pages/Myspots";
import UpdateSpot from "../Pages/UpdateSpot";
import AllTouristsSpots from "../Pages/AllTouristsSpots";
import SpotDetails from "../Pages/SpotDetails";
import CountrySpots from "../Pages/CountrySpots";
import Queries from "../Pages/Queries";
import AddQuery from "../Pages/AddQuery";
import MyQueries from "../Pages/MyQueries";


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
                path:"/estate/:id",
                element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
                loader:() => fetch('/estates.json')
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
                path:"/allTouristsSpots",
                element:<AllTouristsSpots></AllTouristsSpots>
            },{
                path: "/country/:countryName",
                element:<CountrySpots></CountrySpots>
            },
            {
                path:"/spotDetails/:id",
                element: <PrivateRoutes><SpotDetails></SpotDetails></PrivateRoutes>
            },
            {
                path:"/addTouristsSpots",
                element:<PrivateRoutes><AddTouristsSpots></AddTouristsSpots></PrivateRoutes>
            },
            {
                path:"/mySpots",
                element: <PrivateRoutes><Myspots></Myspots></PrivateRoutes>
            },{
                path: "/update/:id",
                element: <PrivateRoutes><UpdateSpot></UpdateSpot></PrivateRoutes>
            },
            {
                path: "/inquiryForm",
                element: <InquiryForm></InquiryForm>
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