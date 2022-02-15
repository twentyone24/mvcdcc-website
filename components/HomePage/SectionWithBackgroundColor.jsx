const SectionWithBackgroundColor = ({
  backgroundColor,
  children,
  minHeight = 100,
  style,
  ...props
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderTop: "10px solid var(--light-blue)",
        width: "100vw",
        minHeight,
        // height,
        maxHeight: "fit-content",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        ...style,
      }}
      {...props}
    >
      <div className="container flex">{children}</div>
    </div>
  );
};

export default SectionWithBackgroundColor;
