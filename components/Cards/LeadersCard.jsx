import LeaderImageWithNameAndPosition from "../Image/LeaderImageWithNameAndPosition";
import MyImageComponent from "../Image/MyImageComponent";
import MyImageWithOverlay from "../Image/MyImageWithOverlay";

const LeadersCard = ({ name, src, description, position }) => {
  return (
    <div className="leader-card">
      {/* <MyImageComponent src={src} /> */}
      <LeaderImageWithNameAndPosition
        name={name}
        position={position}
        src={src}
      />

      {/* <MyImageWithOverlay
        minHeight={500}
        src={src}
        overlayColor={"var(--light-blue)"}
        overlayOpacity={0.1}
      /> */}
      <div className="leader-name-card">
        {/* <h4>{name}</h4>
        <h4>{position}</h4> */}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default LeadersCard;
