import urls from "../../config/urls.config";
import MyMainButton from "./MyMainButton";

const EnrollmentButton = ({ colorClass = "bg-primary" }) => {
  return (
    <MyMainButton href={urls.enrollmentForm} className={colorClass}>
      Enrollment Start Here
    </MyMainButton>
  );
};

export default EnrollmentButton;
