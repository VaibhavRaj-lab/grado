import React from 'react'
import {Link} from 'react-router-dom';
import './Blogs.scss'
import Navbar from '../Home/Navbar'
import img_post_cover from './img/post_cover.png'




class Blogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : [
                {
                    'img': img_post_cover,
                    'title': 'How to protect your eyes from computer screans',
                    'tag': 'Professional Techniques',
                    recent_posts : [
                        {
                            'img': img_post_cover,
                            'title': 'How to protect your eyes from computer screans',
                            'tag': 'Professional Techniques'
                        },
                        {
                            'img': img_post_cover,
                            'title': 'How to protect your eyes from computer screans',
                            'tag': 'Professional Techniques'
                        },
                        {
                            'img': img_post_cover,
                            'title': 'How to protect your eyes from computer screans',
                            'tag': 'Professional Techniques'
                        }
                    ]
                },
                {
                    'img': img_post_cover,
                    'title': 'How to protect your eyes from computer screans',
                    'tag': 'Professional Techniques',
                    recent_posts : [
                        {
                            'img': img_post_cover,
                            'title': 'How to protect your eyes from computer screans',
                            'tag': 'Professional Techniques'
                        },
                        {
                            'img': img_post_cover,
                            'title': 'How to protect your eyes from computer screans',
                            'tag': 'Professional Techniques'
                        },
                        {
                            'img': img_post_cover,
                            'title': 'How to protect your eyes from computer screans',
                            'tag': 'Professional Techniques'
                        }
                    ]
                }
            ]
        };

    }

    render() {
        return (
            <div id="component_blogs">
                <Navbar />
                <div className="container">
                    <ul className="nav justify-content-end fw-bolder">
                       <li className="nav-item me-auto">
                           <a href="#" className="nav-link text-dark">Community</a>
                       </li>
                       <li className="nav-item">
                           <a href="#" className="nav-link text-dark">Blog category</a>
                       </li>
                       <li className="nav-item">
                           <a href="#" className="nav-link text-dark">Events</a>
                       </li>
                       <li className="nav-item">
                           <a href="#" className="nav-link text-dark">Liked blogs</a>
                       </li>
                    </ul>
                    <h1 className="my-5 text-center display-2 fw-bolder">The Grado’s <br/> Blogs</h1>
                    <div className="mt-3 mb-5 d-flex flex-row gap-3 justify-content-evenly align-items-center">
                        <button className="btn btn-lg btn-pink px-5 rounded-pill text-white text-nowrap">Login</button>
                        <button className="btn btn-lg btn-yellow px-5 rounded-pill text-white text-nowrap">Category 2</button>
                        <button className="btn btn-lg btn-red px-5 rounded-pill text-white text-nowrap">Section 3</button>
                        <button className="btn btn-lg btn-pink px-5 rounded-pill text-white text-nowrap">Login</button>
                        <button className="btn btn-lg btn-yellow px-5 rounded-pill text-white text-nowrap">Category 2</button>
                        <button className="btn btn-lg btn-red px-5 rounded-pill text-white text-nowrap">Section 3</button>
                    </div>
                    {this.state.posts.map((post, index)=>{
                        return (
                            <div key={index} className="row g-5 my-3">
                                <div className="col-lg mb-3">
                                    <div className="main_post_card card bg-transparent border-0">
                                        <img src={post.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="small post_tag fw-bolder">{post.tag}</p>
                                            <Link to="/blogs/post">
                                                <h4 className="card-title fw-bolder">
                                                    {post.title}
                                                </h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <h4 className="fw-bolder mb-4">Recent Blogs</h4>
                                    <div className="row gy-3 row-cols-1">
                                        {post.recent_posts.map((recent_post, index)=> {
                                            return (
                                                <div key={index} className="col">
                                                    <div className="recent_post_card card bg-transparent border-0">
                                                        <div className="row g-0">
                                                            <div className="col-md-4">
                                                                <img src={recent_post.img} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="card-body">
                                                                    <p className="small post_tag fw-bolder">{recent_post.tag}</p>
                                                                    <h4 className="card-title fw-bolder">
                                                                        {recent_post.title}
                                                                    </h4>
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
                        )
                    })}
                </div>
            </div>
        );
    }
}


export default Blogs;