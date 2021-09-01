import React from "react";
import './Userprofile.scss'
import Sidebar from './Sidebar'
import PersonalMentors from './Personal_mentors/Personal_mentors'
import ChangePass from './Change_pass/ChangePass'
import Profile from "./Profile/Profile";


class Userprofile extends React.Component {
    constructor(props) {
        super(props);
        this.paths = {
            '/profile': <Profile/>,
            '/personal_mentor': <PersonalMentors />,
            '/change_pass': <ChangePass />
        }
        this.link = props.link
        this.state = {
            active_page: this.paths[this.link],
            active_path: this.link
        };
    }

    render() {
        return (
            <div id="component_userprofile">
                <div className="usermain align-items-stretch d-flex flex-column flex-lg-row">
                    <Sidebar active_path={this.state.active_path}/>
                    <div className="container p-5">
                        {this.state.active_page}
                    </div>
                </div>
            </div>
        );
    }
}


export default Userprofile;