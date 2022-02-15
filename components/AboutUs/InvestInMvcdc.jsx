import FloatingImage from "../Image/FloatingImage";
import MyImageComponent from "../Image/MyImageComponent";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const InvestInMvcdc = () => {
  return (
    <div id="invest-in-mvcdc">
      <LargeContainerNoFlexColorSection>
        <div className="grid">
          <div className="left">
            <h3>Invest in MVCDC</h3>

            <p>
              Miami Valley Child Development Centers, Inc. is a 501(c)(3)
              charitable organization. We are dedicated to supporting families
              experiencing poverty and helping their children get ready for
              kindergarten.
            </p>
            <p>
              Donations are tax deductible. Please make checks payable to Miami
              Valley Child Development Centers, Inc., 215 Horace Street, Dayton,
              Ohio 45402.
            </p>
            <p>Thank you for your support!</p>
          </div>
          <div className="right">
            <MyImageComponent
              src="/images/MVCDC single child.jpeg"
              alt="mvcdc"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default InvestInMvcdc;
