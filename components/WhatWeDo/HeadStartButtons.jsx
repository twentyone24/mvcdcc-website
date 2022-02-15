import urls from "../../config/urls.config";
import MySecondaryButton from "../Buttons/MySecondaryButton";
import ColorSection from "../Sections/ColorSection";

const HeadStartButtons = () => {
  return (
    <ColorSection borderEnabled={false} paddingvert={50}>
      <MySecondaryButton href={urls.whatWeDo + "#ehs"}>
        Early Head Start
      </MySecondaryButton>
      <MySecondaryButton href={urls.whatWeDo + "#hs"}>
        Head Start
      </MySecondaryButton>
    </ColorSection>
  );
};

export default HeadStartButtons;
