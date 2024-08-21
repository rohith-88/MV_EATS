import VendorSign from "../components/VendorSign";
import LoginDisplay from "../components/LoginDisplay";
import { useState } from "react";
import { API_URL } from "../components/constants";

const LandingPage = () => {
  const [showDashboard, setShowDashboard] = useState();
  const [showAuthenticator, setShowAuthenticator] = useState();
  const [vendorData, setVendorData] = useState();
  async function loginStateHandler() {
    await fetch(`${API_URL}/vendor/dashboard`, {
      method: "GET",
      headers: { token: window.localStorage.getItem("token") },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw Error("not logged in");
        }
        const vendorData = await response.json();
        console.log(vendorData);
        setShowDashboard(true);
        setShowAuthenticator(false);
      })
      .catch((err) => {
        setShowDashboard(false);
        setShowAuthenticator(true);
      });
  }
  loginStateHandler();

  return (
    <>
      {showDashboard && <LoginDisplay />}
      {showAuthenticator && <VendorSign />}
    </>
  );
};
export default LandingPage;
