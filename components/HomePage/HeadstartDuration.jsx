import urls from "../../config/urls.config";
import MyImageComponent from "../Image/MyImageComponent";
import ColorSection from "../Sections/ColorSection";

const HeadstartDuration = () => {
  return (
    <ColorSection
      backgroundColor={"var(--secondary)"}
      containerEnabled={false}
      paddingVertEnabled={false}
    >
      <div className="flex">
        <MyImageComponent
          src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1fc282a7-e15d-40a1-a392-ee62d4d1137b/EHS+homepage+PINK.png?format=1000w"
          height={400}
          href={urls.whatWeDo + "#ehs"}
          width={"100%"}
        />
        <MyImageComponent
          height={400}
          width={"100%"}
          href={urls.whatWeDo + "#hs"}
          src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/b809beba-e3fc-4cb8-b1ba-4d0aa9217246/HS+homepage+PURPLE.png?format=1000w"
        />
      </div>
    </ColorSection>
  );
};

export default HeadstartDuration;
