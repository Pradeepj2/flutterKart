import React from "react";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Comments from "./components/Comments";
import ContactUs from "./components/ContactUs";
import CopyRights from "./components/CopyRights";
import Carries from "./components/Carries";
import Downloads from "./components/Downloads";
import Favourites from "./components/Favourites";
import HelpCenter from "./components/HelpCenter";
import Licence from "./components/Licence";
import NewRelase from "./components/NewRelese";
import Payment from "./components/Payment";
import Personalinformation from "./components/Personalinformation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ProductPage from "./components/ProductPage";
import ReviewBuyer from "./components/ReviewBuyer";
import TermsAndCondition from "./components/TermsAndCondition";
import Testimonial from "./components/Testimonial";
import ViewCreator from "./components/ViewCreator";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Comments" element={<Comments />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/CopyRights" element={<CopyRights />} />
        <Route exact path="/Carries" element={<Carries />} />
        <Route exact path="/Downloads" element={<Downloads />} />
        <Route exact path="/Favourites" element={<Favourites />} />
        <Route exact path="/HelpCenter" element={<HelpCenter />} />
        <Route exact path="/Licence" element={<Licence />} />
        <Route exact path="/NewRelase" element={<NewRelase />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/ProductPage" element={<ProductPage />} />
        <Route exact path="/ReviewBuyer" element={<ReviewBuyer />} />
        <Route exact path="/Testimonial" element={<Testimonial />} />
        <Route exact path="/ViewCreator" element={<ViewCreator />} />
        <Route
          exact
          path="/Personalinformation"
          element={<Personalinformation />}
        />
        <Route
          exact
          path="/TermsAndCondition"
          element={<TermsAndCondition />}
        />
      </Routes>
    </Router>
  );
}

export default App;
