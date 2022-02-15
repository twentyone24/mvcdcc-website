const MyMainButton = ({
  className = "bg-primary",
  children,
  href,
  ...props
}) => {
  let buttonClass = "my-btn " + className;

  if (href) {
    return (
      <a href={href}>
        <div className={buttonClass} {...props}>
          {/* <h1 style={{ fontSize: "18px" }}>{children}</h1> */}
          <span style={{ fontSize: "18px" }}>{children}</span>
        </div>
      </a>
    );
  } else {
    return (
      <div className={buttonClass} {...props}>
        {/* <h1 style={{ fontSize: "18px" }}>{children}</h1> */}
        <span style={{ fontSize: "18px" }}>{children}</span>
      </div>
    );
  }
};

export default MyMainButton;
