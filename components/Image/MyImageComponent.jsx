import Image from "next/image";
import { imageLoader } from "../../loader";

const MyImageComponent = ({
  src,
  alt = "floating-image",
  width = "100%",
  href,
  height,
  className,
  reveal = true,
  ...props
}) => {
  const revealClass = reveal ? "reveal " : " ";
  const propClassName = className ? className : " ";
  const currentClass = `${revealClass} ${propClassName}`;
  let ImgComponent = (
    <img
      className={currentClass}
      src={src}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
    // <div style={{ width: "100%" }}>
    //   <Image
    //     height={height}
    //     loader={imageLoader}
    //     alt={alt}
    //     src={src}
    //     width={width}
    //     {...props}
    //     layout="responsive"
    //   />
    // </div>
  );

  // If a link
  if (href) {
    return (
      <a href={href} style={{ width, height }}>
        {ImgComponent}
      </a>
    );
  } else {
    return ImgComponent;
  }

  //   return <img src={src} width={width} height={height} alt={alt} {...props} />;
};

export default MyImageComponent;
