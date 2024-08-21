import { useState } from "react";
import { API_URL } from "../constants";

const VendorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/vendor/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw Error(data.error);
        }
        setEmail("");
        setPassword("");
        window.localStorage.setItem("token", data.token);
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
export default VendorLogin;
