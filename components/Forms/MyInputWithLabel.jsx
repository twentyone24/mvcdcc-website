import LabelsHandleForInput from "./LabelsHandleForInput";
import MyInput from "./MyInput";

const MyInputWithLabel = ({
  label,
  labelDown,
  autocomplete,
  name,
  required = false,
  type,
  ...inputProps
}) => {
  return (
    <LabelsHandleForInput
      label={label}
      htmlFor={name}
      labelDown={labelDown}
      required={required}
    >
      <MyInput
        name={name}
        autocomplete={autocomplete}
        labelDown
        required={required}
        type={type}
        {...inputProps}
      />
    </LabelsHandleForInput>
  );
};

export default MyInputWithLabel;
