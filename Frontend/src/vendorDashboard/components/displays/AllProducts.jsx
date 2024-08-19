const restaData = {
  name: "Tandoori Palace",
  location: "123 Main Street, Mumbai",
  image:
    "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  category: ["Non-Veg"],
  type: ["North Indian"],
  product: [
    {
      name: "Masala Dosa",
      price: 120,
      image: "images/masala_dosa.jpg",
      category: ["Veg"],
      type: "South Indian",
      bestseller: true,
      restaurant: "6123456789abcdef01234567",
    },
    {
      name: "Chicken Biryani",
      price: 200,
      image: "images/chicken_biryani.jpg",
      category: ["Non-Veg"],
      type: "North Indian",
      bestseller: true,
      restaurant: "6123456789abcdef01234568",
    },
    {
      name: "Paneer Butter Masala",
      price: 180,
      image: "images/paneer_butter_masala.jpg",
      category: ["Veg"],
      type: "North Indian",
      bestseller: false,
      restaurant: "6123456789abcdef01234569",
    },
    {
      name: "Veg Fried Rice",
      price: 150,
      image: "images/veg_fried_rice.jpg",
      category: ["Veg"],
      type: "Chinese",
      bestseller: false,
      restaurant: "6123456789abcdef01234570",
    },
    {
      name: "Gulab Jamun",
      price: 80,
      image: "images/gulab_jamun.jpg",
      category: ["Veg"],
      type: "Desserts",
      bestseller: true,
      restaurant: "6123456789abcdef01234571",
    },
    {
      name: "Chicken Manchurian",
      price: 160,
      image: "images/chicken_manchurian.jpg",
      category: ["Non-Veg"],
      type: "Chinese",
      bestseller: true,
      restaurant: "6123456789abcdef01234572",
    },
    {
      name: "Butter Chicken",
      price: 220,
      image: "images/butter_chicken.jpg",
      category: ["Non-Veg"],
      type: "North Indian",
      bestseller: true,
      restaurant: "6123456789abcdef01234573",
    },
    {
      name: "Rasgulla",
      price: 70,
      image: "images/rasgulla.jpg",
      category: ["Veg"],
      type: "Desserts",
      bestseller: false,
      restaurant: "6123456789abcdef01234574",
    },
    {
      name: "Hakka Noodles",
      price: 140,
      image: "images/hakka_noodles.jpg",
      category: ["Veg"],
      type: "Chinese",
      bestseller: false,
      restaurant: "6123456789abcdef01234575",
    },
    {
      name: "Mutton Rogan Josh",
      price: 250,
      image: "images/mutton_rogan_josh.jpg",
      category: ["Non-Veg"],
      type: "North Indian",
      bestseller: true,
      restaurant: "6123456789abcdef01234576",
    },
    {
      name: "Pesarattu",
      price: 100,
      image: "images/pesarattu.jpg",
      category: ["Veg"],
      type: "South Indian",
      bestseller: false,
      restaurant: "6123456789abcdef01234577",
    },
    {
      name: "Fish Curry",
      price: 210,
      image: "images/fish_curry.jpg",
      category: ["Non-Veg"],
      type: "South Indian",
      bestseller: true,
      restaurant: "6123456789abcdef01234578",
    },
    {
      name: "Samosa",
      price: 30,
      image: "images/samosa.jpg",
      category: ["Veg"],
      type: "North Indian",
      bestseller: false,
      restaurant: "6123456789abcdef01234579",
    },
    {
      name: "Ras Malai",
      price: 90,
      image: "images/ras_malai.jpg",
      category: ["Veg"],
      type: "Desserts",
      bestseller: true,
      restaurant: "6123456789abcdef01234580",
    },
    {
      name: "Chicken 65",
      price: 170,
      image: "images/chicken_65.jpg",
      category: ["Non-Veg"],
      type: "South Indian",
      bestseller: false,
      restaurant: "6123456789abcdef01234581",
    },
  ],
  owner: "6123456789abcdef01234582",
};

const AllProducts = () => {
  return (
    <>
      <div className="productDisplay">
        <div className="firmInfo">
          <img src={restaData.image} />
          <div className="firmDesc">
            <h2>{restaData.name}</h2>
            <h3>{restaData.location}</h3>
            <p>{restaData.offer}</p>
            <p>
              <b>Category: </b> {restaData.category.map((item) => item + " ")}
            </p>
            <p>
              <b>Cusines: </b> {restaData.type.map((item) => item + " ")}
            </p>
          </div>
        </div>
        <div className="productList">
          {restaData.product.map((prod) => (
            <div className="productCard">
              <img src={prod.image} />
              <p className="title">{prod.name}</p>
              <p className="price">{prod.price}</p>
              <p className="category">{prod.category}</p>
              <p className="bestseller">
                {prod.bestseller ? "Bestseller" : ""}
              </p>
            </div>
          ))}
        </div>
        <div className="addProductBtn">
          <button>Add Product</button>
        </div>
      </div>
    </>
  );
};
export default AllProducts;
