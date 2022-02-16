import { useRouter } from "next/router";
import { menusList } from "../../data/menus";
import MyLink from "../MyLink";
import SingleMenu from "./SingleMenu";

const MenuComponent = () => {
  const router = useRouter();
  const currentUrlAsPath = router.asPath;

  return (
    <div className="menu">
      {/* TODO add active link heighlight */}
      <ul>
        {menusList.map(({ name, url }) => {
          const isActive = currentUrlAsPath === url;
          return (
            <SingleMenu key={name} href={url} active={isActive}>
              {name}
            </SingleMenu>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuComponent;
