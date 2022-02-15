import BoardOfDirectorCard from "../Cards/BoardOfDirectorCard";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";
import MyUnorderListContainer from "../UnorderedList/MyUnorderListContainer";

const BoardOfDirectors = () => {
  const bodList = [
    {
      name: "Adrienne Daniels",
      src: "/images/board-of-directors/Adrienne Daniels.jpeg",
      des1: "Director of Marketing & Communications",
      des2: "Shook Construction",
    },
    {
      name: "Ann Charles Watts",
      src: "/images/board-of-directors/Ann Charles Watts.jpeg",
      des1: "Associate ",
      des2: "Dinsmore",
    },
    {
      name: "David Feldmiller",
      src: "/images/board-of-directors/David Feldmiller.jpeg",
      des1: "Treasurer, CPA, President",
      des2: "Feldmiller Consulting",
    },
    {
      name: "Deborah Hunt",
      src: "/images/board-of-directors/Deborah Hunt.jpeg",
      des1: "Vice-Chair, Partner",
      des2: "Sebaly Shillito + Dyer",
    },
    {
      name: "Frank Surico",
      src: "/images/board-of-directors/Frank Surico.jpeg",
      des1: "Chair",
      des2: "MVCDC",
    },
    {
      name: "Kathy Rearick",
      src: "/images/board-of-directors/Kathy Rearick.jpeg",
      des1: "Vice President of Development",
      des2: "Goodwill Easter Seals of Miami Valley",
    },
    {
      name: "Kevin Scroggins",
      src: "/images/board-of-directors/Kevin Scroggins.jpeg",
      des1: "Senior Pastor",
      des2: "Blessed Rock Church",
    },
    {
      name: "Sandi Sumerfield",
      src: "/images/board-of-directors/Sandi Sumerfield.jpeg",
      des1: "Ph.D., Assistant Professor of Reading and Literacy",
      des2: "Central State University",
    },
    {
      name: "Shauna Adams",
      src: "/images/board-of-directors/MVCDC_Shauna_Purple.jpg",
      des1: "Ph.D., Associate Professor of Early Childhood and Executive Director",
      des2: "Center of Early Learning, University of Dayton",
    },
    {
      name: "Tom Petrovic",
      src: "/images/board-of-directors/Tom Petrovic.jpeg",
      des1: "CPA",
      des2: "Brixey & Meyer Inc.",
    },
    {
      name: "Toni Jones",
      src: "/images/board-of-directors/Toni Jones.jpeg",
      des1: "Director Social Determinants of Health Integration & Partnerships",
      des2: "CareSource",
    },
  ];

  const notPicturedBod = ["Kelly Geers", "Jaclyn A. Smith", "Rachel Ward"];

  return (
    <div id="board-of-directors">
      <LargeContainerNoFlexColorSection>
        <h3>Board of Directors</h3>
        <div className="grid-card-3" id="leader-3-cards">
          {/* Pictured BOD */}
          {bodList.map(({ name, src, des1, des2 }) => {
            return (
              <BoardOfDirectorCard
                key={name}
                name={name}
                src={src}
                des1={des1}
                des2={des2}
              />
            );
          })}

          {/* Not Pictured BOD */}

          <div className="not-pictured-bod">
            <hr />
            <h4>Not Pictured:</h4>
            <MyUnorderListContainer list={notPicturedBod} />
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default BoardOfDirectors;
