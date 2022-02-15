import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import urls from "../../config/urls.config";
import MyMainButton from "../Buttons/MyMainButton";
import ColorSection from "../Sections/ColorSection";

const FollowUsHeadstartSection = () => {
  return (
    <ColorSection paddingVertEnabled={false}>
      {/* <div className="flex"> */}
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
      {/* </div> */}
    </ColorSection>
  );
};

export default FollowUsHeadstartSection;
