const SideBar = ({ loginStateHandler, restaurantHandler }) => {
  return (
    <div className="sideSection">
      <button onClick={restaurantHandler}>Restaurants</button>
      <button>Orders</button>
      <button>Profile</button>
      <button
        onClick={() => {
          window.localStorage.removeItem("token");
          loginStateHandler();
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default SideBar;
