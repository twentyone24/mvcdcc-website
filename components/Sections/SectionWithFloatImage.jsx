import React from "react";
import FloatingImage from "../Image/FloatingImage";

const SectionWithFloatImage = ({
  src,
  float,
  href,
  children,
  ...imageProps
}) => {
  return (
    <>
      <FloatingImage src={src} href={href} float={float} {...imageProps} />
      {children}
    </>
  );
};

export default SectionWithFloatImage;
