import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Student from "./student/Student";
import SuperAdmin from "./superadmin/SuperAdmin";
import Teacher from "./Teacher/Teacher";

function UserRole(props) {
  const [userRole, setUserRole] = useState("");
  const history = useHistory();
  useEffect(() => {
    const role = JSON.parse(localStorage.getItem("user"));
    if (role === null) {
      history.push("/login");
    } else {
      setUserRole(role.role);
    }
  }, []);
  return (
    <div>
      {/* <Sidebar active_path={""} /> */}

      {userRole === "basic" ? (
        <Student></Student>
      ) : userRole === "admin" ? (
        <SuperAdmin></SuperAdmin>
      ) : (
        <Teacher></Teacher>
      )}
    </div>
  );
}

export default UserRole;
