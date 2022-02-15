const MyImageComponent = ({
  src,
  alt,
  width = "100%",
  href,
  height,
  ...props
}) => {
  let ImgComponent = (
    <img src={src} width={width} height={height} alt={alt} {...props} />
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
