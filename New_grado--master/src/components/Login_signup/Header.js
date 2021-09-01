import React from "react";
import img_brand_icon from "./img/brand_icon.svg";
import './Header.scss'
import {Link} from 'react-router-dom'


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <>
                <div id="component_login_signup_header" className="navbar navbar-expand-lg navbar-dark py-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={img_brand_icon}/>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

Header.propTypes = {};

export default Header;