import React from 'react'
import Navbar from '../Home/Navbar'
import './Quizes.scss'
import img_icon_arrow_left from './img/icon_arrow_left.svg'
import img_profilepic from './img/profilepic.svg'
import img_quize_img from './img/quize_img.svg'


class Quizes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quizes_list: [
                {
                    'img': img_quize_img,
                    'name': 'The basics of react development quiz 1',
                    'desc': 'the gfsve  kb is thrne bebysehge l,ajn  jakb asib dsjabj wnz owh eXLA,NDJGUJB ALAKSYA IS EYBNABDAS MNDA',
                    'result': false
                },
                {
                    'img': img_quize_img,
                    'name': 'The basics of react development quiz 2',
                    'desc': 'the gfsve  kb is thrne bebysehge l,ajn  jakb asib dsjabj wnz owh eXLA,NDJGUJB ALAKSYA IS EYBNABDAS MNDA',
                    'result': false
                },
                {
                    'img': img_quize_img,
                    'name': 'The basics of react development quiz 3',
                    'desc': 'the gfsve  kb is thrne bebysehge l,ajn  jakb asib dsjabj wnz owh eXLA,NDJGUJB ALAKSYA IS EYBNABDAS MNDA',
                    'result': true
                }
            ]
        }
    }

    render() {
        return (
            <div id="component_quizes">
                <Navbar/>
                <div className="d-flex flex-column flex-lg-row align-items-stretch">
                    <div className="sidebar flex-fill py-3 ps-3">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <div className="container d-flex flex-lg-column">
                                <h2 className="align-self-start fw-bolder mb-lg-4">Quizes</h2>
                                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#sidebar" aria-controls="sidebar"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse align-self-start ps-3 mt-3" id="sidebar">
                                    <ul className="navbar-nav d-flex flex-column gap-3 fs-5 ">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Your Score </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Recent quiz</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Awards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Friends</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Practice</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-fill">
                        <div className="container px-3 px-lg-5 py-5">
                            <div className="d-flex justify-content-center justify-content-lg-end gap-3 align-items-center mb-5">
                                <button className="btn my-btn my-btn-outline-primary btn-lg px-5 py-2 fw-bolder">View new
                                </button>
                                <button className="btn my-btn my-btn-primary btn-lg px-5 py-2 fw-bolder">Start Quiz</button>
                            </div>
                            <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5 align-items-stretch align-items-lg-center mb-5">
                                <img src={img_profilepic} className="profile_pic align-self-center"/>
                                <div className="flex-fill">
                                    <h3>Lakshya Kumar</h3>
                                    <p className="fs-5 text-muted">@lakshyak545</p>
                                    <div className="progress rounded-pill bg-transparent">
                                        <div className="level-progress-bar progress-bar rounded-pill"
                                             role="progressbar"></div>
                                    </div>
                                    <p className="fw-bolder progress-label">Level</p>
                                    <div className="progress rounded-pill bg-transparent">
                                        <div className="experience-progress-bar progress-bar rounded-pill"
                                             role="progressbar"></div>
                                    </div>
                                    <p className="fw-bolder progress-label">Experience</p>
                                </div>
                            </div>
                            <div className="quizes_list d-flex gap-3 flex-column align-items-stretch">
                                {this.state.quizes_list.map((quize, index) => {
                                    return (
                                        <div className="card rounded-0">
                                            <div className="card-body">
                                                <div
                                                    className="d-flex flex-column flex-lg-row justify-content-between align-items-stretch align-items-lg-center gap-5 px-3">
                                                    <img className="img-fluid quize_img align-self-center" src={quize.img}/>
                                                    <div className="flex-grow-1">
                                                        <h5 className="fw-bolder">{quize.name}</h5>
                                                        <p className="text-muted">{quize.desc}</p>
                                                    </div>
                                                    <div className="d-grid">
                                                        {
                                                            quize.result
                                                                ? <button
                                                                    className=" my-btn btn text-nowrap  my-btn-success  btn-lg px-4 py-2 ">View award</button>
                                                                : <button
                                                                    className="my-btn btn text-nowrap my-btn-primary btn-lg  px-4 py-2 ">Reattempt</button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Quizes;