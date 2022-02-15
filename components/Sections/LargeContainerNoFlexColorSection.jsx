import ColorSection from "./ColorSection";

const LargeContainerNoFlexColorSection = ({
  children,
  borderEnabled,
  backgroundColor,
  ...props
}) => {
  return (
    <ColorSection
      backgroundColor={backgroundColor}
      containerEnabled={false}
      borderEnabled={borderEnabled !== undefined ? borderEnabled : true}
      flexEnabled={false}
      {...props}
    >
      <div className="container-large">{children}</div>
    </ColorSection>
  );
};

export default LargeContainerNoFlexColorSection;
