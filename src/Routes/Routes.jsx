import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import DetailsProduct from "../Pages/AllProduct/DetailsProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Mycart from "../Pages/Mycart/Mycart";


const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },

        {
          path: "/addProduct",
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        },
        {
          path: "/detailProduct/:id",
          element: <PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
          loader: ({params})=>fetch(`https://trend-zen-server-side.vercel.app/products/${params.id}`)
        },
        {
          path:"/updateProduct/:id",
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params})=>fetch(`https://trend-zen-server-side.vercel.app/products/${params.id}`)

        },
        {
          path: "/cart",
          element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        
    ]
    },
  ]);

export default router;
