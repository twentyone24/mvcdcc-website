import CareerOpportunities from "../components/JoinOurTeam/CareerOpportunities";
import DiversityAndInclusion from "../components/JoinOurTeam/DiversityAndInclusion";
import WhyWorkForMiamiValleyCenter from "../components/JoinOurTeam/WhyWorkForMiamiValleyCenter";
import NavbarGap from "../components/Navbar/NavbarGap";

const JoinOurTeam = () => {
  return (
    <div id="join-out-team">
      <NavbarGap />
      <CareerOpportunities />
      <WhyWorkForMiamiValleyCenter />
      <DiversityAndInclusion />
    </div>
  );
};

export default JoinOurTeam;
