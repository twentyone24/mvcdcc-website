import MenuComponent from "../Menu/MenuComponent";
import SearchComponent from "./SearchComponent";

// import logo from "../../logo.png";
import { useEffect, useState } from "react";
import MyLink from "../MyLink";
import MobileMenuComponent from "../Menu/MobileMenuComponent";
import urls from "../../config/urls.config";
import MyImageComponent from "../Image/MyImageComponent";

// import dynamic from "next/dynamic";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((currToggle) => !currToggle);
  };

  useEffect(() => {
    // let done = false;
    // const doSomething = async () => {
    //   try {
    //     if (!done) {
    //       // const ScrollReveal = dynamic(import("scrollreveal"), {});
    //       // const ScrollReveal = require("scrollreveal");

    //       console.log(ScrollReveal);
    //       ScrollReveal().reveal(".reveal");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // doSomething();

    const require = "../../scroll-reveal";
    const navbarEle = document.getElementById("navbar");
    const newHiddenTop = "-500px";

    let lastScroll = 0;
    window.onscroll = function () {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

      if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        // On Scroll Down
        if (navbarEle.style.top !== newHiddenTop) {
          navbarEle.style.top = newHiddenTop;
        }

        document.getElementById("navbar").classList.remove("show");
      } else {
        // On Scroll Up
        lastScroll = currentScroll;
        if (navbarEle.style.top === newHiddenTop) {
          navbarEle.style.top = "0";
        }
      }

      if (toggle) {
        handleToggle();
      }
    };

    return () => {
      done = true;
    };
  }, []);

  return (
    <div id="navbar" className="navbar ">
      <div className="navbar-desktop">
        <div className="container-large navbar-container">
          {/* Logo */}
          <MyImageComponent
            reveal={false}
            src="/images/logo.png"
            alt="logo"
            height={78}
            href={urls.home}
            width={200}
          />

          <MenuComponent />
          <SearchComponent />
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="container-large navbar-mobile-container">
          {/* Logo */}
          <MyImageComponent
            reveal={false}
            src="/images/favicon.png"
            alt="mobile-logo"
            height={38}
            href={urls.home}
            width={33}
          />

          <div className="mobile-menu-button" onClick={handleToggle}>
            {toggle ? (
              <>
                {/* Toggle On */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: "2rem", cursor: "pointer" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </>
            ) : (
              <>
                {/* Toggle Off */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: "2rem", cursor: "pointer" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </>
            )}
          </div>
        </div>

        <div className="container-large navbar-container">
          {toggle && (
            <>
              <div className="navbar-mobile-menu">
                <MobileMenuComponent />
                {/* <MenuComponent /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
