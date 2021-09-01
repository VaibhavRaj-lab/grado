import './Hero.scss'
import img_hero_images from './img/hero_images.svg'

export default function Hero(props) {
    return (
        <>
            <div id="component_hero">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg mb-3">
                            <h2 className="text-white display-5 fw-bold">Tagline (2-3 words.(three pre)</h2>
                            <p className="lead">You description(Need not to be very short , but should be lesser than
                                your about secetion) probably 30 words will be good enough</p>
                            <div
                                className="mt-5 gap-4 d-flex flex-column  flex-md-row justify-content-md-center justify-content-lg-start">
                                <button className="px-5 fw-bold btn btn-lg btn_1">Login</button>
                                <button className="px-5 fw-bold btn btn-lg btn_2">Learn</button>
                            </div>
                        </div>
                        <div className="col-lg mb-3">
                            <img className="img-fluid mt-5 mt-lg-0" src={img_hero_images}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};