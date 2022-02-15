import MyImageComponent from "../Image/MyImageComponent";
import NavbarGap from "../Navbar/NavbarGap";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const OurPurpose = () => {
  return (
    <div id="our-purpose">
      <LargeContainerNoFlexColorSection
        backgroundColor={"var(--secondary-light)"}
        borderEnabled={false}
      >
        <NavbarGap />
        <h3 className="text-white">Our purpose</h3>

        <div className="grid">
          <div className="left">
            <MyImageComponent src="/images/everyone deserves opportunity.png" />
            <MyImageComponent src="/images/dashed-yellow-line-break.png" />
          </div>
          <div className="right">
            <MyImageComponent src="/images/Miami View Child Development Center 4.jpeg" />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default OurPurpose;
