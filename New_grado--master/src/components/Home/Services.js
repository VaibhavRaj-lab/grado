import React, { createRef, useRef, useState, Component } from 'react'
import { Link } from 'react-router-dom';
import './Services.scss'

import Carousel from 'react-bootstrap/Carousel'
import course_btn_img from "./img/course_btn_icon.svg";
import course1_img from "./img/course1.png";
import course2_img from "./img/course2.png";
import course3_img from "./img/course3.png";
import course4_img from "./img/course4.png";
import course5_img from "./img/course5.png";
import course6_img from "./img/course6.png";


let courses = [
    { 'course_name': 'course 1', 'link': 'colleges', 'img': course1_img, 'course_desc': 'This is description about course' },
    { 'course_name': 'course 2', 'link': 'colleges', 'img': course2_img, 'course_desc': 'This is description about course' },
    { 'course_name': 'About clg', 'link': 'colleges', 'img': course3_img, 'course_desc': 'This is description about course' },
    { 'course_name': 'course 4', 'link': 'colleges', 'img': course4_img, 'course_desc': 'This is description about course' },
    { 'course_name': 'course 5', 'link': 'colleges', 'img': course5_img, 'course_desc': 'This is description about course' },
    { 'course_name': 'course 6', 'link': 'colleges', 'img': course6_img, 'course_desc': 'This is description about course' }
];



class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.course_btn_list = React.createRef()
        this.handleSelect = (selectedIndex) => {
            this.setState({
                index: selectedIndex
            })
            for (let i = 0; i < this.courses_buttons.length; i++) {
                this.courses_buttons[i].classList.remove('active')
            }
            this.courses_buttons[selectedIndex].classList.add('active')
        }
    }

    componentDidMount() {
        this.courses_buttons = this.course_btn_list.current.querySelectorAll('button');
    }

    render() {
        return (
            <>
                <div id="component_services" className="py-3">
                    <header className="mb-5">
                        <div className="container">
                            <h2 className="text-white display-5 fw-bold">Services</h2>
                        </div>
                    </header>
                    <section>
                        <div className="container">
                            <div
                                className="d-flex gap-5 flex-lg-row flex-column flex-column-reverse justify-content-lg-evenly ">
                                <div className="flex-fill">
                                    <Carousel ref={this.course_btn_list} activeIndex={this.state.index}
                                        id="carousel_course" onSelect={this.handleSelect} variant="dark"
                                        className="course_img_card">
                                        {courses.map((course, index) => {
                                            return (
                                                <Carousel.Item key={index} id={course.course_name}>
                                                    <img src={course.img} className="d-block w-100"
                                                         alt={course.course_name} />
                                                    <Carousel.Caption>
                                                        <h5>{course.course_name} </h5>
                                                        <p>{course.course_desc}</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                            )
                                        })}
                                    </Carousel>
                                </div>
                                <div className="flex-fill">
                                    <div className="text-end fw-bold mb-3">
                                        <div className="para1 fs-2">We are having</div>
                                        <div className="para2 fs-1">Something for everyone</div>
                                    </div>
                                    <div ref={this.course_btn_list} id="course_btn_list" className="d-none d-md-block">
                                        <div className="row g-4 row-cols-md-2">
                                            {courses.map((course, index) => {
                                                return (
                                                    <div key={index} className="col">
                                                        <div className="d-grid">
                                                            <button onClick={() => {
                                                                this.handleSelect(index)
                                                            }}
                                                                className={"py-4 btn btn-lg text-white d-flex justify-content-evenly align-items-center course_btn " + (index === 0 ? "active" : "")}>
                                                                <img src={course_btn_img} />
                                                                <span
                                                                    className="course_btn_text">{course.course_name}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default Services;