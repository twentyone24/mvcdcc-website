import LabelsHandleForInput from "./LabelsHandleForInput";
import MyLabel from "./MyLabel";
import MyTextArea from "./MyTextArea";

const MyTextAreaWithLabel = ({
  label,
  labelDown,
  autocomplete,
  name,
  required = false,
  ...inputProps
}) => {
  return (
    <LabelsHandleForInput
      label={label}
      labelDown={labelDown}
      required={required}
      htmlFor={name}
    >
      <MyTextArea
        name={name}
        autocomplete={autocomplete}
        required={required}
        {...inputProps}
      />
    </LabelsHandleForInput>
  );
};

export default MyTextAreaWithLabel;
