import React, { useEffect, useState } from "react";
import Header from "./Header";
import img_cover from "./img/cover.svg";
import icon_facebook from "./img/icon_facebook.svg";
import icon_google from "./img/icon_google.svg";
import icon_linkedin from "./img/icon_linkedin.svg";
import { Link, useHistory } from "react-router-dom";
import { ContactSupportOutlined } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const [input, setinput] = useState({ email: "", password: "" });
  let name, value;
  const history = useHistory();
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinput({ ...input, [name]: value });
    console.log(input);
  };
  const LoginHandler = async (e) => {
    e.preventDefault();
    // setdatas(true);
    console.log(input);
    const { email, password } = input;
    // console.log(email);
    const token = localStorage.getItem("token");
    console.log(token);
    const info = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, token }),
    });
    const data = await info.json();
    console.log(data);
    if (data.token) {
      dispatch({
        type: "Add_User",
        item: data,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      history.push("/userrole");
    }
  };
  return (
    <div id="component_login">
      <Header />
      <div className="container component_login_signup">
        <div className="row">
          <div className="col-lg">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <h1 className="fw-bold text-center">Login</h1>
                <div className="p-3 p-md-5">
                  <form>
                    <input
                      placeholder="Username / Email"
                      type="text"
                      className="fs-4 form-control mb-3"
                      name="email"
                      value={input.email}
                      onChange={inputHandler}
                    />
                    <input
                      placeholder="Password"
                      type="text"
                      className="fs-4 form-control mb-3"
                      name="password"
                      value={input.password}
                      onChange={inputHandler}
                    />
                    <p className="text-end forget_section">
                      <Link to="/reset">
                        <a className="text-decoration-none fs-5" href="#">
                          Forget Password ?
                        </a>
                      </Link>
                    </p>
                    <div className="my-3 mt-lg-5 d-flex flex-row flex-xl-column justify-content-lg-center align-items-center">
                      <button
                        type="button"
                        className="flex-fill btn btn-lg px-5 py-lg-3 text-white fw-bold"
                        onClick={LoginHandler}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div className="gap-3 d-flex justify-content-center align-items-center">
                  <a href="#">
                    <img src={icon_facebook} />
                  </a>
                  <a href="#">
                    <img src={icon_google} />
                  </a>
                  <a href="#">
                    <img src={icon_linkedin} />
                  </a>
                </div>
                <p className="other_section my-3 text-center lead">
                  <span className="me-2">Don’t have an account?</span>
                  <Link className="text-decoration-none" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="d-none d-lg-block">
              <img className="img-fluid" src={img_cover} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
