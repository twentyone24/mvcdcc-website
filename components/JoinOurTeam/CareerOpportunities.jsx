import urls from "../../config/urls.config";
import MyImageComponent from "../Image/MyImageComponent";
import MyLink from "../MyLink";
import MyUnorderListContainer from "../UnorderedList/MyUnorderListContainer";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const CareerOpportunities = () => {
  return (
    <div id="career-opportunities">
      <LargeContainerNoFlexColorSection borderEnabled={false}>
        <h3>Career opportunities</h3>
        <div className="grid">
          <div className="left">
            <div className="video-frame float-left">
              <iframe
                width="560"
                style={{ maxWidth: "100%" }}
                height="315"
                src="https://www.youtube.com/embed/1WNtYflH4Ug"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="right">
            <h4>
              For more information about our open positions and to apply, please
              visit our <MyLink href={urls.careerCenter}>Career Center</MyLink>.
            </h4>
            <hr />

            {/* TODO 20px margin round this container */}
            <MyUnorderListContainer>
              <li>
                <strong className="text-light-blue">Clinical Therapist</strong>{" "}
                – This is a position with an external contractor providing
                services to MVCDC. Interested candidates can apply to the
                Village Network.
              </li>
            </MyUnorderListContainer>

            <MyImageComponent src="/images/dashed-yellow-line-break.png" />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default CareerOpportunities;
