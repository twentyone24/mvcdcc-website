import MyImageComponent from "../Image/MyImageComponent";
import ColorSection from "../Sections/ColorSection";
import YoutubeEmbeedWrapper from "../YoutubeEmbeedWrapper";

const HomeVideoSection = () => {
  return (
    <ColorSection backgroundColor="var(--secondary)">
      <MyImageComponent src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1626451927328-630DIQZFV5JTU2X63JCT/MVCDC_PS.png?format=300w" />
      <YoutubeEmbeedWrapper>
        <iframe
          className="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pG-5wcmjDVU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </YoutubeEmbeedWrapper>
    </ColorSection>
  );
};

export default HomeVideoSection;
