import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation(props) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
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
  }, []);

  console.log(i18n);

  return (
    <>
      <div
        className={
          props.bgcolor !== ""
            ? `header-nav navbar-collapse collapse ${props.bgcolor}`
            : "header-nav navbar-collapse collapse"
        }
      >
        <ul className="nav navbar-nav">
          <li className="active">
            <NavLink to={"./"}>{t("home")}</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>{t("services")}</NavLink>
          </li>
          <li>
            <NavLink to={"/contactus"}>{t("contact")}</NavLink>
          </li>
          <li>
            <NavLink to={""}>
              {i18n?.language === "am" ? "Լեզու" : "Язык"}
            </NavLink>
            <ul className="sub-menu">
              <li onClick={() => i18n.changeLanguage("am")}>
                <NavLink to={""}>Հայերեն</NavLink>
              </li>
              <li onClick={() => i18n.changeLanguage("ru")}>
                <NavLink to={""}>Русский</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
