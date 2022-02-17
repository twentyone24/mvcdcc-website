import Script from "next/script";
import urls from "../../config/urls.config";
import EnrollmentButton from "../Buttons/EnrollmentButton";
import ColorSection from "../Sections/ColorSection";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";
import FooterSocialIcons from "./FooterSocialIcons";

const FooterComponent = () => {
  return (
    <LargeContainerNoFlexColorSection
      borderEnabled={false}
      backgroundColor={"var(--secondary)"}
      containerEnabled={false}
    >
      <div className="container-large footer-container">
        <div className="footer-content text-white">
          <div className="footer-menu">
            <div className="footer-menu-container">
              <div className="footer-left-menu">
                <a href={urls.testimonials} className="footer-menu-link">
                  <p>Testimonials</p>
                </a>
                <a href={urls.intranet} className="footer-menu-link">
                  <p>Intranet</p>
                </a>
                <a href={urls.contactUs} className="footer-menu-link">
                  <p>Contact us</p>
                </a>
              </div>
              <div className="footer-right-menu">
                <a href={urls.locations} className="footer-menu-link">
                  <p>Location</p>
                </a>
              </div>
            </div>
          </div>

          <FooterSocialIcons />
        </div>

        <EnrollmentButton />
      </div>
      {/* <Script src="/scrollreveal.js"></Script> */}
      <Script src="/scrollreveal.js"></Script>
    </LargeContainerNoFlexColorSection>
  );
};

export default FooterComponent;
