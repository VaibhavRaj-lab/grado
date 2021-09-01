import React, { useEffect, useState } from "react";
import img_profile_pic from "./img/profile_pic.svg";
import img_pensil from "./img/pensil.svg";
import "./Profile.scss";
import { useStateValue } from "../../../StateProvider";

function Profile() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [role, setRole] = useState("");
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  useEffect(async () => {
    const name = localStorage.getItem("user");
    const usern = await JSON.parse(name);
    console.log(usern.name);
    setusername(usern.name);
    setemail(usern.email);
    setRole(usern.role);
  }, []);

  return (
    <div id="component_profile">
      <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center gap-lg-5">
        <div className="">
          <img className="profile_pic mx-auto" src={img_profile_pic} />
        </div>
        <div className="flex-lg-grow-1">
          <div className="text-end my-3">
            <a
              href="#"
              className="text-decoration-none fs-5 fw-bold secondary-color-text"
            >
              Edit profile
            </a>
          </div>
          <div className="my-3">
            <h1>{username}</h1>
            <div className="text-muted">
              <p className="fs-6">{email}</p>
              <p className="fs-5">{role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 my-lg-5 gap-3 gap-lg-5 d-flex justify-content-evenly justify-content-lg-center align-items-start text-center secondary-color-text">
        <div className="">
          <h4 className="">Courses</h4>
          <p className="display-5 fw-bold">3</p>
        </div>
        <div className="">
          <h4 className="">Posts</h4>
          <p className="display-5 fw-bold">10</p>
        </div>
        <div className="">
          <h4 className="">Liked courses</h4>
          <p className="display-5 fw-bold">24</p>
        </div>
      </div>
      <div className="my-3 d-flex justify-content-between align-items-center primary-color-text">
        <span className="fs-3   ">Personal Details</span>
        <span className="pensil_badge ">
          <img src={img_pensil} />
        </span>
      </div>
      <div className="fs-5 px-3">
        <div className="mb-5">
          {/* {this.details.map((detail, index) => {
            return (
              <div key={index} className="row text-start text-muted my-2">
                <div className="col-lg details_head fw-bold">{detail.name}</div>
                <div className="col-lg">{detail.value}</div>
              </div>
            );
          })} */}
        </div>
        <div className="mt-3 mt-lg-5 gap-3 gap-lg-5 d-flex flex-column flex-lg-row justify-content-lg-between">
          <div className="d-grid flex-fill">
            <button className="btn btn-lg border-3 fw-bold btn-primary">
              Chat With Mentor
            </button>
          </div>
          <div className="d-grid  flex-fill">
            <button className="btn btn-lg border-3 fw-bold btn-primary-outline">
              Book your slot
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Profile;
