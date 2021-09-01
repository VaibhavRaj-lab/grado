export const initialState = {
  user: "Profile",
  blogs: [],
  filterBlogs: [],
  filterTabForBlogs: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_User":
      return {
        ...state,
        user: action.item,
      };
    case "Add_Blogs":
      return {
        ...state,
        blogs: action.item,
      };
    case "Update_Blogs":
      return {
        ...state,
        filterBlogs: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
