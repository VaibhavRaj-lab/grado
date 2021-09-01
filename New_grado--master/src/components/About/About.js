import React from "react";
import './About.scss'
import Navbar from '../Home/Navbar'
import img_arrow from './img/arrow.svg'
import img_cover1 from './img/cover1.svg'
import img_cover2 from './img/Group_team.svg'
import img_Autonomy from './img/Autonomy.svg'
import img_dumble from './img/dumble.svg'
import img_icon_happy from './img/icon_happy.svg'
import img_icon_hearth from './img/icon_hearth.svg'
import img_icon_mentorship from './img/icon_mentorship.svg'
import img_icon_mindfullness from './img/icon_mindfullness.svg'
import Footer from '../Home/Footer'




class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.cards = [
            {
                'name': 'Happiness',
                'content': 'Neque porro quisquam est qui dolorem ipsum quia quisquam est qui dolorem ipsum quia ',
                'icon': img_icon_happy
            },
            {
                'name': 'Mentorship',
                'content': 'Neque porro quisquam est qui dolorem ipsum quia quisquam est qui dolorem ipsum quia ',
                'icon': img_icon_mentorship
            },
            {
                'name': 'Autonomy',
                'content': 'Neque porro quisquam est qui dolorem ipsum quia quisquam est qui dolorem ipsum quia ',
                'icon': img_Autonomy
            },
            {
                'name': 'Benifits',
                'content': 'Neque porro quisquam est qui dolorem ipsum quia quisquam est qui dolorem ipsum quia ',
                'icon': img_icon_hearth
            },
            {
                'name': 'Mindfullness',
                'content': 'Neque porro quisquam est qui dolorem ipsum quia quisquam est qui dolorem ipsum quia ',
                'icon': img_icon_mindfullness
            },
            {
                'name': 'Mindfullness',
                'content': 'Neque porro quisquam est qui dolorem ipsum quia quisquam est qui dolorem ipsum quia ',
                'icon': img_dumble
            }
        ]

    }

    render() {
        return (
            <div id="component_about">
                <Navbar/>
                <br/>
                <div className="container my-5 h5 hero-container">
                    <div className="hero-text ps-md-5 primary-color-text">
                        <p>Join The <span className="secondary-color-text">Grado</span> for</p>
                        <p>awsome opportunities</p>
                    </div>
                    <div className="">
                        <img className="img-fluid" src={img_cover1} alt="cover-1"/>
                    </div>
                </div>
                <div className="container p-2">
                    <div className="my-5">
                        <h1 className="culture_our text-center">Our Culture</h1>
                        <p className="my-3 culture-text text-center text-muted mx-auto">We consider ourselves a team of
                            peers more than a company. A sense of mutual respect and mindfulness permeates our culture :
                            in
                            fact, It’s the key to our success</p>
                    </div>
                    <div className="my-5 g-3 g-lg-4 row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {this.cards.map((card, index) => {
                            return (
                                <div key={index} className="col">
                                    <div className="card mx-auto card_culture text-center border-0">
                                        <div className="card_body_culture py-4 card-body">
                                            <div className="text-center mb-3">
                                                <img src={card.icon} alt="cover-2"/>
                                            </div>
                                            <h3 className="primary-color-text">{card.name}</h3>
                                            <p className="lead">{card.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="py-5 d-flex flex-column flex-lg-row justify-content-between ">
                        <div className="flex-grow-1">
                            <h1 className="my-3 primary-color-text">Our Team</h1>
                            <ul className="list-group text-nowrap fs-2">
                                <li className="d-flex list-group-item border-0 align-items-center">
                                    <img className="px-3" src={img_arrow} alt="arrow"/>
                                    <span>Counselor</span>
                                </li>
                                <li className="d-flex list-group-item border-0">
                                    <img className="px-3" src={img_arrow} alt="arrow"/>
                                    <span>Product Managment</span>
                                </li>
                                <li className="d-flex list-group-item border-0">
                                    <img className="px-3" src={img_arrow} alt="arrow"/>
                                    <span>Customer Operation</span>
                                </li>
                                <li className="d-flex list-group-item border-0">
                                    <img className="px-3" src={img_arrow} alt="arrow"/>
                                    <span>Sales & Marketing</span>
                                </li>
                                <li className="d-flex list-group-item border-0">
                                    <img className="px-3" src={img_arrow} alt="arrow"/>
                                    <span>Design</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-grow-1">
                            <img className="img-fluid" src={img_cover2} alt="cover-2"/>
                        </div>
                    </div>

                </div>
                <div className=" join_team container-fluid text-center py-3">
                    <div className="d-flex gap-3 flex-column py-5">
                        <h1 className="">Join Our Team </h1>
                        <p className="text-center fw-light fs-2">Interested in working together? We are too!</p>
                        <div className="">
                            <button className="fw-bold btn btn-lg px-5 py-2 fs-4">See Open Positions</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}


export default About;