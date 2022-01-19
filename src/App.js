import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import ScrollTop from "./ScrollToTop";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import LiverpoolSales from "./Pages/LiverpoolSales";
import ManCitySales from "./Pages/ManCitySales";
import ManUnitedSales from "./Pages/ManUnitedSales";
import ArsenalSales from "./Pages/ArsenalSales";
import AboutUs from "./Footer/AboutUs";
import DeliveryGuarantee from "./Footer/Delivery";
import PrivacyPolicy from "./Footer/Privacy";
import TermsOfUse from "./Footer/Terms";
import SizeChart from "./Footer/SizeChart";
import FaqHelp from "./Footer/Faq-help";
import Shipping from "./Footer/Shipping";
import ReturnPolicy from "./Footer/ReturnPolicy";
import PaymentMethod from "./Footer/PaymentMehdod";
import Login from "./Footer/Login";
import SignUp from "./Footer/CreateAccount";
import MyAccount from "./Footer/Login";
import MyOrders from "./Footer/Login";
import ForgotPassword from "./Footer/ForgetPassword";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/footballshirt" element={<Banner />} />
          <Route path="/liverpool-sales" element={<LiverpoolSales />} />
          <Route path="/mancity-sales" element={<ManCitySales />} />
          <Route path="/manunited-sales" element={<ManUnitedSales />} />
          <Route path="/arsenal-sales" element={<ArsenalSales />} />
          {/* FOOTER */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/delivery-guarantee" element={<DeliveryGuarantee />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/size-chart" element={<SizeChart />} />
          <Route path="/faq-help" element={<FaqHelp />} />
          <Route path="/shipping-delivery" element={<Shipping />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
