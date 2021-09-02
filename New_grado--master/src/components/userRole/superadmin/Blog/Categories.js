import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../../StateProvider";
import {
  DataGrid,
  gridColumnsTotalWidthSelector,
  GridToolbar,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
// import { FormGroup } from "@material-ui/core";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Categories(props) {
  const [{ filterBlogs, blogs, category }, dispatch] = useStateValue();
  const history = useHistory();
  const [input, setinput] = useState({
    category: "",
  });
  useEffect(async () => {
    const blogs = await fetch("http://localhost:3001/blogs/get");
    const blogsData = await blogs.json();

    dispatch({
      type: "Add_Blogs",
      item: blogsData,
    });
  }, []);
  console.log(blogs);
  var output = blogs.map((s) => ({
    id: s._id,
    title: s.title,
    description: s.description,
    author: s.author,
    category: s.category,
  }));
  console.log(output);
  const data = {
    columns: [
      { field: "id", headerName: "Sr No", width: 150, editable: false },
      { field: "title", headerName: "Title", width: 250, editable: false },
      {
        field: "description",
        headerName: "Description",
        width: 250,
        editable: false,
      },
      {
        field: "author",
        headerName: "Author",
        width: 250,
        editable: false,
      },
      { field: "category", headerName: "Category", width: 250 },
    ],
    rows: [...output],
  };

  const changeHandler = (e) => {
    let name, value;

    name = e.target.name;
    value = e.target.value;
    setinput({ ...input, [name]: value });
  };
  const addCategory = async (e) => {
    const { category } = input;
    // console.log(email);
    const info = await fetch("http://localhost:3001/category/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ category }),
    });
    const data = await info.json();
    if (data.message) {
      console.log(data);
    }
    if (data.categorydata) {
      console.log(data.categorydata.Upcategory);
      dispatch({
        type: "Push_Category",
        item: data.categorydata.Upcategory,
      });
    }
  };

  console.log(filterBlogs);
  return (
    <div class="d-flex">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          {...data}
          components={{
            Toolbar: GridToolbar,
          }}
          filterModel={{
            items: [
              {
                columnField: "commodity",
                operatorValue: "contains",
                value: "rice",
              },
            ],
          }}
        />
      </div>
      <FormGroup className="container">
        <Typography variant="h4">Add Category</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input"> Category</InputLabel>
          <Input
            onChange={changeHandler}
            name="category"
            value={input.category}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="primary"
            onClick={() => addCategory()}
          >
            Add Category
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
}

export default Categories;
