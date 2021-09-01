import React from 'react'
import './Footer.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import icon_arrow_right from './img/icon_arrow_right.svg'
import icon_privacy from './img/icon_privacy.svg'
import icon_target from './img/icon_target.svg'
import icon_contactus from './img/icon_contactus.svg'
import icon_feedback from './img/icon_feedback.svg'
import icon_facebook from './img/icon_facebook.svg'
import icon_instagram from './img/icon_instagram.svg'
import icon_quora from './img/icon_quora.svg'




class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.footer_cards = [
            {
                'name': 'Privacy',
                'desc': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectet',
                'link': '#',
                'icon': icon_privacy
            },
            {
                'name': 'Target',
                'desc': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectet',
                'link': '#',
                'icon': icon_target
            },
            {
                'name': 'Contact us',
                'desc': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectet',
                'link': '#',
                'icon': icon_contactus
            },
            {
                'name': 'Feedback',
                'desc': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectet',
                'link': '#',
                'icon': icon_feedback
            }
        ]

    }

    render() {
        return (
            <>
                <footer id="component_footer" className="py-5">
                    <div className="container">
                        <div className="g-1 g-sm-3 row row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-5">
                            {this.footer_cards.map((card, index) => {
                                return (
                                    <div key={index} className="col">
                                        <a className="footer_card" href="#">
                                            <div className="card h-100 p-1 p-sm-2 d-flex flex-column justify-content-center">
                                                <div className="card-header mt-sm-3 border-0 bg-transparent d-flex gap-2 flex-row flex-sm-column justify-content-between align-items-center">
                                                    <img className="" src={card.icon}/>
                                                    <span className="text-nowrap fs-3">{card.name}</span>
                                                </div>
                                                <div className="d-none d-md-block card-footer bg-transparent border-0">
                                                    <p className="footer-card-desc small ">{card.desc}</p>
                                                    <p className="text-center">
                                                        <a className="fs-5 text-nowrap text-decoration-none" href={card.link}>
                                                            <span>Learn More</span>
                                                            <img className="mx-3" src={icon_arrow_right}/>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="follow">
                            <div
                                className="d-flex  flex-column flex-md-row gap-3 justify-content-end align-items-center">
                                <div className="follow_text fs-5">Follow us on social media</div>
                                <div className="follow_img d-flex gap-3 justify-content-evenly align-items-center">
                                    <a href="#"><img className="" src={icon_facebook}/></a>
                                    <a href="#"><img className="" src={icon_instagram}/></a>
                                    <a href="#"><img className="" src={icon_quora}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="border-1 border"/>
                        <br/>
                    </div>
                </footer>
            </>
    );
    }
    }


    export default Footer;