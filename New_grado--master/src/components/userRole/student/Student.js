import React from "react";
import Profile from "../../Userprofile/Profile/Profile";
import Sidebar from "../../Userprofile/Sidebar";
import "./student.scss";
function Student(props) {
  return (
    <div id="component_userprofile">
      <div className="usermain align-items-stretch d-flex flex-column flex-lg-row">
        <Sidebar active_path={""} />
        <div className="container p-5">
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
}

export default Student;
