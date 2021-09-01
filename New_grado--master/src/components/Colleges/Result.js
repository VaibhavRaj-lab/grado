import React from 'react'
import './Result.scss'
import Navbar from './Navbar'
import img_college_cover from './img/college_cover.png'
import img_dropdown_icon from './img/dropdown_icon.svg'


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                {
                    'name': 'IIT Delhi',
                    'price': {'min': 12, 'max': 13, 'denomination': 'Lakh'},
                    'location': 'Delhi',
                    'category': 'Tire 1',
                    'type': 'Government',
                    'stars': 3,
                    'img': img_college_cover
                },
                {
                    'name': 'IIT Delhi',
                    'price': {'min': 12, 'max': 13, 'denomination': 'Lakh'},
                    'location': 'Delhi',
                    'category': 'Tire 1',
                    'type': 'Government',
                    'stars': 3,
                    'img': img_college_cover
                },
                {
                    'name': 'IIT Delhi',
                    'price': {'min': 12, 'max': 13, 'denomination': 'Lakh'},
                    'location': 'Delhi',
                    'category': 'Tire 1',
                    'type': 'Government',
                    'stars': 3,
                    'img': img_college_cover
                },
                {
                    'name': 'IIT Delhi',
                    'price': {'min': 12, 'max': 13, 'denomination': 'Lakh'},
                    'location': 'Delhi',
                    'category': 'Tire 1',
                    'type': 'Government',
                    'stars': 3,
                    'img': img_college_cover
                }
            ]
        };
    }

    render() {
        return (
            <>
                <Navbar/>
                <div id="component_course_result">
                    <div className="container my-3">
                        <p className="result-text fs-5">Showing results for <span
                            className="result_query">CS btech</span>
                        </p>
                    </div>
                    <div className="container">
                        <div className="d-flex gap-3 gap-xxl-5 my-3">
                            <div className="flex-fill result_sidebar text-nowrap">
                                <div className="card p-3 ps-xxl-5">
                                    <div className="card-body">
                                        <p className="fs-5">Categories</p>
                                        <div className="d-flex flex-column gap-2 justify-content-center">
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="categories_checkbox_1"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="categories_checkbox_1">
                                                    <span className="me-2">Tire 1</span>
                                                    {Show_stars(3)}
                                                </label>
                                            </div>
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="categories_checkbox_2"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="categories_checkbox_2">
                                                    <span className="me-2">Tire 2</span>
                                                    {Show_stars(2)}
                                                </label>
                                            </div>
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="categories_checkbox_3"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="categories_checkbox_3">
                                                    <span className="me-2">Tire 3</span>
                                                    {Show_stars(1)}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="fs-5">City</p>
                                        <input placeholder="Search" className="form-control" type="text"/>
                                    </div>
                                    <div className="card-body">
                                        <p className="fs-5">Yearly fees</p>
                                        <div className="d-flex flex-column gap-2 justify-content-center">
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="fees_1"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="fees_1">
                                                    <span className="me-2">{"< 5 Lakh"}</span>
                                                </label>
                                            </div>
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="fees_2"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="fees_2">
                                                    <span className="me-2">{"5 Lakh - 10 Lakh"}</span>
                                                </label>
                                            </div>
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="fees_3"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="fees_3">
                                                    <span className="me-2">{"> 10 Lakh"}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="fs-5">College Type</p>
                                        <div className="d-flex flex-column gap-2 justify-content-center">
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="type_1"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="type_1">
                                                    <span className="me-2">Government</span>
                                                </label>
                                            </div>
                                            <div
                                                className="form-check d-flex flex-row gap-3 justify-content-start align-items-center">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="type_2"/>
                                                <label className="form-check-label flex-grow-1"
                                                       htmlFor="type_2">
                                                    <span className="me-2">Private</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-fill">
                                <div className="mb-3 mb-xl-5 d-flex justify-content-end align-items-center">
                                    <div className="fw-bolder rating_div px-3 py-1 d-flex gap-3 justify-content-evenly align-items-center">
                                        <span className="rating_label">Ratings</span>
                                        <div className="dropdown">
                                            <a className="btn fw-bolder" href="#" role="button"
                                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="me-3">High to Low</span>
                                                <img src={img_dropdown_icon} />
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3 g-xxl-5 row-cols-1 row-cols-md-2 row-cols-xl-3">
                                    {this.state.results.map((college, index) => {
                                        return (
                                            <div key={index} className="col">
                                                <div className="card result_card border-0 bg-transparent">
                                                    <img src={college.img} className="card-img-top" alt={college.name}/>
                                                    <div className="card-body">
                                                        <div
                                                            className="mb-3 d-flex flex-column flex-lg-row justify-content-between align-items-center">
                                                            <span className="text-nowrap college_name fs-3">{college.name}</span>
                                                            <small
                                                                className="text-nowrap fw-normal px-3 gap-2 py-1 price d-flex justify-content-center align-items-center">
                                                                <span className="fw-bolder">{college.price.min} - {college.price.max}</span>
                                                                <span className="badge denomination">{college.price.denomination}</span>
                                                            </small>
                                                        </div>
                                                        <div className="d-flex flex-column flex-lg-column-reverse align-items-stretch align-items-lg-stretch">
                                                            <div className="flex-fill">
                                                                <p className="fs-4  text-center text-lg-end ">
                                                                    {Show_stars(college.stars)}
                                                                </p>
                                                            </div>
                                                            <div className="small">
                                                                <div className="row">
                                                                    <div className="col-lg text-nowrap detail_name">Location</div>
                                                                    <div className="col-lg">{college.location}</div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg text-nowrap detail_name">Category</div>
                                                                    <div className="col-lg">{college.category}</div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg text-nowrap detail_name">Type</div>
                                                                    <div className="col-lg">{college.type}</div>
                                                                </div>
                                                            </div>
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
            </>
        );
    }
}


function Show_stars(count) {
    const stars = []
    for (const i of Array.from({length: count}, (v, i) => i)) {
        stars.push(<span key={i} className="star bi bi-star-fill me-1"></span>)
    }
    return (
        <>
            {stars}
        </>
    );
}


export default Result;
