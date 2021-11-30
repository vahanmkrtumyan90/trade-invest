import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavHashLink } from "react-router-hash-link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="site-footer footer-large  footer-dark	footer-wide">
        {/* FOOTER BLOCKES START */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              {/* ABOUT COMPANY */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget widget_about">
                  <p className="max-w400">{t("about_text")}</p>
                </div>
              </div>
              {/* RESENT POST */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget widget_address_outer">
                  <h4 className="widget-title">{t("contactus")}</h4>
                  <ul className="widget_address">
                    <li>{t("address_text")}</li>
                    <li>{t("email_text")}</li>
                    <li>{t("phone_text")}</li>
                  </ul>
                </div>
              </div>
              {/* USEFUL LINKS */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                <div className="widget widget_services inline-links">
                  <h4 className="widget-title">{t("useful")}</h4>
                  <ul>
                    <li>
                      <NavHashLink to="/#about">{t("about")}</NavHashLink>
                    </li>
                    <li>
                      <Link to={"/services"}>{t("services")}</Link>
                    </li>
                    <li>
                      <NavLink to={"/contactus"}>{t("contact")}</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NEWSLETTER */}
            </div>
          </div>
        </div>
        {/* FOOTER COPYRIGHT */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              <div className="mt-footer-bot-center">
                <span className="copyrights-text">© 2021 Trade invest</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
