import urls from "../../config/urls.config";
import EnrollmentButton from "../Buttons/EnrollmentButton";
import ColorSection from "../Sections/ColorSection";
import FooterSocialIcons from "./FooterSocialIcons";

const FooterComponent = () => {
  return (
    <ColorSection
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
    </ColorSection>
  );
};

export default FooterComponent;
