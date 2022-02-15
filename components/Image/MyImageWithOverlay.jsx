import MyImageComponent from "./MyImageComponent";

const MyImageWithOverlay = ({
  src,
  overlayColor,
  children,
  overlayOpacity,
  minHeight,
  height,
}) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <MyImageComponent src={src} />
      <div
        className="image-overlay"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: overlayColor,
          opacity: overlayOpacity,
        }}
      ></div>
    </div>
  );
};

export default MyImageWithOverlay;
