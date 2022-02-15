import urls from "../../config/urls.config";
import LeadersCard from "../Cards/LeadersCard";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const LeadershipTeam = () => {
  const leadersObjs = [
    {
      name: "Berta Velilla ",
      position: "Chief Executive Officer",
      imageSrc: "/images/leaders/Berta Velilla.jpeg",
      description:
        "Berta Velilla is CEO and President of MVCDC. She came to MVCDC in May 2019 from Child Focus in Cincinnati and has a rich history with Head Start. Under her leadership, Child Focus’ early learning programs grew and diversified, outcomes improved and research-based program implementation and services became more accessible in the community, moving from churches and community centers to schools. ",
    },
    {
      name: "Coretta Tengesdahl ",
      position: "Chief People Officer",
      imageSrc: "/images/leaders/Coretta Tengesdahl.jpeg",
      description:
        "Coretta L. Tengesdahl, our Chief People Officer, leads MVCDC’s Human Resources Team. With more than 20 years of human resources experience, Coretta focuses on fostering and building a culture of continuous improvement that values and promotes engagement, inclusion and diversity. She has a a bachelor’s degree from the University of Cincinnati and a master’s degree from Central Michigan University.",
    },
    {
      name: "Scott Siegfried ",
      position: "Chief Innovation Officer",
      imageSrc: "/images/leaders/Scott Siegfried.jpeg",
      description:
        "Scott Siegfried has been with MVCDC since 1991 and has served as Chief Innovation Officer since 2016. A former Head Start Lead Teacher, he has a bachelor’s degree in education from the University of Toledo and a master’s degree in early childhood education from Nova Southeastern University. ",
    },
    {
      name: "Don Hoendorf ",
      position: "Chief Financial Officer",
      imageSrc: "/images/leaders/Don Hoendorf.jpeg",
      description:
        "Don Hoendorf is CFO of MVCDC. He joined the organization in June, 2019. Don’s 40+ years of financial experience has been with both profit and non-profit organizations. The first phase of Don’s career was spent working in the Defense Industry (22 years) and as an Entrepreneur (8 years).  The second phase of Don’s career has been dedicated to working with non-profit organizations. His goal was to spend the remainder of his career providing services to those who are in need. He states, “MVCDC is a perfect fit for me to achieve this goal”. Don would like to serve the MVCDC families for many years to come.",
    },
  ];

  return (
    <div id="leadership-team">
      <LargeContainerNoFlexColorSection>
        <h3>Leadship team</h3>
        <div className="grid">
          {leadersObjs.map((leaderObj) => {
            return (
              <LeadersCard
                key={leaderObj.name}
                name={leaderObj.name}
                src={leaderObj.imageSrc}
                description={leaderObj.description}
                position={leaderObj.position}
              />
            );
          })}
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default LeadershipTeam;
