import LoginHeader from "./LoginHeader";
import AddRestaurant from "./forms/AddRestaurant";
import SideBar from "./SideBar";
import AllRestaurants from "./displays/AllRestaurants";
import AllProducts from "./displays/AllProducts";
import { useState, useEffect } from "react";
import Profile from "./Profile";

const LoginDisplay = ({ vendorData, loginStateHandler }) => {
  const { username, email, restaurant } = vendorData;
  const [showRestaurants, setShowRestaurants] = useState();
  const [showProfile, setShowProfile] = useState(true);

  const restaurantHandler = () => {
    setShowRestaurants(true);
    setShowProfile(false);
  };

  // const

  return (
    <div className="loginDisplay">
      <LoginHeader />
      <SideBar
        loginStateHandler={loginStateHandler}
        restaurantHandler={restaurantHandler}
      />
      {showRestaurants && <AllRestaurants restaurantList={restaurant} />}
      {showProfile && <Profile />}
    </div>
  );
};
export default LoginDisplay;
