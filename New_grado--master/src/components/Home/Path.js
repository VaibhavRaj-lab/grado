import React from 'react'
import './path.css';
import first from "../../Images/Group 354.svg";
import second from "../../Images/Group 359line1.png";
import third from "../../Images/icons8-inquiry-48 2.png";
import four from "../../Images/Group 35412.png";
import five from "../../Images/Group 35513.png";
import six from "../../Images/Group 35614.png";
import seven from "../../Images/Group 35715.png";
import eight from "../../Images/Group 354img.png";
export default function Path() {
    return (
        <div>
             <div className="pathstart">
            <section className="container-fluid roadmap">
              <img className="roadmap-img-lp" src={first} alt="" />
              <img className="roadmap-img-mb" src={second} alt="" />
              <img className="program-part1-img" src={third} alt="" />
              <div className="program-part1 ">
                <p className="p1">1. Pre First Year</p>
                <p className="p2">
                  In this our target will be school students studying in 11th,
                  12th and 13th{" "}
                </p>
              </div>
              <img className="program-part2-img" src={four} alt="" />
              <div className="program-part2 ">
                <p className="p1">2. First Year</p>
                <p className="p2">
                  In this our target will be school students studying in 11th,
                  12th and 13th{" "}
                </p>
              </div>
              <img className="program-part3-img" src={five} alt="" />
              <div className="program-part3 text-center">
                <p className="p1">3. Intermediate Year</p>
                <p className="p2">
                  In this our target will be school students studying in 11th,
                  12th and 13th{" "}
                </p>
              </div>
              <img className="program-part4-img" src={six} alt="" />
              <div className="program-part4 text-center">
                <p className="p1">4. Final Year</p>
                <p className="p2">
                  In this our target will be school students studying in 11th,
                  12th and 13th{" "}
                </p>
              </div>
              <img className="program-part5-img" src={seven} alt="" />
              <img className="roadmap-think-imagery" src={eight} alt="" />
            </section>
          </div>
        </div>
    )
}


