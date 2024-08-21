import { useState } from "react";
import { API_URL } from "../constants";

const VendorRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/vendor/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw Error(data.error);
        }
        setEmail("");
        setPassword("");
        setUsername("");
        alert(data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Vendor Name"
      ></input>
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      ></input>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      ></input>
      <br />
      <div className="submitBtn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default VendorRegister;
