import React, { useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";

function AddBlog(props) {
  const history = useHistory();
  const [selectCategory, setselectCategory] = useState([]);
  const [input, setinput] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
  });

  let name, value;
  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinput({ ...input, [name]: value });
  };
  console.log(input);

  useEffect(async () => {
    const category = await fetch("http://localhost:3001/category/get");
    const categoryData = await category.json();
    console.log(categoryData);
    setselectCategory(categoryData);
  }, []);
  const addBlog = async (e) => {
    console.log(input);
    const { title, description, author, category } = input;
    // console.log(email);
    const info = await fetch("http://localhost:3001/blogs/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description, author, category }),
    });
    const data = await info.json();
    console.log(data);
    history.push("");
  };
  return (
    <FormGroup className="container">
      <Typography variant="h4">Add Blog</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Title</InputLabel>
        <Input
          onChange={changeHandler}
          name="title"
          value={input.title}
          id="my-input"
        />
      </FormControl>
      <FormControl className="formControl">
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          value={input.category}
          onChange={changeHandler}
        >
          {selectCategory.map((cate) => (
            <MenuItem value={cate.Upcategory}>{cate.Upcategory}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Description</InputLabel>
        <Input
          onChange={changeHandler}
          name="description"
          value={input.description}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Author</InputLabel>
        <Input
          onChange={changeHandler}
          name="author"
          value={input.author}
          id="my-input"
        />
      </FormControl>
      <FormControl></FormControl>
      <FormControl>
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          onClick={() => addBlog()}
        >
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
}

export default AddBlog;
