import { React, useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useStateValue } from "../../../../StateProvider";

function CourseForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [{ condition }, dispatch] = useStateValue();
  const [endDate, setEndDate] = useState(new Date());
  const [input, setinput] = useState({
    name: "",
    description: "",
    author: "",
    education: "",
    experience: "",
    basicRealPrice: "",
    basicFakePrice: "",
    adRealPrice: "",
    adFakePrice: "",
  });

  let name, value;
  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinput({ ...input, [name]: value });
    console.log(input);
  };
  console.log(startDate);
  const addCourse = async (e) => {
    console.log(input);
    const {
      name,
      description,
      author,
      education,
      experience,
      basicRealPrice,
      basicFakePrice,
      adRealPrice,
      adFakePrice,
    } = input;

    const info = await fetch("http://localhost:3001/course/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        author,
        education,
        experience,
        startDate,
        endDate,
        basicRealPrice,
        basicFakePrice,
        adFakePrice,
        adRealPrice,
      }),
    });
    const data = await info.json();
    console.log(data);
    if (data.course) {
      dispatch({
        type: "Course_Condition",
        item: false,
      });
      alert("Course Created");
    }
    if (data.message) {
      console.log("err");
    }
  };

  return (
    <FormGroup className="container">
      <Typography variant="h4">Add Courses</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Course Name</InputLabel>
        <Input
          onChange={changeHandler}
          name="name"
          value={input.name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Description</InputLabel>
        <Input
          onChange={changeHandler}
          name="description"
          value={input.description}
          id="my-input"
        />
      </FormControl>

      <h6>Start Date</h6>
      <DatePicker
        selected={startDate}
        name="start"
        onChange={(date) => setStartDate(date)}
      >
        Start date
      </DatePicker>
      <h6>End Date</h6>
      <DatePicker
        selected={endDate}
        name="start"
        onChange={(date) => setEndDate(date)}
      >
        Start date
      </DatePicker>
      <FormControl>
        <InputLabel htmlFor="my-input">Author Name</InputLabel>
        <Input
          onChange={changeHandler}
          name="author"
          value={input.author}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Author Qualification</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          value={input.education}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Author Address</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          value={input.education}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Author Photo</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          value={input.education}
          id="my-input"
          type="file"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Author Identification ID</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          value={input.education}
          id="my-input"
          type="file"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Bank Account Number </InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          value={input.education}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Passbook Photo</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          value={input.education}
          id="my-input"
          type="file"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Experience</InputLabel>
        <Input
          onChange={changeHandler}
          name="experience"
          value={input.experience}
          id="my-input"
        />
      </FormControl>

      <FormControl style={{ marginTop: "15px" }}>
        <Typography variant="h6">Basic Plan</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Real Price</p>
            <Input
              onChange={changeHandler}
              name="basicRealPrice"
              value={input.basicRealPrice}
              id="my-input"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Fake Price</p>

            <Input
              onChange={changeHandler}
              name="basicFakePrice"
              value={input.basicFakePrice}
              id="my-input"
            />
          </div>
        </div>
      </FormControl>
      <FormControl style={{ marginTop: "20px" }}>
        <Typography variant="h6">Advance Plan</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Real Price</p>
            <Input
              onChange={changeHandler}
              name="adRealPrice"
              value={input.adRealPrice}
              id="my-input"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Fake Price</p>

            <Input
              onChange={changeHandler}
              name="adFakePrice"
              value={input.adFakePrice}
              id="my-input"
            />
          </div>
        </div>
      </FormControl>
      <FormControl>
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          onClick={() => addCourse()}
        >
          Add Category
        </Button>
      </FormControl>
    </FormGroup>
  );
}

export default CourseForm;
