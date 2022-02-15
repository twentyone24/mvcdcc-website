import MyImageWithOverlay from "../Image/MyImageWithOverlay";

const BoardOfDirectorCard = ({ name, src, des1, des2 }) => {
  return (
    <div className="board-of-director-card">
      {/* <MyImageComponent src={src} /> */}
      <MyImageWithOverlay
        minHeight={500}
        src={src}
        overlayColor={"var(--light-blue)"}
        overlayOpacity={0.1}
      />
      <h4>{name}</h4>
      <p>{des1}</p>
      <p>{des2}</p>
    </div>
  );
};

export default BoardOfDirectorCard;
