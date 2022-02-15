import SingleMenu from "./SingleMenu";

const MobileSingleMenu = ({ children, ...props }) => {
  return (
    <h4>
      <SingleMenu {...props}>{children}</SingleMenu>
    </h4>
  );
};

export default MobileSingleMenu;
