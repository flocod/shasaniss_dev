import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/logo.svg";

const Header = (props) => {
  const [isActive, setIsActive] = useState(props.isActiveToggle);
  const targetElement = document.querySelector("body");

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", handleUserThemeOSChange);

  useEffect(() => {
    const theme = isActive ? "--theme-color_dark" : "--theme-color_light";
    setThemeBar(theme);
  }, [isActive]);

  const setThemeBar = (theme) => {
    const metaThemeColor = document.getElementById("theme-color-meta");
    const primaryColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(theme);
    metaThemeColor.setAttribute("content", primaryColor);

    localStorage.setItem("theme", theme);
  };

  const setThemeOs = (theme) => {
    const metaThemeColor = document.getElementById("theme-color-meta");
    const primaryColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(theme);
    metaThemeColor.setAttribute("content", primaryColor);
  };

  const toggleClass = () => {
    setIsActive(!isActive);
    targetElement.classList.toggle("dark");
  };

  function handleUserThemeOSChange(event) {
    // Quand l'utilisateur change le theme de son système d'exploitation
    const theme = event.matches ? "--theme-color_dark" : "--theme-color_light";
    console.log(event.matches ? "Thème sombre activé" : "Thème clair activé");
    // setIsActive(event.matches);
    setThemeOs(theme);
    event.matches
      ? document.querySelector("body").classList.add("dark")
      : document.querySelector("body").classList.remove("dark");
  }

  return (
    <div className="Header">
      <div className="main_struct">
        <div className="logo">
          <NavLink className={`link`} to="/">
            <img src={logo} alt="logo de shasaniss" />
          </NavLink>
        </div>

        <nav className="nav">
          <ul>
            {[
              { path: "/", label: "Acceuil" },
              { path: "/services", label: "Services" },
              { path: "/boutique", label: "Boutique" },
              { path: "/realisations", label: "Réalisations" },
              { path: "/contacts", label: "Contacts" },
              { path: "/propos", label: "A Propos" },
            ].map((link, index) => (
              <li className={link.label.toLowerCase()} key={index}>
                <NavLink className={`link`} to={link.path}>
                  {link.label}
                </NavLink>{" "}
              </li>
            ))}
          </ul>

          <div className="header_stuf">
            <div className="toogleLightContainer">
              <div
                className={`toogleLight ${isActive ? "active" : ""}`}
                onClick={toggleClass}
              >
                <div className="icon">
                  <svg
                    className="sun"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    /
                    <path
                      d="M7.53098 4.83341C7.53098 6.32328 6.32319 7.53107 4.83331 7.53107C3.34344 7.53107 2.13565 6.32328 2.13565 4.83341C2.13565 3.34353 3.34344 2.13574 4.83331 2.13574C6.32319 2.13574 7.53098 3.34353 7.53098 4.83341Z"
                      fill="#040404"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.83331 0C5.01954 0 5.17052 0.150975 5.17052 0.337208V0.786818C5.17052 0.973052 5.01954 1.12403 4.83331 1.12403C4.64708 1.12403 4.49611 0.973052 4.49611 0.786818V0.337208C4.49611 0.150975 4.64708 0 4.83331 0ZM1.41565 1.41565C1.54733 1.28396 1.76085 1.28396 1.89253 1.41565L2.06916 1.59227C2.20084 1.72396 2.20084 1.93747 2.06916 2.06916C1.93747 2.20084 1.72396 2.20084 1.59227 2.06916L1.41565 1.89253C1.28396 1.76085 1.28396 1.54733 1.41565 1.41565ZM8.25085 1.41577C8.38254 1.54745 8.38254 1.76096 8.25085 1.89265L8.07424 2.06927C7.94255 2.20096 7.72903 2.20096 7.59734 2.06927C7.46565 1.93758 7.46565 1.72408 7.59734 1.59239L7.77399 1.41577C7.90568 1.28408 8.11916 1.28408 8.25085 1.41577ZM0 4.83331C0 4.64708 0.150975 4.49611 0.337208 4.49611H0.786818C0.973052 4.49611 1.12403 4.64708 1.12403 4.83331C1.12403 5.01954 0.973052 5.17052 0.786818 5.17052H0.337208C0.150975 5.17052 0 5.01954 0 4.83331ZM8.5426 4.83331C8.5426 4.64708 8.69358 4.49611 8.87981 4.49611H9.32942C9.51565 4.49611 9.66663 4.64708 9.66663 4.83331C9.66663 5.01954 9.51565 5.17052 9.32942 5.17052H8.87981C8.69358 5.17052 8.5426 5.01954 8.5426 4.83331ZM7.59734 7.59734C7.72903 7.46565 7.94255 7.46565 8.07424 7.59734L8.25085 7.77399C8.38254 7.90568 8.38254 8.11916 8.25085 8.25085C8.11916 8.38254 7.90568 8.38254 7.77399 8.25085L7.59734 8.07424C7.46565 7.94255 7.46565 7.72903 7.59734 7.59734ZM2.06916 7.59747C2.20084 7.72916 2.20084 7.94268 2.06916 8.07438L1.89253 8.25098C1.76085 8.38267 1.54733 8.38267 1.41565 8.25098C1.28396 8.11929 1.28396 7.90577 1.41565 7.77408L1.59227 7.59747C1.72396 7.46578 1.93747 7.46578 2.06916 7.59747ZM4.83331 8.5426C5.01954 8.5426 5.17052 8.69358 5.17052 8.87981V9.32942C5.17052 9.51565 5.01954 9.66663 4.83331 9.66663C4.64708 9.66663 4.49611 9.51565 4.49611 9.32942V8.87981C4.49611 8.69358 4.64708 8.5426 4.83331 8.5426Z"
                      fill="#040404"
                    />
                  </svg>

                  <svg
                    className="moon"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10C7.7614 10 10 7.7614 10 5C10 4.76865 9.65325 4.7304 9.5336 4.9284C8.96445 5.8703 7.93075 6.5 6.75 6.5C4.95505 6.5 3.5 5.04495 3.5 3.25C3.5 2.06922 4.1297 1.03553 5.0716 0.46638C5.2696 0.346735 5.23135 0 5 0C2.23857 0 0 2.23857 0 5C0 7.7614 2.23857 10 5 10Z"
                      fill="#040404"
                    />
                  </svg>
                </div>
                <div className={`slide`}></div>
              </div>
            </div>

            <div className="btn_menu">
              <button className="btn_cta">Menu</button>
            </div>

            <div className="cta">
              <button className="btn_cta">Let's do it</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
