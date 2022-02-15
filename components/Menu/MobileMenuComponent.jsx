import MobileSingleMenu from "./MobileSingleMenu";

const MobileMenuComponent = () => {
  return (
    <div className="menu">
      {/* TODO add active link heighlight */}
      <ul>
        {menusList.map(({ name, url }) => {
          return (
            <MobileSingleMenu key={name} href={url}>
              {name}
            </MobileSingleMenu>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenuComponent;
