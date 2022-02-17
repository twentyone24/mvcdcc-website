import urls from "../../config/urls.config";
import MyImageComponent from "../Image/MyImageComponent";
import ColorSection from "../Sections/ColorSection";
import SectionWithBackgroundColor from "./SectionWithBackgroundColor";

const HomeOpportunitySection = () => {
  return (
    <ColorSection
      backgroundColor="var(--primary)"
      style={{ paddingTop: 50, paddingBottom: 50 }}
      paddingVertEnabled={false}
    >
      <MyImageComponent
        // height={300}
        href={urls.aboutUs}
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/9be586d8-368a-46fa-9097-c60b2acec933/image-asset.png?format=750w"
        className="reveal"
      />
    </ColorSection>
  );
};

export default HomeOpportunitySection;
