import MyImageComponent from "./MyImageComponent";

const FloatingImage = ({ float = "right", src, style, className, props }) => {
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

  console.log(newStyles);

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
