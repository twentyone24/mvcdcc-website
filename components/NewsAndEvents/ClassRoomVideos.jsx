import urls from "../../config/urls.config";
import MyImageComponent from "../Image/MyImageComponent";
import MyLink from "../MyLink";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";
import YoutubeEmbeedWrapper from "../YoutubeEmbeedWrapper";

const ClassRoomVideos = () => {
  return (
    <div id="class-room-videos">
      <LargeContainerNoFlexColorSection>
        <h3>Classroom Vidoes</h3>
        <div className="grid-card-3" id="class-room-youtube-videos">
          <YoutubeEmbeedWrapper>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/f3Dc_tQFIiM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </YoutubeEmbeedWrapper>

          <YoutubeEmbeedWrapper>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/PHlOpnzwSDU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </YoutubeEmbeedWrapper>

          <div className="videos-on-facebook">
            <h4>
              Watch more videos on our{" "}
              <MyLink href={urls.facebookPage}>facebook</MyLink> page!
            </h4>

            <MyImageComponent
              src="/images/dashed-yellow-line-break.png"
              alt="slash yellow border"
            />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default ClassRoomVideos;
