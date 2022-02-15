import MyMainButton from "./MyMainButton";

const MySecondaryButton = ({ children, ...props }) => {
  return (
    <MyMainButton {...props} className="bg-secondary">
      {children}
    </MyMainButton>
  );
};

export default MySecondaryButton;
