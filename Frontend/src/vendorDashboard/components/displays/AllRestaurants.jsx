const sampleRestaurants = [
  {
    name: "Tandoori Palace",
    location: "123 Main Street, Mumbai",
    image:
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "20% off on all North Indian dishes",
    category: ["Non-Veg"],
    type: ["North Indian"],
    product: [
      "6123456789abcdef01234567", // Product ID for a product related to this restaurant
      "6123456789abcdef01234568",
      "6123456789abcdef01234569",
    ],
    owner: "6123456789abcdef01234582", // Vendor ID for the restaurant owner
  },
  {
    name: "Veggie Delight",
    location: "456 Green Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Buy 1 Get 1 Free on Desserts",
    category: ["Veg"],
    type: ["South Indian", "Desserts"],
    product: [
      "6123456789abcdef01234570",
      "6123456789abcdef01234571",
      "6123456789abcdef01234572",
    ],
    owner: "6123456789abcdef01234583", // Vendor ID for the restaurant owner
  },
  {
    name: "Dragon's Breath",
    location: "789 Red Street, Chennai",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Free starter with every Chinese meal",
    category: ["Non-Veg"],
    type: ["Chinese"],
    product: [
      "6123456789abcdef01234573",
      "6123456789abcdef01234574",
      "6123456789abcdef01234575",
    ],
    owner: "6123456789abcdef01234584", // Vendor ID for the restaurant owner
  },
  {
    name: "Tandoori Palace",
    location: "123 Main Street, Mumbai",
    image:
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "20% off on all North Indian dishes",
    category: ["Non-Veg"],
    type: ["North Indian"],
    product: [
      "6123456789abcdef01234567", // Product ID for a product related to this restaurant
      "6123456789abcdef01234568",
      "6123456789abcdef01234569",
    ],
    owner: "6123456789abcdef01234582", // Vendor ID for the restaurant owner
  },
  {
    name: "Veggie Delight",
    location: "456 Green Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Buy 1 Get 1 Free on Desserts",
    category: ["Veg"],
    type: ["South Indian", "Desserts"],
    product: [
      "6123456789abcdef01234570",
      "6123456789abcdef01234571",
      "6123456789abcdef01234572",
    ],
    owner: "6123456789abcdef01234583", // Vendor ID for the restaurant owner
  },
  {
    name: "Dragon's Breath",
    location: "789 Red Street, Chennai",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Free starter with every Chinese meal",
    category: ["Non-Veg"],
    type: ["Chinese"],
    product: [
      "6123456789abcdef01234573",
      "6123456789abcdef01234574",
      "6123456789abcdef01234575",
    ],
    owner: "6123456789abcdef01234584", // Vendor ID for the restaurant owner
  },
  {
    name: "Tandoori Palace",
    location: "123 Main Street, Mumbai",
    image:
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "20% off on all North Indian dishes",
    category: ["Non-Veg"],
    type: ["North Indian"],
    product: [
      "6123456789abcdef01234567", // Product ID for a product related to this restaurant
      "6123456789abcdef01234568",
      "6123456789abcdef01234569",
    ],
    owner: "6123456789abcdef01234582", // Vendor ID for the restaurant owner
  },
  {
    name: "Veggie Delight",
    location: "456 Green Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Buy 1 Get 1 Free on Desserts",
    category: ["Veg"],
    type: ["South Indian", "Desserts"],
    product: [
      "6123456789abcdef01234570",
      "6123456789abcdef01234571",
      "6123456789abcdef01234572",
    ],
    owner: "6123456789abcdef01234583", // Vendor ID for the restaurant owner
  },
  {
    name: "Dragon's Breath",
    location: "789 Red Street, Chennai",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Free starter with every Chinese meal",
    category: ["Non-Veg"],
    type: ["Chinese"],
    product: [
      "6123456789abcdef01234573",
      "6123456789abcdef01234574",
      "6123456789abcdef01234575",
    ],
    owner: "6123456789abcdef01234584", // Vendor ID for the restaurant owner
  },
  {
    name: "Tandoori Palace",
    location: "123 Main Street, Mumbai",
    image:
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "20% off on all North Indian dishes",
    category: ["Non-Veg"],
    type: ["North Indian"],
    product: [
      "6123456789abcdef01234567", // Product ID for a product related to this restaurant
      "6123456789abcdef01234568",
      "6123456789abcdef01234569",
    ],
    owner: "6123456789abcdef01234582", // Vendor ID for the restaurant owner
  },
  {
    name: "Veggie Delight",
    location: "456 Green Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Buy 1 Get 1 Free on Desserts",
    category: ["Veg"],
    type: ["South Indian", "Desserts"],
    product: [
      "6123456789abcdef01234570",
      "6123456789abcdef01234571",
      "6123456789abcdef01234572",
    ],
    owner: "6123456789abcdef01234583", // Vendor ID for the restaurant owner
  },
  {
    name: "Dragon's Breath",
    location: "789 Red Street, Chennai",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Free starter with every Chinese meal",
    category: ["Non-Veg"],
    type: ["Chinese"],
    product: [
      "6123456789abcdef01234573",
      "6123456789abcdef01234574",
      "6123456789abcdef01234575",
    ],
    owner: "6123456789abcdef01234584", // Vendor ID for the restaurant owner
  },
  {
    name: "Tandoori Palace",
    location: "123 Main Street, Mumbai",
    image:
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "20% off on all North Indian dishes",
    category: ["Non-Veg"],
    type: ["North Indian"],
    product: [
      "6123456789abcdef01234567", // Product ID for a product related to this restaurant
      "6123456789abcdef01234568",
      "6123456789abcdef01234569",
    ],
    owner: "6123456789abcdef01234582", // Vendor ID for the restaurant owner
  },
  {
    name: "Veggie Delight",
    location: "456 Green Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Buy 1 Get 1 Free on Desserts",
    category: ["Veg"],
    type: ["South Indian", "Desserts"],
    product: [
      "6123456789abcdef01234570",
      "6123456789abcdef01234571",
      "6123456789abcdef01234572",
    ],
    owner: "6123456789abcdef01234583", // Vendor ID for the restaurant owner
  },
  {
    name: "Dragon's Breath",
    location: "789 Red Street, Chennai",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offer: "Free starter with every Chinese meal",
    category: ["Non-Veg"],
    type: ["Chinese"],
    product: [
      "6123456789abcdef01234573",
      "6123456789abcdef01234574",
      "6123456789abcdef01234575",
    ],
    owner: "6123456789abcdef01234584", // Vendor ID for the restaurant owner
  },
];

const AllRestaurants = () => {
  return (
    <>
      <div className="firmDisplay">
        {sampleRestaurants.map((firm) => (
          <div className="firmCard">
            <img src={firm.image} />
            <h2>{firm.name}</h2>
            <h3>{firm.location}</h3>
          </div>
        ))}
        <div className="addFirmBtn">
          <button>Add Restaurant</button>
        </div>
      </div>
    </>
  );
};
export default AllRestaurants;
