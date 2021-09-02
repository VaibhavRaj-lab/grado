export const initialState = {
  user: "Profile",
  blogs: [],
  filterBlogs: [],
  filterTabForBlogs: "",
  category: [],
  condition: "",
  getIdForEdit: "",
  courses: [],
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
    case "Push_Category":
      return {
        ...state,
        category: [...state.category, action.item],
      };
    case "Course_Condition":
      return {
        ...state,
        condition: action.item,
      };
    case "getIdForEdit":
      return {
        ...state,
        getIdForEdit: action.item,
      };
    case "editCourse_Condition":
      return {
        ...state,
        editCondition: action.item,
      };
    case "Add_Courses":
      return {
        ...state,
        courses: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
