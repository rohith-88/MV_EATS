import { useState } from "react";
import AddRestaurant from "../forms/AddRestaurant";

const AllRestaurants = ({ restaurantList }) => {
  const [showAddFirmForm, setShowAddFirmForm] = useState(false);
  const addFirmHandler = () => {
    if (showAddFirmForm) setShowAddFirmForm(false);
    else setShowAddFirmForm(true);
  };
  return (
    <>
      {showAddFirmForm && (
        <AddRestaurant setShowAddFirmForm={setShowAddFirmForm} />
      )}
      <div className="firmDisplay">
        {restaurantList.map((firm) => (
          <div className="firmCard">
            <img src={firm.image} />
            <h2>{firm.name}</h2>
            <h3>{firm.location}</h3>
          </div>
        ))}
        <div className="addFirmBtn">
          <button onClick={addFirmHandler}>Add Restaurant</button>
        </div>
      </div>
    </>
  );
};
export default AllRestaurants;
