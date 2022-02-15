const ImageContainerWithOverlay = ({
  backgroundImageUrl,
  children,
  overlayColor,
  maxHeight,
  height,
  minHeight,
  ...props
}) => {
  return (
    <div
      className="section"
      style={{
        background: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        height: height ? height : "unset",
        maxHeight: maxHeight ? maxHeight : "unset",
        minHeight: minHeight ? minHeight : "unset",
      }}
      {...props}
    >
      <div
        className="color-overlay"
        style={{
          backgroundColor: overlayColor,
          // height: `calc( ${maxHeight}px - 100px}`,
          height: "100%",
        }}
      ></div>

      <div className="section-container container">{children}</div>
    </div>
  );
};

export default ImageContainerWithOverlay;
