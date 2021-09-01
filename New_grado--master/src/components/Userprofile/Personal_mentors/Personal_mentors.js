import React from "react";
import './Personal_mentors.scss'
import img_profile_pic from './img/profile_pic.png'


const mentors = [
    {
        'name': 'Shedfeeed kafne', 'profile_pic': img_profile_pic, 'star': 1, 'timings': [
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'},
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'},
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'}
        ]
    },
    {
        'name': 'Shedfeeed kafne', 'profile_pic': img_profile_pic, 'star': 2, 'timings': [
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'},
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'},
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'}
        ]
    },
    {
        'name': 'Shedfeeed kafne', 'profile_pic': img_profile_pic, 'star': 5, 'timings': [
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'},
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'},
            {'start': '2:00', 'end': '6:00', 'ap': 'AM'}
        ]
    }
]

class PersonalMentors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mentors: mentors
        };
    }

    render() {
        return (
            <div id="component_personal_mentors">
                <h2 className="my-3 mb-5">Personal Mentors</h2>
                <div className="g-3 g-lg-5 row row-cols-1 row-cols-lg-2 row-cols-xxl-3">
                    {this.state.mentors.map((mentor, index) => {
                        return (
                            <div key={index} className="col">
                                <div className="mx-auto overflow-hidden card border-0 bg-transparent">
                                    <div className="card-body py-5 text-center">
                                        <img className="img-fluid profile_pic" src={mentor.profile_pic}/>
                                        <h2 className="my-3">{mentor.name}</h2>
                                        <div className="">
                                            <span className="h5 timings component-primary-color">Timings</span>
                                            <div
                                                className="mt-2 mb-3 gap-2 d-flex flex-column flex-md-row justify-content-center align-items-center">
                                                {mentor.timings.map((timing, index) => {
                                                    return (
                                                        <div key={index}
                                                             className="fw-normal gap-1 px-2 py-1 rounded-pill timing d-flex justify-content-center align-items-center">
                                                            <span
                                                                className="component-primary-color">{timing.start}</span>
                                                            <span className="component-primary-color"> - </span>
                                                            <span
                                                                className="component-primary-color">{timing.end}</span>
                                                            <span
                                                                className="bg-grey text-white badge">{timing.ap}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div
                                            className="mt-5 gap-3 d-flex flex-column flex-md-row flex-column-reverse justify-content-center">
                                            <div className="flex-fill d-grid">
                                                <button className="help_btn btn btn-bg">Ask for help</button>
                                            </div>
                                            <div
                                                className="fs-5 component-primary-color flex-fill d-flex gap-3 justify-content-center">
                                                {[0, 1, 2, 3, 4].map((value, index, array) => {
                                                    return (
                                                        <span key={index}
                                                              className={index < mentor.star ? "bi bi-star-fill" : "bi bi-star"}></span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}


export default PersonalMentors;