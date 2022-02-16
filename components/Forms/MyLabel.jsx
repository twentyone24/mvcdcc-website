const MyLabel = ({ htmlFor, text, required, ...props }) => {
  const className = "my-label " + (props?.className ? props.className : "");
  const requiredStar = required ? " *" : "";
  return (
    <label htmlFor={htmlFor} {...props} className={className}>
      {text}
      {requiredStar}
    </label>
  );
};

export default MyLabel;
