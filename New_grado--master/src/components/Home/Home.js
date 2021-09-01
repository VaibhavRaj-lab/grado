import './Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Chatbox from './Chatbox'
import Footer from './Footer'


export default function Myhome(props) {
    return (
        <div id="page_home">
            <Navbar/>
            <Hero/>
            <Services/>
            <Chatbox />
            <Footer />
        </div>
    );
};