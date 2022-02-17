import MyImageComponent from "./MyImageComponent";
import MyImageWithOverlayAndText from "./MyImageWithOverlayAndText";

const FloatingImage = ({
  float = "right",
  src,
  style,
  className,
  props,
  overlay,
  text,
}) => {
  let marginStyles =
    float === "right" ? { marginLeft: 20 } : { marginRight: 20 };

  let floatStyles = {
    display: "inline-block",
    float: float,
    width: 500,
    // marginLeft: 20,
    ...marginStyles,
  };

  let elementClass = "floating-image " + (className ? className : "");

  let newStyles = style ? { ...floatStyles, ...style } : floatStyles;

  // console.log(newStyles);
  if (overlay || text) {
    return (
      <MyImageWithOverlayAndText
        className={elementClass}
        src={src}
        {...props}
        imageStyles={{ ...newStyles }}
        overlayColor={"var(--light-blue)"}
      >
        {text}
      </MyImageWithOverlayAndText>
    );
  }

  return (
    <MyImageComponent
      className={elementClass}
      src={src}
      {...props}
      style={{ ...newStyles }}
    />
  );
};

export default FloatingImage;
