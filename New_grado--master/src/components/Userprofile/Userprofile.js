import React from "react";
import "./Userprofile.scss";
import Sidebar from "./Sidebar";
import PersonalMentors from "./Personal_mentors/Personal_mentors";
import ChangePass from "./Change_pass/ChangePass";
import Profile from "./Profile/Profile";

function Userprofile(props) {
  const paths = {
    "/profile": <Profile />,
    "/personal_mentor": <PersonalMentors />,
    "/change_pass": <ChangePass />,
  };
  const link = props.link;
  const state = {
    active_page: paths[link],
    active_path: link,
  };

  return (
    <div id="component_userprofile">
      <div className="usermain align-items-stretch d-flex flex-column flex-lg-row">
        <Sidebar active_path={state.active_path} />
        <div className="container p-5">{state.active_page}</div>
      </div>
    </div>
  );
}

export default Userprofile;
