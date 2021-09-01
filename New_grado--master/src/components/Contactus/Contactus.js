import React from 'react';
import './Contactus.scss'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import img_hero_bg from './img/hero_bg.png'




class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="component_contactus">
                <Navbar/>
                <div id="main">
                    <div className="hero container py-3">
                        <div className="card m-lg-5 text-white">
                            <img className="card-img" src={img_hero_bg}/>
                            <div className="card-img-overlay px-5 d-flex flex-column justify-content-center gap-3">
                                <h1 className="card-title">Who We Are ?</h1>
                                <p className="hero-text card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                    amet, consectet</p>
                                <p className="card-text">
                                    <button className="btn btn-lg fw-bold">Read More</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h3 className="text-center">Get in <span className="component-text-primary">Touch</span></h3>
                        <p className="text-center">Please share your details and we will contact you soon.</p>
                    </div>
                    <div className="container my-3 contact-form">
                        <form className="py-3">
                            <div className="row row-cols-1 row-cols-lg-2 g-4 mb-4">
                                <div className="col">
                                    <input type="text" className="form-control py-2 px-3" placeholder="First Name*"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control py-2 px-3" placeholder="Last Name*"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control py-2 px-3" placeholder="Email I'd*"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control py-2 px-3" placeholder="Contact Number*"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control py-2 px-3" placeholder="City*"/>
                                </div>
                                <div className="col">
                                    <div className="d-flex gap-2">
                                        <div className="form-check d-flex gap-1 flex-column align-items-center">
                                            <input className="form-check-input mx-auto p-2" type="checkbox" value=""
                                                   id="school"/>
                                            <label className="form-check-label" htmlFor="school">
                                                In School
                                            </label>
                                        </div>
                                        <div className="form-check d-flex gap-1 flex-column align-items-center">
                                            <input className="form-check-input mx-auto p-2" type="checkbox" value=""
                                                   id="college"/>
                                            <label className="form-check-label" htmlFor="college">
                                                In College
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <textarea rows="5" placeholder="Message*" className="form-control mb-4"></textarea>
                            <div className="d-flex justify-content-start gap-5 align-items-stretch">
                                <div><input placeholder="Enter Captcha" type="text" className="captcha-input form-control px-3 py-2" /></div>
                                <div className="badge d-flex align-items-center px-4 py-2">XYZ23RTP</div>
                            </div>
                        </form>
                    </div>
                    <div className="py-5 px-3 d-flex flex-column justify-content-center align-items-stretch align-items-lg-center">
                        <button type="button" className="px-5 py-2 btn btn-primary text-white fw-bold">Submit</button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default Contactus;