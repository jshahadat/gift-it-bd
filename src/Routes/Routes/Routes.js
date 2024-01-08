import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/Sheared/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Authintication/Register/Register";
import Login from "../../pages/Authintication/Login/Login";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import HeartVersiionOne from "../../pages/GiftLandPage/HeartVersiionOne/HeartVersiionOne";
import ConfirmVOne from "../../pages/GiftLandPage/HeartVersiionOne/ConfirmOrderNecklace/ConfirmVOne";
import OfferPage from "../../pages/GiftLandPage/HeartVersiionOne/OrderForm/OfferPage";
import LAstPage from "../../pages/GiftLandPage/HeartVersiionOne/OrderForm/LAstPage";
import OneOrderThankYouPage from "../../pages/GiftLandPage/HeartVersiionOne/ConfirmOrderNecklace/OneOrderThankYouPage";
import HeartVersionTwo from "../../pages/GiftLandPage/HeartVersionTwo/HeartVersionTwo";
import HeartVersionThree from "../../pages/GiftLandPage/HeartVersionThree/HeartVersionThree";
import HearVersionFour from "../../pages/GiftLandPage/HearVersionFour/HearVersionFour";
import SunflowerNecklace from "../../pages/GiftLandPage/SunflowerNecklace/SunflowerNecklace";
import SunflowerRing from "../../pages/GiftLandPage/SunflowerRing/SunflowerRing";
import JewelryBoxVersionTwo from "../../pages/GiftLandPage/JewelryBoxVersionTwo/JewelryBoxVersionTwo";
import JewelryBoxVersionOne from "../../pages/GiftLandPage/JewelryBoxVersionOne/JewelryBoxVersionOne";
import OrderDashBoard from "../../pages/GiftLandPage/OrderDashBoard/OrderDashBoard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/heart-v1",
        element: <HeartVersiionOne></HeartVersiionOne>,
      },
      {
        path: "/confirm-thank-you",
        element: <OneOrderThankYouPage></OneOrderThankYouPage>,
      },
      {
        path: "/confirm-v1-nackclace",
        element: <ConfirmVOne></ConfirmVOne>,
      },
      {
        path: "/offer-jwelery-box",
        element: <OfferPage></OfferPage>,
      },
      {
        path: "/heart-upsell-thankyou",
        element: <LAstPage></LAstPage>,
      },
      {
        path: "/heart-v2",
        element: <HeartVersionTwo></HeartVersionTwo>,
      },
      {
        path: "/heart-v3",
        element: <HeartVersionThree></HeartVersionThree>,
      },
      {
        path: "/heart-v4",
        element: <HearVersionFour></HearVersionFour>,
      },
      {
        path: "/sunflower-necklace",
        element: <SunflowerNecklace></SunflowerNecklace>,
      },
      {
        path: "/sunflower-ring",
        element: <SunflowerRing></SunflowerRing>,
      },
      {
        path: "/jewelry-box-v1",
        element: <JewelryBoxVersionOne></JewelryBoxVersionOne>,
      },
      {
        path: "/jewelry-box-v2",
        element: <JewelryBoxVersionTwo></JewelryBoxVersionTwo>,
      },
      {
        path: "/get-all-order",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <OrderDashBoard></OrderDashBoard>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
