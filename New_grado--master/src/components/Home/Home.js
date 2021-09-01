import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Chatbox from "./Chatbox";
import Footer from "./Footer";
import { useStateValue } from "../../StateProvider";
import { useEffect } from "react";

export default function Myhome(props) {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div id="page_home">
      <Navbar />
      <Hero />
      <Services />
      <Chatbox />
      <Footer />
    </div>
  );
}
