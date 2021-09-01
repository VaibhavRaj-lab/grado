import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// import ViewBlogs from "./ViewBlogs";
import AddBlog from "./AddBlog";
import ViewBlogs from "./ViewBlogs";
import Categories from "./Categories";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import { useStateValue } from "../../../../StateProvider";

function Blog(props) {
  const [value, setValue] = React.useState(0);
  const [state, dispatch] = useStateValue();

  const filterTabBlogs = (e) => {};
  useEffect(async () => {
    const blogs = await fetch("http://localhost:3001/blogs/get");
    const blogsData = await blogs.json();

    dispatch({
      type: "Add_Blogs",
      item: blogsData,
    });
  }, []);
  console.log(value);
  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Blogs" />
          <Tab label="Add Blog" />

          <Tab label="Category" />
        </Tabs>
        <div style={{ marginTop: "30px" }}>
          {value === 0 ? (
            <ViewBlogs></ViewBlogs>
          ) : value === 1 ? (
            <AddBlog></AddBlog>
          ) : (
            <Categories />
          )}
        </div>
      </Paper>
    </div>
  );
}

export default Blog;
