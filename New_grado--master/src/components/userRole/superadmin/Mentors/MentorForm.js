import React from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
function MentorForm(props) {
  const changeHandler = () => {};
  return (
    <FormGroup className="container">
      <Typography variant="h4">Add Mentor</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Mentor Name</InputLabel>
        <Input
          onChange={changeHandler}
          name="author"
          //   value={input.author}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Mentor Qualification</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          //   value={input.education}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Mentor Address</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          //   value={input.education}
          id="my-input"
        />
      </FormControl>

      <FormControl
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{ width: "100px", display: "flex", flexDirection: "column" }}
        >
          <label>Start Time</label>
          <Input
            onChange={changeHandler}
            name="education"
            //   value={input.education}
            id="my-input"
            type="time"
          />
        </div>
        <div
          style={{
            width: "100px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px",
          }}
        >
          <label>End Time</label>
          <Input
            onChange={changeHandler}
            name="education"
            //   value={input.education}
            id="my-input"
            type="time"
          />
        </div>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Mentor Photo</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          //   value={input.education}
          id="my-input"
          type="file"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Mentor Identification ID</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          //   value={input.education}
          id="my-input"
          type="file"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Bank Account Number </InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          //   value={input.education}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Passbook Photo</InputLabel>
        <Input
          onChange={changeHandler}
          name="education"
          //   value={input.education}
          id="my-input"
          type="file"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input"> Experience</InputLabel>
        <Input
          onChange={changeHandler}
          name="experience"
          //   value={input.experience}
          id="my-input"
        />
      </FormControl>
    </FormGroup>
  );
}

export default MentorForm;
