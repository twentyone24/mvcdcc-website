import Image from "next/image";
import { imageLoader } from "../../loader";

const MyImageComponent = ({
  src,
  alt = "image",
  width = "100%",
  href,
  height,
  ...props
}) => {
  let ImgComponent = (
    <img src={src} width={width} height={height} alt={alt} {...props} />
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
