import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import VendorSign from "../components/VendorSign";
import LoginHeader from "../components/LoginHeader";
import AddRestaurant from "../components/forms/AddRestaurant";
import LoginDisplay from "../components/LoginDisplay";
import AddProduct from "../components/forms/AddProduct";

const LandingPage = () => {
  return (
    <>
      <section className="landingSection">
        <LoginDisplay />
      </section>
    </>
  );
};
export default LandingPage;
