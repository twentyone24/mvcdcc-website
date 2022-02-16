import MyImageComponent from "./MyImageComponent";

const MyImageWithOverlay = ({
  src,
  overlayColor,
  children,
  overlayopacity,
  minHeight,
  height,
  alt,
}) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <MyImageComponent src={src} alt={alt ? alt : "overlay-image"} />
      <div
        className="image-overlay"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: overlayColor,
          opacity: overlayopacity,
        }}
      ></div>
    </div>
  );
};

export default MyImageWithOverlay;
