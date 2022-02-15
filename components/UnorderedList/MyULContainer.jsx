const MyULContainer = ({ children, style = {}, ...props }) => {
  return (
    <ul style={{ listStyleType: "unset", ...style }} {...props}>
      {children}
    </ul>
  );
};

export default MyULContainer;
