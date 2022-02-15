import MyImageWithOverlay from "./MyImageWithOverlay";

const LeaderImageWithNameAndPosition = ({ name, position, src }) => {
  return (
    <div
      className="leader-image-with-name-and-position"
      //   style={{ position: "relative" }}
    >
      <MyImageWithOverlay
        minHeight={500}
        src={src}
        overlayColor={"var(--light-blue)"}
        overlayOpacity={0.1}
      />

      {/* TODO create it more responsive */}
      <div
        className="leader-card-content leader-name-position-box"
        style={{
          position: "absolute",
          width: 200,
          background: "var(--secondary-light)",
          top: 40,
          zIndex: 2,
          maxWidth: "48%",
          paddingLeft: 20,
        }}
      >
        <h4>
          {name} {position}
        </h4>
        {/* <h4>{position}</h4> */}
      </div>
    </div>
  );
};

export default LeaderImageWithNameAndPosition;
