import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import VendorSign from "../components/VendorSign";
import LoginHeader from "../components/LoginHeader";
import AddRestaurant from "../components/forms/AddRestaurant";
import LoginDisplay from "../components/LoginDisplay";
import AddProduct from "../components/forms/AddProduct";
import { Route, Router } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const [accessToken, setAccessToken] = useState(null);
  const checkAccessToken = () => {};
  return (
    <>
      <VendorSign />
    </>
  );
};
export default LandingPage;
