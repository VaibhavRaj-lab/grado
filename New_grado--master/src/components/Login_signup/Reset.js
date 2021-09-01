import React, { useState } from "react";

function Reset(props) {
  const [input, setinput] = useState({ email: "" });
  const [emailSent, setEmailSent] = useState(false);
  let name, value;

  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinput({ ...input, [name]: value });
    console.log(input);
  };

  const ResetHandler = async (e) => {
    e.preventDefault();
    const { email } = input;
    const info = await fetch("http://localhost:3001/user/reset", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer" + localStorage.getItem("token"),
      },
      body: JSON.stringify({ email }),
    });
    const data = await info.json();
    console.log(data);
    if (data) {
      setEmailSent(true);
    }
  };
  return (
    <div className="p-3 p-md-5 w-auto d-flex justify-content-center align-items-center ">
      {emailSent ? (
        <h1>
          Email has been sent to the recipient Email Address .Find the link in
          your email to change password for your account
        </h1>
      ) : (
        <form>
          <h5>
            Enter your email address below and we'll send you a link to reset
            your password.
          </h5>
          <input
            placeholder="Username / Email"
            type="text"
            className="fs-4 form-control mb-3"
            name="email"
            value={input.email}
            onChange={inputHandler}
          />
          <button
            type="button"
            className="flex-fill btn btn-primary btn-lg text-black fw-bold py-lg-2 "
            onClick={ResetHandler}
          >
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

export default Reset;
