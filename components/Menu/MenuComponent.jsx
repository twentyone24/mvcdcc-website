import MyLink from "../MyLink";
import SingleMenu from "./SingleMenu";

const MenuComponent = () => {
  return (
    <div className="menu">
      {/* TODO add active link heighlight */}
      <ul>
        <SingleMenu href="/#">What we do</SingleMenu>
        <SingleMenu href="/#">Join our team</SingleMenu>
        <SingleMenu href="/#">News & events</SingleMenu>
        <SingleMenu href="/#">About us</SingleMenu>
        <SingleMenu href="/#">Contact us</SingleMenu>
        <SingleMenu href="/#">Staff Login</SingleMenu>
      </ul>
    </div>
  );
};

export default MenuComponent;
