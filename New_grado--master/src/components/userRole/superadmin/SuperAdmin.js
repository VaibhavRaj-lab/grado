import React, { useEffect } from "react";
import Profile from "../../Userprofile/Profile/Profile";
import SuperSidebar from "./SuperSidebar";
import "./super.scss";
import Blog from "./Blog/Blog";
import PersonalMentors from "../../Userprofile/Personal_mentors/Personal_mentors";
import Dashboard from "./dashboard/Dashboard";
import Courses from "./Courses/Courses";
import { useStateValue } from "../../../StateProvider";
import { CompassCalibrationOutlined } from "@material-ui/icons";
import ManageSuperAdmin from "./manageSuperadmin/ManageSuperAdmin";
import Opportunity from "./opportunities/Opportunity";

function SuperAdmin(props) {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  useEffect(() => {
    // console.log(user);
    console.log(typeof user);
    console.log(user);
    if (user === "Profile") {
      console.log("profile");
    }
  }, [user]);
  return (
    <div id="component_userprofile">
      <div className="usermain align-items-stretch d-flex flex-column flex-lg-row">
        <SuperSidebar active_path={""} />
        <div className="container p-5">
          {(() => {
            switch (user) {
              case "Logout":
                return <div>You are Logged Out.</div>;
              case "Courses":
                return <Courses></Courses>;
              case "Blog":
                return <Blog></Blog>;
              case "Mentors":
                return <PersonalMentors></PersonalMentors>;
              case "Manage SuperAdmin":
                return <ManageSuperAdmin></ManageSuperAdmin>;
              case "Opportunities":
                return <Opportunity></Opportunity>;
              default:
                return <Dashboard></Dashboard>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
