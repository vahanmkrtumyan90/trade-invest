import { useEffect, useState } from "react";
import Navigation from "../Common/Navigation";
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo-light.png";

var bnr = require("./../../images/background/bg-5.png");

export default function Header() {
  const [isQuoteActive, setIsQuoteActive] = useState(false);

  const handleQuoteToggle = () => {
    setIsQuoteActive(!isQuoteActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      const stickyheader = document.querySelector(".sticky-header ");

      if (offset >= 100) {
        stickyheader.classList.add("is-fixed");
        stickyheader.classList.add("color-fill");
      } else {
        stickyheader.classList.remove("is-fixed");
        stickyheader.classList.remove("color-fill");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="site-header header-style-1">
        <div className="sticky-header main-bar-wraper">
          <div className="main-bar bg-white">
            <div className="container">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <NavLink to={"./"}>
                    <img src={logo} alt="Shapen" />
                  </NavLink>
                </div>
              </div>
              {/* NAV Toggle Button */}
              <button
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggle collapsed"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* ETRA Nav */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <NavLink
                    to={"#"}
                    className="contact-slide-show"
                    onClick={handleQuoteToggle}
                  >
                    <i className="fa fa-angle-left arrow-animation" />
                  </NavLink>
                </div>
              </div>
              {/* ETRA Nav */}
              {/* Contact Nav */}
              <div
                className="contact-slide-hide "
                style={{
                  backgroundImage: "url(" + bnr.default + ")",
                  right: isQuoteActive ? "0px" : "-500px",
                }}
              >
                <div className="contact-nav">
                  <NavLink
                    to={"#"}
                    className="contact_close"
                    onClick={handleQuoteToggle}
                  >
                    ×
                  </NavLink>
                  <div className="contact-nav-form p-a30">
                    <div className="contact-info   m-b30">
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Phone number</h5>
                          <p>(075) 123-7654</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">
                            Email address
                          </h5>
                          <p>7xthemehelp@gmail.com</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Address info</h5>
                          <p>201 Liverpool Street, Suite 721, London</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="font-weight-600">© 2021 7xtheme</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN Vav */}
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
