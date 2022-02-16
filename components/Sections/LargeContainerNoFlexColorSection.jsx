import ColorSection from "./ColorSection";

const LargeContainerNoFlexColorSection = ({
  children,
  borderEnabled,
  backgroundColor,
  paddingVertEnabled,
  ...props
}) => {
  return (
    <ColorSection
      backgroundColor={backgroundColor}
      containerEnabled={false}
      borderEnabled={borderEnabled !== undefined ? borderEnabled : true}
      flexEnabled={false}
      paddingVertEnabled={paddingVertEnabled}
      {...props}
    >
      <div className="container-large">{children}</div>
    </ColorSection>
  );
};

export default LargeContainerNoFlexColorSection;
