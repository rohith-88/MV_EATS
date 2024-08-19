const VendorRegister = () => {
  return (
    <form>
      <input type="text" placeholder="Vendor Name"></input>
      <br />
      <input type="text" placeholder="Email"></input>
      <br />

      <input type="password" placeholder="Password"></input>
      <br />
      <div className="submitBtn">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default VendorRegister;
