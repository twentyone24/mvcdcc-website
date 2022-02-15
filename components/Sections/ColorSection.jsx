const ColorSection = ({
  backgroundColor,
  children,
  minHeight = 100,
  style,
  borderEnabled = true,
  paddingVertEnabled = true,
  paddingvert = 50,
  containerEnabled = true,
  flexEnabled = true,
  ...props
}) => {
  let containerClass = containerEnabled ? "container " : "";
  containerClass += containerEnabled && flexEnabled ? " flex " : "";

  return (
    <div
      className="color-section-wrapper"
      style={{
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: backgroundColor,
          borderTop: borderEnabled ? "10px solid var(--light-blue)" : "",
          width: "100vw",
          // maxWidth: "100vw",
          minHeight,
          // height,
          maxHeight: "fit-content",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          paddingTop: paddingVertEnabled ? paddingvert : "",
          paddingBottom: paddingVertEnabled ? paddingvert : "",
          ...style,
        }}
        {...props}
      >
        <div className={containerClass}>{children}</div>
      </div>
    </div>
  );
};

export default ColorSection;
