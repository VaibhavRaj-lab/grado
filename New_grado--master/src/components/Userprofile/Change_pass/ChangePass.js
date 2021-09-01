import React from "react";
import './ChangePass.scss'
import img_cover from './img/cover.svg'


class ChangePass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="component_changepass">
                <div className="gap-3 d-flex justify-content-evenly align-items-center">
                    <div>
                        <h2 className="text-center my-5">Change Password</h2>
                        <div className="my-3 changepass_form">
                            <form>
                                <input placeholder="Current password" type="text" className="px-5 py-3 border-0 form-control mb-3"/>
                                <input placeholder="New password" type="text" className="px-5 py-3 border-0 form-control mb-3"/>
                                <div className="mt-5 d-flex flex-row flex-lg-column justify-content-lg-start align-items-lg-center">
                                    <button className="flex-fill btn me-auto btn-lg px-5 fw-bold">Verify Email</button>
                                </div>
                            </form>
                            <p className="my-3">
                                Not having Email ? Verify using <a className="fw-bold text-decoration-none" href="#">Phone</a>
                            </p>
                        </div>
                    </div>
                    <div className="text-center align-self-end">
                        <div className="d-none d-md-block">
                            <img className="img-fluid" src={img_cover}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ChangePass;