import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  require("./../../images/gallery/portrait/pic4.jpg"),
  require("./../../images/gallery/portrait/pic5.jpg"),
  require("./../../images/gallery/portrait/pic6.jpg"),
  require("./../../images/gallery/portrait/pic7.jpg"),
  require("./../../images/gallery/portrait/pic1.jpg"),
];

var bnr1 = require("./../../images/background/line.png");

class About4 extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1,
      dots: true,
    };
    return (
      <>
        <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
          <div className="container">
            <div className="section-content ">
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <div className="m-about ">
                    <OwlCarousel
                      className="owl-carousel about-us-carousel"
                      {...options}
                    >
                      {images.map((item, index) => (
                        <div className="item" key={index}>
                          <div className="ow-img">
                            <NavLink to="/about">
                              <img src={item.default} alt="" />
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6">
                  <div className="m-about-containt text-black p-t80">
                    <div
                      className="m-about-years bg-moving"
                      style={{ backgroundImage: "url(" + bnr1.default + ")" }}
                    >
                      <span className="text-primary large-title">25</span>
                      <span className="large-title-info">
                        Years of Experience
                      </span>
                    </div>
                    <h3 className="font-weight-600">
                      Improving quality of life with an integrated unified
                      approach.
                    </h3>
                    <p>
                      Dummy text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical. Due to its
                      widespread use texts. Ut wisi enim ad minim veniam, quis
                      nostrud exerci tation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About4;
