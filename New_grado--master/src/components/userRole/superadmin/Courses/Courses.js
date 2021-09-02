import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import CourseForm from "./CourseForm";

function Courses(props) {
  const [condition, setCondition] = useState(false);
  const clickHandler = () => {
    setCondition(true);
  };
  return (
    <>
      {condition ? (
        <CourseForm></CourseForm>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Courses</h1>
          <Button variant="contained" color="primary" onClick={clickHandler}>
            ADD COURSE
          </Button>
        </div>
      )}
    </>
  );
}

export default Courses;
