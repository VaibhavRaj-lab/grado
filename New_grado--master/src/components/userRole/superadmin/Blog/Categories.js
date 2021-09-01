import React, { useEffect } from "react";
import { useStateValue } from "../../../../StateProvider";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
// import { FormGroup } from "@material-ui/core";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
} from "@material-ui/core";
function Categories(props) {
  useEffect(async () => {
    const blogs = await fetch("http://localhost:3001/blogs/get");
    const blogsData = await blogs.json();

    dispatch({
      type: "Add_Blogs",
      item: blogsData,
    });
  }, []);
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  const [{ filterBlogs, blogs }, dispatch] = useStateValue();
  const filterHandler = (e) => {
    const filter = e.target.getAttribute("value");
    const updatelist = blogs.filter((blog) => {
      return blog.category === filter;
    });
    dispatch({
      type: "Update_Blogs",
      item: updatelist,
    });
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
            // onChange={changeHandler}
            name="title"
            // value={input.title}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Title</InputLabel>
          <Input
            // onChange={changeHandler}
            name="title"
            // value={input.title}
            id="my-input"
          />
        </FormControl>
      </FormGroup>
    </div>
  );
}

export default Categories;
