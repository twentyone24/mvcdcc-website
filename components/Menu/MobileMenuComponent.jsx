import MobileSingleMenu from "./MobileSingleMenu";

const MobileMenuComponent = () => {
  return (
    <div className="menu">
      {/* TODO add active link heighlight */}
      <ul>
        <MobileSingleMenu href="/#">What we do</MobileSingleMenu>
        <MobileSingleMenu href="/#">Join our team</MobileSingleMenu>
        <MobileSingleMenu href="/#">News & events</MobileSingleMenu>
        <MobileSingleMenu href="/#">About us</MobileSingleMenu>
        <MobileSingleMenu href="/#">Contact us</MobileSingleMenu>
        <MobileSingleMenu href="/#">Staff Login</MobileSingleMenu>
      </ul>
    </div>
  );
};

export default MobileMenuComponent;
