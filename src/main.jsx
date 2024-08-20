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
import CompleteCard from './Components/AllCart/CompleteCard/CompleteCard.jsx';
import Trainer from './Components/Trainer/Trainer.jsx';
import PussyService from './Components/PussyService/PussyService.jsx';
import BathService from './Components/BathService/BathService.jsx';
import Payment3 from './Components/Payment/Payment3.jsx';
import Payment2 from './Components/Payment/Payment2.jsx';
import Payment from './Components/Payment/Payment.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Review from './Components/Review/Review.jsx';
import SingleShop from './Components/singleShop/singleShop.jsx';
import MyAccount1 from './Components/Authentication/MyAccount/MyAccount1.jsx';
import SignIn from './Components/Authentication/MyAccount/SignIn.jsx';
import ForgetPassword from './Components/Authentication/MyAccount/ForgetPassword.jsx';
import ResetPassword from './Components/Authentication/MyAccount/ResetPassword.jsx';
import ResetAgainPassword from './Components/Authentication/MyAccount/ResetAgainPassword.jsx';
import Verified from './Components/Authentication/MyAccount/Verified.jsx';
import ManageMyAccount from './Components/FindTrainer/ManageMyAccount.jsx';
import EditPersonal from './Components/FindTrainer/EditPersonal.jsx';
import DashboardServices from './Components/DashbordServices/DashboardServices.jsx';
import AddNewForm from './Components/DashbordServices/AddNewForm.jsx';
import DashboardReviews from './Components/DashBoardReviews/DashboardReviews.jsx';
import ManageAccount1 from './Components/MyAccount/ManageAccount1.jsx'
// import ManageAccount1 from './Components/MyAccount/ManageAccount1.jsx';
import MyProfile from './Components/MyAccount/MyProfile.jsx';
import AddressBook from './Components/MyAccount/AddressBook.jsx';
import MyPaymentOption from './Components/MyAccount/MyPaymentOption.jsx';
import MyReturn from './Components/MyAccount/MyReturn.jsx';
import MyCancelation from './Components/MyAccount/MyCanceletion.jsx';
import MyReview from './Components/MyAccount/MyReview.jsx';
import Vouchers from './Components/MyAccount/Vouchchers.jsx';
import FindPuppy1 from './Components/DashboardPuppys/FindPuppy1.jsx';
// import FindPuppy1 from './Components/D'
import AddPuppy from './Components/DashboardPuppys/AddPyppy.jsx';
import PuppyService from './Components/DashboardPuppys/PuppyService.jsx';
import Overview1 from './Components/DashboardPuppys/Overview1.jsx';
import OverView2 from './Components/DashboardPuppys/OverView2.jsx';
import OverView3 from './Components/DashboardPuppys/OverView3.jsx';
import OverView4 from './Components/DashboardPuppys/OverView4.jsx';
import OverView5 from './Components/DashboardPuppys/OverView5.jsx';
// import FindPuppy1 from './Components/DashboardPuppys/FindPuppy1.jsx';
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
        element: <Appoinment />,
      },
      {
        path: "/appointmentMe",
        element: <AboutMe />,
      },
      {
        path: "/shoppingCart",
        element: <FirstCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/process",
        element: <ProcessPayment />,
      },
      {
        path: "/anotherProcess",
        element: <AnotherPayment />,
      },
      {
        path: "/paymentMethod",
        element: <PaymentMethod />,
      },
      {
        path: "/completeCard",
        element: <CompleteCard />,
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
      {
        path: "/pussyService",
        element: <PussyService></PussyService>
      },
      {
        path: "/bathService",
        element: <BathService></BathService>
      },
      {
        path: '/trainer',
        element: <Trainer></Trainer>
      },
      {
        path: "/singleShop",
        element: <SingleShop></SingleShop>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/payment",
        element: <Payment></Payment>
      },
      {
        path: "/payment2",
        element: <Payment2></Payment2>
      },
      {
        path: "/payment3",
        element: <Payment3></Payment3>
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      //updated after collaboration 
      {
        path: "/register",
        element: <MyAccount1></MyAccount1>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/forget",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/reset",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/resetAgain",
        element: <ResetAgainPassword></ResetAgainPassword>,
      },
      {
        path: "/verified",
        element: <Verified></Verified>,
      },

      //find trainer
      {
        path: "/findTrainer",
        element: <ManageMyAccount></ManageMyAccount>,
      },
      {
        path: "/editPersonal",
        element: <EditPersonal></EditPersonal>,
      },
      //dashbord servics

      {
        path: "/dashbordServices",
        element: <DashboardServices></DashboardServices>,
      },
      {
        path: "/addNewForm",
        element: <AddNewForm></AddNewForm>,
      },
      {
        path: "/dashbordReview",
        element: <DashboardReviews></DashboardReviews>,
      },
      {
        path: "/manageAccount1",
        element: <ManageAccount1></ManageAccount1>
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/addressBook",
        element: <AddressBook></AddressBook>
      },
      {
        path: "/myPaymentOption",
        element: <MyPaymentOption></MyPaymentOption>
      },
      {
        path: "/myReturn",
        element: <MyReturn></MyReturn>
      },
      {
        path: "/myCancelation",
        element: <MyCancelation></MyCancelation>
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>
      },
      {
        path: "/vouchers",
        element: <Vouchers></Vouchers>
      },
      {
        path: "/findPuppy1",
        element: <FindPuppy1></FindPuppy1>
      },
      {
        path: "/addPuppy",
        element: <AddPuppy></AddPuppy>
      },
      {
        path: "/ServicePuppyDashboard",
        element: <PuppyService></PuppyService>
      },
      {
        path: "/overView1",
        element: <Overview1></Overview1>
      },
      {
        path: "/overView2",
        element: <OverView2></OverView2>
      },
      {
        path: "/overView3",
        element: <OverView3></OverView3>
      },
      {
        path: "/overView4",
        element: <OverView4></OverView4>
      },
      {
        path: "/overView5",
        element: <OverView5></OverView5>
      },




    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
