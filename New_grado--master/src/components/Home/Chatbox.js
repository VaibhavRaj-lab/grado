import React from 'react'
import './Chatbox.scss'
import img_chatbox_cover from './img/chatbox_cover.svg'

class Chatbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="component_chatbox" className="pb-3">
                <div className="container">
                    <div className="d-flex flex-lg-row flex-column gap-3 justify-content-between align-items-center">
                        <div className="flex-fill">
                            <h2 className="text-center mb-5">Live Chatting With Experts</h2>
                            <div className="container">
                                <div className="gap-3 d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-center">
                                    <div className="flex-fill mb-3">
                                        <p className="lead px-3 mb-5">Doubt solving<br/>Placement advice</p>
                                        <div className="d-grid">
                                            <button className="btn btn-lg fw-bold btn1">Book a slot</button>
                                        </div>
                                    </div>
                                    <div className="flex-fill mb-3">
                                        <p className="lead px-3 mb-5 text-lg-end">Career advice<br/>Live training</p>
                                        <div className="d-grid">
                                            <button className="btn btn-lg fw-bold btn2">Live chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex-fill">
                            <img className="img-fluid" src={img_chatbox_cover}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Chatbox;