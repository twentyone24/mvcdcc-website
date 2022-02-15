import urls from "../../config/urls.config";
import MyMainButton from "../Buttons/MyMainButton";
import ColorSection from "../Sections/ColorSection";

const HomeWhyChooseHeadStartSection = () => {
  return (
    <ColorSection paddingVertEnabled={false}>
      <h3 className="text-primary">WHY CHOOSE HEAD START?</h3>
      <MyMainButton href={urls.whatWeDo}>Learn More</MyMainButton>
    </ColorSection>
  );
};

export default HomeWhyChooseHeadStartSection;
