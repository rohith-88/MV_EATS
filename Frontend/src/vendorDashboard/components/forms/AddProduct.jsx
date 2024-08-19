const AddProduct = () => {
  return (
    <div className="addFormContainer">
      <form>
        <label>Product Name</label>
        <br />
        <input type="text" placeholder="Enter Name" />
        <br />
        <label>Price</label>
        <br />
        <input type="number" placeholder="Enter Price" />
        <br />
        <label>Cusine Type</label>
        <div className="cusines">
          <input type="checkbox" id="South Indian" value="South Indian" />
          South Indian
          <input type="checkbox" id="North Indian" value="North Indian" />
          North Indian
          <input type="checkbox" id="Chinese" value="Chinese" />
          Chinese
          <input type="checkbox" id="Desserts value=" Desserts />
          Desserts
        </div>
        <label>Category</label>
        <div className="foodCategory">
          <input type="checkbox" id="Veg" value="Veg" />
          Veg
          <input type="checkbox" id="Non-Veg value=" Non-Veg />
          Non-Veg
        </div>
        <label>Bestseller</label>
        <div className="bestseller">
          <input type="radio" name="bestseller" id="Yes" />
          Yes
          <input type="radio" name="bestseller" id="No" />
          No
        </div>
        <label>Image</label>
        <br />
        <input type="file" name="image" id="firmImage" />
        <br />
        <div className="submitBtn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
