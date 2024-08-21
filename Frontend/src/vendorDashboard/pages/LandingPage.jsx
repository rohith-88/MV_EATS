import VendorSign from "../components/VendorSign";
import LoginDisplay from "../components/LoginDisplay";
import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../components/constants";

const LandingPage = () => {
  const [showDashboard, setShowDashboard] = useState();
  const [showAuthenticator, setShowAuthenticator] = useState();
  const [vendorData, setVendorData] = useState();

  //---------------------------------
  const loginStateHandler = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/dashboard`, {
        method: "GET",
        headers: { token: window.localStorage.getItem("token") },
      });
      if (!response.ok) throw new Error("not logged in");
      const vendor = await response.json();
      setVendorData(vendor);
      setShowDashboard(true);
      setShowAuthenticator(false);
    } catch (err) {
      setShowDashboard(false);
      setShowAuthenticator(true);
    }
  }, []);
  useEffect(() => {
    loginStateHandler();
  }, [loginStateHandler]);

  return (
    <>
      {showDashboard && (
        <LoginDisplay
          loginStateHandler={loginStateHandler}
          vendorData={vendorData}
        />
      )}
      {showAuthenticator && (
        <VendorSign loginStateHandler={loginStateHandler} />
      )}
    </>
  );
};
export default LandingPage;
