import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import MyMainButton from "../components/Buttons/MyMainButton";
import FollowUsHeadstartSection from "../components/HomePage/FollowUsHeadstartSection";
import HeadstartDuration from "../components/HomePage/HeadstartDuration";
import HeroSection from "../components/HomePage/HeroSection";
import HomeJoinCarouselSection from "../components/HomePage/HomeJoinCarouselSection";
import HomeOpportunitySection from "../components/HomePage/HomeOpportunitySection";
import HomeVideoSection from "../components/HomePage/HomeVideoSection";
import HomeWhyChooseHeadStartSection from "../components/HomePage/HomeWhyChooseHeadStartSection";
import ParentFeedback from "../components/HomePage/ParentFeedback";
import SectionWithBackgroundColor from "../components/HomePage/SectionWithBackgroundColor";
import MyImageComponent from "../components/Image/MyImageComponent";
import ColorSection from "../components/Sections/ColorSection";
import urls from "../config/urls.config";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <HomeOpportunitySection />
      {/* <SectionWithBackgroundColor
        backgroundColor="var(--primary)"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <MyImageComponent
          // height={300}
          src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/9be586d8-368a-46fa-9097-c60b2acec933/image-asset.png?format=750w"
        />
      </SectionWithBackgroundColor> */}

      {/* Carousel */}
      <HomeJoinCarouselSection />
      {/* <ColorSection
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
          height={400}
          href="#"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            padding: 0,
            margin: 0,
          }}
        />
      </ColorSection> */}

      {/* Headstart Section */}
      <HomeWhyChooseHeadStartSection />
      {/* <SectionWithBackgroundColor>
        <h3 className="text-primary">WHY CHOOSE HEAD START?</h3>
        <MyMainButton>Learn More</MyMainButton>
      </SectionWithBackgroundColor> */}

      {/* Video Section */}
      <HomeVideoSection />
      {/* <SectionWithBackgroundColor backgroundColor="var(--secondary)">
        <MyImageComponent src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1626451927328-630DIQZFV5JTU2X63JCT/MVCDC_PS.png?format=300w" />
        <div className="youtube-embedded">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pG-5wcmjDVU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </SectionWithBackgroundColor> */}

      {/* Headstart Section */}
      <FollowUsHeadstartSection />
      {/* <SectionWithBackgroundColor>
        <h3 className="text-primary">FOLLOW US ON SOCIAL MEDIA</h3>
        <MyMainButton href={urls.facebookPage}>
          <FaFacebookF />
        </MyMainButton>
        <MyMainButton href={urls.twitterPage}>
          <FaTwitter />
        </MyMainButton>
        <MyMainButton href={urls.instagramPage}>
          <FaInstagram />
        </MyMainButton>
        <MyMainButton href={urls.youtubePage}>
          <FaYoutube />
        </MyMainButton>
      </SectionWithBackgroundColor> */}

      {/* Headstart Duration */}
      <HeadstartDuration />
      {/* <ColorSection
        backgroundColor={"var(--secondary)"}
        containerEnabled={false}
        paddingVertEnabled={false}
      >
        <div className="flex">
          <MyImageComponent
            src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1fc282a7-e15d-40a1-a392-ee62d4d1137b/EHS+homepage+PINK.png?format=1000w"
            height={400}
            href="#"
            width={"100%"}
          />
          <MyImageComponent
            height={400}
            width={"100%"}
            href="#"
            src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/b809beba-e3fc-4cb8-b1ba-4d0aa9217246/HS+homepage+PURPLE.png?format=1000w"
          />
        </div>
      </ColorSection> */}

      {/* Parent Feedback */}
      <ParentFeedback />
      {/* <SectionWithBackgroundColor>
        <MyImageComponent
          href="#"
          src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/61f26e0f-c10b-49d4-b236-4bcf32012a95/homepage+testimonial2-centered-01.png?format=750w"
        />
      </SectionWithBackgroundColor> */}
    </div>
  );
};

export default Home;
