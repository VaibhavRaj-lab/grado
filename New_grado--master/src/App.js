import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Login from "./components/Login_signup/Login";
import Signup from "./components/Login_signup/Signup";
import Contactus from "./components/Contactus/Contactus";
import UserProfile from "./components/Userprofile/Userprofile";
import Colleges from "./components/Colleges/Colleges";
import Colleges_result from "./components/Colleges/Result";
import Quizes from "./components/Quizes/Quizes";
import Reset from "./components/Login_signup/Reset";
import NewPassword from "./components/Login_signup/NewPassword";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/reset" component={Reset} />
      <Route exact path="/newpassword" component={NewPassword} />
      <Route exact path="/contactus" component={Contactus} />
      <Route
        exact
        path="/profile"
        component={() => {
          return <UserProfile link="/profile" />;
        }}
      />
      <Route
        exact
        path="/personal_mentor"
        component={() => {
          return <UserProfile link="/personal_mentor" />;
        }}
      />
      <Route
        exact
        path="/change_pass"
        component={() => {
          return <UserProfile link="/change_pass" />;
        }}
      />
      <Route exact path="/colleges" component={Colleges} />
      <Route exact path="/colleges_result" component={Colleges_result} />
      <Route exact path="/quizes" component={Quizes} />
    </Router>
  );
}

export default App;
