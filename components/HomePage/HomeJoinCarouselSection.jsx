import MyImageComponent from "../Image/MyImageComponent";
import ColorSection from "../Sections/ColorSection";

const HomeJoinCarouselSection = () => {
  return (
    <ColorSection
      backgroundColor="var(--secondary)"
      containerEnabled={false}
      paddingVertEnabled={false}
      // paddingvert={0}
      // style={{ position: "relative" }}
      // minHeight={400}
    >
      <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/20f5e5db-f2d6-4cf3-a3e9-6010cf18d03c/MAP3.jpg?format=2500w"
        width={"100%"}
        reveal={false}
        height={400}
        href="#"
        style={{
          objectFit: "cover",
          // objectPosition: "center",
          padding: 0,
          margin: 0,
        }}
        className="carousel-image"
      />
    </ColorSection>
  );
};

export default HomeJoinCarouselSection;
