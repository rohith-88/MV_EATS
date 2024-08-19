import LoginHeader from "./LoginHeader";
import AddRestaurant from "./forms/AddRestaurant";
import SideBar from "./SideBar";
import AllRestaurants from "./displays/AllRestaurants";
import AllProducts from "./displays/AllProducts";

const LoginDisplay = () => {
  return (
    <div className="loginDisplay">
      <LoginHeader />
      <SideBar />
      <AllProducts />
    </div>
  );
};
export default LoginDisplay;
