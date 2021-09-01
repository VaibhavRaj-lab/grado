import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewPassword(props) {
  const history = useHistory();
  const [input, setinput] = useState({ email: "", password: "" });
  let name, value;

  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinput({ ...input, [name]: value });
    console.log(input);
  };

  const ResetHandler = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    console.log(id);
    const { email, password } = input;
    const info = await fetch("http://localhost:3001/user/newpassword", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, id }),
    });
    const data = await info.json();
    if (data) {
      alert("password");
      history.push("/login");
    }
    console.log(data);
  };
  return (
    <div>
      <input
        placeholder="Username / Email"
        type="text"
        className="fs-4 form-control mb-3"
        name="email"
        value={input.email}
        onChange={inputHandler}
      />
      <input
        placeholder="New Password"
        type="text"
        className="fs-4 form-control mb-3"
        name="password"
        value={input.password}
        onChange={inputHandler}
      />
      <button onClick={ResetHandler}>Reset</button>
    </div>
  );
}

export default NewPassword;
