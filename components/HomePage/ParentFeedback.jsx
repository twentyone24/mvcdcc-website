import urls from "../../config/urls.config";
import MyImageComponent from "../Image/MyImageComponent";
import ColorSection from "../Sections/ColorSection";

const ParentFeedback = () => {
  return (
    <ColorSection>
      {/* Parent Feedback */}
      <MyImageComponent
        href={urls.testimonials}
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/61f26e0f-c10b-49d4-b236-4bcf32012a95/homepage+testimonial2-centered-01.png?format=750w"
      />
    </ColorSection>
  );
};

export default ParentFeedback;
