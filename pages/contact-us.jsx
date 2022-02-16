import ContactForm from "../components/Forms/ContactForm";
import MyLink from "../components/MyLink";
import NavbarGap from "../components/Navbar/NavbarGap";
import LargeContainerNoFlexColorSection from "../components/Sections/LargeContainerNoFlexColorSection";
import urls from "../config/urls.config";

const ContactUs = () => {
  return (
    <div id="contact-us">
      <NavbarGap />
      <LargeContainerNoFlexColorSection borderEnabled={false}>
        <div className="grid">
          <div className="left">
            <div id="contact-us-container">
              <h2>Contact us</h2>
              <p>
                Do you have questions about enrolling your child in MVCDC or
                would you like more information about us?
              </p>
              <p>
                Would you like to become involved at MVCDC,{" "}
                <MyLink href={urls.donateToUs}> donate to us </MyLink> or
                volunteer?
              </p>
              <p>
                <strong>We’d love to talk with you.</strong>
              </p>
              <p>
                If you have questions, fill out the form on this page, email us
                at <strong>info@mvcdc.org</strong> or call{" "}
                <strong>(937) 236-7655.</strong>
              </p>
            </div>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default ContactUs;
