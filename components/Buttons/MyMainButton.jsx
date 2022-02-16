const MyMainButton = ({
  className = "bg-primary",
  children,
  shadowEnabled = true,
  href,
  ...props
}) => {
  let buttonClass = "my-btn " + className;

  if (href) {
    return (
      <a href={href}>
        <MyBtn className={buttonClass} {...props}>
          {children}
        </MyBtn>
      </a>
    );
  } else {
    return (
      <MyBtn className={buttonClass} {...props}>
        {children}
      </MyBtn>
    );
  }
};

const MyBtn = ({ className, children, shadowEnabled = true, ...props }) => {
  let style = {};
  if (!shadowEnabled) {
    style = {
      boxShadow: "unset",
    };
  }
  return (
    <div className={className} style={style} {...props}>
      <span style={{ fontSize: "18px" }}>{children}</span>
    </div>
  );
};

export default MyMainButton;
