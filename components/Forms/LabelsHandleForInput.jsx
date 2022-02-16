import MyLabel from "./MyLabel";
const LabelsHandleForInput = ({
  label,
  labelDown,
  required,
  htmlFor,

  children,
}) => {
  return (
    <div>
      <div>
        {label && (
          <MyLabel
            htmlFor={htmlFor}
            className="my-label"
            text={label}
            required={required}
          />
        )}
      </div>
      {children}

      {labelDown && (
        <MyLabel
          htmlFor={htmlFor}
          className="my-label-below"
          text={labelDown}
          required={required}
        />
      )}
    </div>
  );
};

export default LabelsHandleForInput;
