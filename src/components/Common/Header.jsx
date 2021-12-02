import { useEffect, useState } from "react";
import Navigation from "../Common/Navigation";
import { NavLink } from "react-router-dom";
import logo1 from "./../../images/tr.png";
import { useTranslation } from "react-i18next";

var bnr = require("./../../images/background/bg-5.png");

const lngs = {
  am: { nativeName: "Հայերեն" },
  ru: { nativeName: "Русский" },
};

export default function Header() {
  const [isQuoteActive, setIsQuoteActive] = useState(false);

  const { t } = useTranslation();

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
                    <div style={{ display: "flex" }}>
                      <img src={logo1} alt="Trade Invest" />
                      <p
                        style={{
                          lineHeight: "22px",
                          margin: "0 0 0 8px",
                          fontSize: "22px",
                          fontWeight: "bold",
                          fontFamily: "Poppins",
                        }}
                      >
                        Trade Invest
                      </p>
                    </div>
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
                          <h5 className="m-t0 font-weight-500">{t("phone")}</h5>
                          <p>{t("phone_text")}</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">{t("email")}</h5>
                          <p>{t("email_text")}</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">
                            {t("address")}
                          </h5>
                          <p>{t("address_text")}</p>
                        </div>
                      </div>
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
