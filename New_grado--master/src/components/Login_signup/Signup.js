import React, { useEffect, useState } from "react";
import Header from "./Header";
import img_cover from "./img/cover.svg";
import icon_facebook from "./img/icon_facebook.svg";
import icon_google from "./img/icon_google.svg";
import icon_linkedin from "./img/icon_linkedin.svg";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";

function Signup() {
  const [input, setinput] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    interest: "",
  });
  const [show_modal, setShow_modal] = useState(false);

  const handle_modal = () => {
    setShow_modal(false);
  };
  const handleClose = () => {
    setShow_modal(false);
  };
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
    const { email, password, name, phone, interest } = input;
    // console.log(email);
    const info = await fetch("http://localhost:3001/user/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, name, phone, interest }),
    });
    const data = await info.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("token", data.token);

      history.push("/");
    }
  };
  return (
    <div id="component_signup">
      <Header />
      <div className="container component_login_signup">
        <div className="row">
          <div className="col-lg">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <h1 className="fw-bold text-center">Signup</h1>
                <div className="p-3 p-md-5">
                  <form>
                    <input
                      placeholder="Username"
                      type="text"
                      className="fs-4 form-control  mb-3"
                      name="name"
                      value={input.name}
                      onChange={inputHandler}
                    />
                    <input
                      placeholder="Email"
                      type="text"
                      className="fs-4 form-control  mb-3"
                      name="email"
                      value={input.email}
                      onChange={inputHandler}
                    />
                    <input
                      placeholder="Phone"
                      type="text"
                      className="fs-4 form-control  mb-3"
                      name="phone"
                      value={input.phone}
                      onChange={inputHandler}
                    />
                    <input
                      placeholder="Interest"
                      type="text"
                      className="fs-4 form-control  mb-3"
                      name="interest"
                      value={input.interest}
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
                    <Link to="/reset">
                      <p className="text-end forget_section">
                        <a className="text-decoration-none fs-5" href="#">
                          Forget Password ?
                        </a>
                      </p>
                    </Link>
                    <div className="my-3 mt-lg-5 d-flex flex-row flex-xl-column justify-content-lg-center align-items-center">
                      <button
                        onClick={LoginHandler}
                        type="button"
                        className="flex-fill btn btn-lg px-5 py-lg-3 text-white fw-bold"
                      >
                        Signup
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
                  <span className="me-2">Already have an account?</span>
                  <Link className="text-decoration-none" to="/login">
                    Login
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
        <Modal
          fullscreen="md-down"
          size="lg"
          className="signup_modal"
          onHide={handleClose}
          show={show_modal}
        >
          <Modal.Header className="border-0" closeButton></Modal.Header>
          <Modal.Body>
            <div className="mx-auto card border-0 bg-transparent">
              <div className="card-body">
                <div className="modal-text-primary h1 fw-bold text-center">
                  ***
                </div>
                <h2 className="h1 my-3 text-center">Verification</h2>
                <p className="text-center lead">
                  We had just sent an otp verification to your email. Enter
                  below to verify{" "}
                </p>
                <div className="d-flex justify-content-center">
                  <div className="my-3 otp-form">
                    <form>
                      <input
                        placeholder="XXXX"
                        type="text"
                        className="fs-3 fw-bold form-control text-center mb-3"
                      />
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-lg py-3 fw-bold"
                        >
                          Verify
                        </button>
                      </div>
                    </form>
                    <p className="py-3 lead text-center">
                      <span>Didn’t recieve the OTP</span>
                      <button className="resend_otp mx-2 fw-bold btn btn-link text-decoration-none">
                        Resend OTP
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Signup;
