import EnrollmentButton from "../Buttons/EnrollmentButton";
import MyMainButton from "../Buttons/MyMainButton";
import ImageContainerWithOverlay from "./ImageContainerWithOverlay";

const HeroSection = () => {
  const imageUrl =
    "https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/2720b5d4-cce0-40ec-9d62-dd7960899fe0/MVCDC+Sept+13+20211856.jpg";
  const overlayColor = "#725f99";

  return (
    <>
      <ImageContainerWithOverlay
        backgroundImageUrl={imageUrl}
        overlayColor={overlayColor}
        // maxHeight={"70vh"}
        // overlayOpacity={0.7}
        minHeight={"70vh"}
        className="section hero-with-background-section"
        reveal={false}
      >
        <div className="hero-section-container content-container">
          <div className="gap"></div>.
          <h1 className="text-white">
            Enroll in Head Start or Early Head Start at MVCDC!
          </h1>
          <div className="hero-enrollment-button">
            <EnrollmentButton />
          </div>
        </div>
      </ImageContainerWithOverlay>
      {/* <div
        className="section"
        style={{
          background:
            "url(https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/2720b5d4-cce0-40ec-9d62-dd7960899fe0/MVCDC+Sept+13+20211856.jpg)",
          backgroundSize: "cover",
          minHeight: 800,
        }}
      >
        <div className="color-overlay"></div>

        <div className="section-container container">
          <div className="gap"></div>.
          <div className="content-container">
            <h1 className="text-white">
              Enroll in Head Start or Early Head Start at MVCDC!
            </h1>
            <MyMainButton>Enrollment Start Here</MyMainButton>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
