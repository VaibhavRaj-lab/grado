import img_navbar_brand from "./img/navbar_brand.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [logged, setLogged] = useState(false);
  let token;
  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [token]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setLogged(false);
  };
  return (
    <>
      <div
        id="component_navbar"
        className="navbar navbar-expand-lg navbar-dark py-3 sticky-top"
      >
        <div className="container-fluid container-lg">
          <Link className="navbar-brand" to="/">
            <img src={img_navbar_brand} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_links"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbar_links" className="navbar-collapse collapse">
            <ul className="navbar-nav ps-3 fs-4 ms-auto align-items-lg-center">
              <li className="nav-item me-lg-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-lg-3">
                <Link to="/courses" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item me-lg-3">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item me-lg-3">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item ms-lg-3"></li>
            </ul>
            {logged ? (
              <Link
                className="mt-3 mt-lg-auto d-block d-lg-inline-block btn btn-lg fw-bold px-5"
                onClick={logoutHandler}
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="mt-3 mt-lg-auto d-block d-lg-inline-block btn btn-lg fw-bold px-5"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
