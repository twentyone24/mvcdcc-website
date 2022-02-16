const MyTextArea = ({
  required = false,
  name,
  autocomplete = true,
  //   rows = 10,
  //   cols = 20,
  ...props
}) => {
  const className = "my-textarea " + (props?.className ? props.className : "");
  return (
    <textarea
      className={className}
      name={name}
      required={required}
      autoComplete={true}
      {...props}
      //   rows={rows}
      //   cols={cols}
    ></textarea>
  );
};

export default MyTextArea;
