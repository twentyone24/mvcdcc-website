import MyImageComponent from "../Image/MyImageComponent";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const OurMission = () => {
  return (
    <div id="our-mission">
      <LargeContainerNoFlexColorSection backgroundColor={"var(--secondary)"}>
        <h3 className="text-white">Our mission</h3>
        <div className="grid">
          <div className="left">
            <MyImageComponent
              src="/images/MVCDC_PS.png"
              alt="mvcdc"
              height={"100%"}
            />
          </div>
          <div className="right">
            <MyImageComponent
              src="/images/light blue line break.png"
              alt="line break"
            />
            <MyImageComponent src="/images/MVCDC.jpeg" alt="mvcdc" />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default OurMission;
