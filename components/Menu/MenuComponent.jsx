import { menusList } from "../../data/menus";
import MyLink from "../MyLink";
import SingleMenu from "./SingleMenu";

const MenuComponent = () => {
  return (
    <div className="menu">
      {/* TODO add active link heighlight */}
      <ul>
        {menusList.map(({ name, url }) => {
          return (
            <SingleMenu key={name} href={url}>
              {name}
            </SingleMenu>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuComponent;
