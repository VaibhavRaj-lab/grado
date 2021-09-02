import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useStateValue } from "../../../../StateProvider";
function ViewBlogs(props) {
  const [{ blogs }, dipatch] = useStateValue();
  console.log(blogs);
  var output = blogs.map((s) => ({
    id: s._id,
    title: s.title,
    description: s.description,
    author: s.author,
    category: s.category,
  }));
  console.log(output);
  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 1000,
  //   maxColumns: 6,
  // });
  // console.log(data);

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

  console.log(data);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...data}
        editMode="row"
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={{
          items: [
            {
              columnField: "category",
              operatorValue: "contains",
              value: "",
            },
          ],
        }}
      />
    </div>
  );
}

export default ViewBlogs;
