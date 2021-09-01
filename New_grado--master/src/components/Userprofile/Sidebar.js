import React from "react";
import './Sidebar.scss'
import brand_icon from '../Login_signup/img/brand_icon.svg'
import img_icon_profile from './img/icon_profile.svg'
import img_icon_profile_active from './img/icon_profile_active.svg'
import img_icon_book from './img/icon_book.svg'
import img_icon_book_active from './img/icon_book_active.svg'
import img_icon_key from './img/icon_key.svg'
import img_icon_key_active from './img/icon_key_active.svg'
import img_icon_lightbulb from './img/icon_lightbulb.svg'
import img_icon_lightbulb_active from './img/icon_lightbulb_active.svg'
import img_icon_logout from './img/icon_logout.svg'
import img_icon_logout_active from './img/icon_logout_active.svg'
import img_icon_suitcase from './img/icon_suitcase.svg'
import img_icon_suitcase_active from './img/icon_suitcase_active.svg'
import {Link} from 'react-router-dom';




const links = [
    {'name': 'Profile', 'path': '/profile', 'icon': img_icon_profile, 'icon_active': img_icon_profile_active},
    {'name': 'My courses', 'path': '/my_courses', 'icon': img_icon_book, 'icon_active': img_icon_book_active},
    {'name': 'Change password', 'path': '/change_pass', 'icon': img_icon_key, 'icon_active': img_icon_key_active},
    {'name': 'Mentors', 'path': '/personal_mentor', 'icon': img_icon_suitcase, 'icon_active': img_icon_suitcase_active},
    {'name': 'My ideas', 'path': '/my_ideas', 'icon': img_icon_lightbulb, 'icon_active': img_icon_lightbulb_active},
    {'name': 'Logout', 'path': '/logout', 'icon': img_icon_logout, 'icon_active': img_icon_logout_active}
]

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: links,
            active_path: props.active_path
        };
    }

    render() {
        return (
            <div id="component_sidebar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="d-flex flex-column flex-fill">
                            <div className="flex-fill mb-3">
                                <div className="d-flex justify-content-between  ">
                                    <Link className="navbar-brand mx-lg-auto" to="/">
                                        <img src={brand_icon}/>
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-fill collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav d-flex flex-column flex-fill">
                                    {this.state.pages.map((link, index) => {
                                        return (
                                            <li key={index} className="nav-item">
                                                <Link
                                                    className={"nav-link d-flex justify-content-start align-items-center gap-3 pe-lg-5 text-nowrap py-3 " + (link.path == this.state.active_path ? " active " : "")}
                                                    aria-current="page" to={link.path}>
                                                    <img className="sidebar-icon" src={link.path == this.state.active_path ? link.icon_active : link.icon } />
                                                    <span className="">{link.name}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}


export default Sidebar;