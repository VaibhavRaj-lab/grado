import React from "react";
import './Navbar.scss'
import img_brand_icon from './img/brand_icon.svg'
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light py-3">
                    <div className="container">
                        <Link to="/" className="navbar-brand me-3">
                            <img src={img_brand_icon}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ps-3 my-3 fs-5 me-auto">
                                <div className="nav-item">
                                    <a href="#" className="nav-link">
                                        Categories
                                    </a>
                                </div>
                                <div className="nav-item">
                                    <a href="#" className="nav-link">
                                        Top 10
                                    </a>
                                </div>
                                <div className="nav-item">
                                    <a href="#" className="nav-link">
                                        College Blogs
                                    </a>
                                </div>
                            </div>
                            <form className="nav-bar-from d-flex gap-3">
                                <input placeholder="Search" className="form-control border-0 ps-3" type="text"/>
                                <button type="button" className="px-5 px-lg-3 btn btn-primary fw-bold">
                                    <span className="bi bi-search"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;