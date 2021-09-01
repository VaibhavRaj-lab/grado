import React from 'react'
import './Colleges.scss'
import Navbar from './Navbar'
import line_img from './img/line_img.svg'
import icon_img from './img/icon_img.svg'
import img_blog_cover from './img/blog_cover.png'
import img_footer_images from './img/footer_images.png'
import hero_teaching_img from './img/hero_teaching.svg'



class Colleges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.blogs = [
            {'name': 'one', 'desc': 'sfsdf'},
            {'name': 'two', 'desc': 'sfsdf'},
            {'name': 'three', 'desc': 'sfsdf'}
        ]

    }

    render() {
        return (
            <>
                <Navbar />
                <div id="component_colleges">
                    <div className="container my-5">
                        <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 align-items-center">
                            <div className="">
                                <h2 className="mb-3">Select the best college accourding to your choice , courses and  requirenments</h2>
                                <p className="mb-3">lajlxdnkzjbdkjsabxnbsfjbdiufbo  xakbdjks Zaskx iasbdia DK AODDB XKAND dPOSAN DPASOHDNKAS DOISAHND </p>
                                <div className="mt-5 d-flex gap-2 flex-column align-items-center px-5">
                                    <img className="img-fluid" src={line_img} alt="This is line" />
                                    <img className="img-fluid" src={icon_img} alt=" This is icon" />
                                </div>
                            </div>
                            <img className="img-fluid" src={hero_teaching_img} alt="This is hero image" />
                        </div>
                    </div>
                    <div className="container my-5">
                        <h2 className="py-5">Categories</h2>
                        <div className="text-center d-flex flex-column flex-md-row gap-3 gap-lg-5 justify-content-evenly">
                            <div className="card py-3 flex-fill bg-transparent">
                                <div className="card-header pb-0 h2  border-0 bg-transparent">TOP 10</div>
                                <div className="card-body pt-1 display-1">NIT'S</div>
                            </div>
                            <div className="card active py-3 flex-fill bg-transparent">
                                <div className="card-header pb-0 h2 border-0 bg-transparent">TOP 10</div>
                                <div className="card-body pt-1 display-1">NIT'S</div>
                            </div>
                            <div className="card py-3 flex-fill bg-transparent">
                                <div className="card-header pb-0 h2 border-0 bg-transparent">TOP 10</div>
                                <div className="card-body pt-1 display-1">NIT'S</div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h2 className="py-5">College Blogs</h2>
                        <div className="d-flex flex-column gap-3 gap-lg-5">
                            {this.blogs.map((blog, index)=> {
                                return (
                                    <div key={index} className="d-flex align-items-center align-items-md-stretch flex-column flex-md-row gap-3 blog">
                                        <img className="blog-img flex-fill" src={img_blog_cover}/>
                                        <div className="py-md-3">
                                            <h3 className="">Blog title here</h3>
                                            <p className="text-muted">This is fsj lfj slkj flksjd lkfjsdkl fjslkdj flksdjfkl</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container my-5">
                        <div className="row gy-3 row-cols-2 row-cols-md-3">
                            <div className="col mx-auto">
                                <img className="img-fluid footer-images" src={img_footer_images}/>
                            </div>
                            <div className="col mx-auto">
                                <img className="img-fluid footer-images" src={img_footer_images}/>
                            </div>
                            <div className="col mx-auto">
                                <img className="img-fluid footer-images" src={img_footer_images}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Colleges;
