const MyImageWithOverlayAndText = ({
  src,
  overlayColor,
  children,
  overlayopacity,
  minHeight,
  height,
}) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="image-with-overlay-container"
        style={{
          background: `url("${src}")`,
          //   minHeight: minHeight,
          //   height,
          //   maxWidth: "100%",
        }}
      >
        <div className="image-with-content">{children}</div>
      </div>
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

export default MyImageWithOverlayAndText;
