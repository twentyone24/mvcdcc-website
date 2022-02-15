import BoardOfDirectors from "../components/AboutUs/BoardOfDirectors";
import InvestInMvcdc from "../components/AboutUs/InvestInMvcdc";
import LeadershipTeam from "../components/AboutUs/LeadershipTeam";
import OurMission from "../components/AboutUs/OurMission";
import OurPurpose from "../components/AboutUs/OurPurpose";

const AboutUs = () => {
  return (
    <div id="about-us">
      <OurPurpose />

      <OurMission />

      <LeadershipTeam />

      <BoardOfDirectors />

      <InvestInMvcdc />
    </div>
  );
};

export default AboutUs;
