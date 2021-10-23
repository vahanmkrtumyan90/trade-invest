import React from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    count: 1,
    title: `Building Construction`,
    icon: require("./../../images/icon/crane-1.png"),
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    count: 2,
    title: "Building Renovation",
    icon: require("./../../images/icon/renovation.png"),
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    count: 3,
    title: "Building Maintenance",
    icon: require("./../../images/icon/toolbox.png"),
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    count: 4,
    title: "Architecture Design",
    icon: require("./../../images/icon/compass.png"),
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
];

var img1 = require("./../../images/background/bg-6.png");

class OurServices extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }

  render() {
    const blogs = [
      {
        image: require("./../../images/blog/blog-grid/pic4.jpg"),
        title: "We’ll nail your next project, because nobody wants!",
        description:
          "Same as saying through shrinking from toil and pain these cases perfectly simple.",
        date: "17",
        month: "Feb",
        year: "2021",
      },
      {
        image: require("./../../images/blog/blog-grid/pic1.jpg"),
        title: "Helping you and your house become better acquainted.",
        description:
          "Same as saying through shrinking from toil and pain these cases perfectly simple.",
        date: "16",
        month: "Jan",
        year: "2021",
      },
      {
        image: require("./../../images/blog/blog-grid/pic2.jpg"),
        title:
          "Creating quality urban lifestyles, building stronger communities.",
        description:
          "Same as saying through shrinking from toil and pain these cases perfectly simple.",
        date: "14",
        month: "Feb",
        year: "2021",
      },
      {
        image: require("./../../images/blog/blog-grid/pic2.jpg"),
        title:
          "Creating quality urban lifestyles, building stronger communities.",
        description:
          "Same as saying through shrinking from toil and pain these cases perfectly simple.",
        date: "14",
        month: "Feb",
        year: "2021",
      },
    ];

    return (
      <>
        <div className="section-full mobile-page-padding  p-b50  square_shape2">
          <div className="section-content">
            <div
              className="Service-half-top p-t80  bg-dark bg-moving"
              style={{ backgroundImage: "url(" + img1.default + ")" }}
            >
              <div className="container">
                {/* TITLE START */}
                <div className="section-head text-white">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-white text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Our
                        </span>{" "}
                        Services
                      </h2>
                    </div>
                  </div>
                  <h3>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </h3>
                </div>
                {/* TITLE END */}
              </div>
            </div>
            <div className="services-half-bottom">
              <div className="container">
                <div className="row">
                  {blogs.map((item, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                      <div className="blog-post blog-grid date-style-2 bg-white">
                        <div className="mt-post-media mt-img-effect zoom-slow">
                          <NavLink to={"/post-image"}>
                            <img src={item.image.default} alt="" />
                          </NavLink>
                        </div>
                        <div className="mt-post-info p-a30">
                          <div className="mt-post-title ">
                            <h4 className="post-title">
                              <NavLink to={"/post-image"}>{item.title}</NavLink>
                            </h4>
                          </div>

                          <div className="mt-post-text">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-3 col-sm-6" key={index}>
                                            <div className="mt-icon-box-wraper m-b30">
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon.default} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
            <strong>Services</strong>
          </div>
        </div>
      </>
    );
  }
}

export default OurServices;
