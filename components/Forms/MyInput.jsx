const MyInput = ({
  label,
  required = false,
  name,
  type = "text",
  autocomplete = true,
  labelDown = false,
  ...props
}) => {
  const className = "my-input " + (props?.className ? props.className : "");
  return (
    <input
      className={className}
      name={name}
      type={type}
      required={required}
      {...props}
      autoComplete={true}
    />
  );
};

export default MyInput;
