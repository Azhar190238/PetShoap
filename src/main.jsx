import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import HomePage from './Components/Home/HomePage/HomePage.jsx';
import Product from './Components/Product/Product.jsx';
import ServicesPupies from './Components/Product/ServicesPupies.jsx';
import PuppiesProduct from './Components/Product/PuppiesProduct/PuppiesProduct.jsx';
import OurShop from './Components/OurShop/OurShop.jsx';
import Appoinment from './Components/Appointment/Appoinment.jsx';
import AboutMe from './Components/Appointment/AboutMe.jsx';
import FindPuppy from './Components/FindPuppy/FindPuppy.jsx';
import FirstCart from './Components/AllCart/FirstCart/FirstCart.jsx';
import Checkout from './Components/AllCart/Checkout/Checkout.jsx';
import ProcessPayment from './Components/AllCart/ProcessPayment/ProcessPayment.jsx';
import AnotherPayment from './Components/AllCart/AnotherPayment/AnotherPayment.jsx';
import PaymentMethod from './Components/AllCart/PaymentMethod/PaymentMethod.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/findPuppy",
        element: <Product />,
      },
      {
        path: "/appointment",
        element: <Appoinment/>,
      },
      {
        path: "/appointmentMe",
        element: <AboutMe/>,
      },
      {
        path: "/shoppingCart",
        element: <FirstCart/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: "/process",
        element: <ProcessPayment/>,
      },
      {
        path: "/anotherProcess",
        element: <AnotherPayment/>,
      },
      {
        path: "/paymentMethod",
        element: <PaymentMethod/>,
      },
      {
        path: "/ourShop",
        element: <OurShop />,
      },
      {
        path: "/findPuppy2",
        element: <FindPuppy />,
      },
    
      {
        path: "/services",
        element: <ServicesPupies></ServicesPupies>,
      },
      {
        path: "/puppyProducts",
        element: <PuppiesProduct></PuppiesProduct>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
