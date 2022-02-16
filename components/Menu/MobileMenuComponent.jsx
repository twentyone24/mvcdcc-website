import { useRouter } from "next/router";
import { menusList } from "../../data/menus";
import MobileSingleMenu from "./MobileSingleMenu";

const MobileMenuComponent = () => {
  const router = useRouter();
  const currentUrlAsPath = router.asPath;

  return (
    <div className="menu">
      {/* TODO add active link heighlight */}
      <ul>
        {menusList.map(({ name, url }) => {
          const isActive = currentUrlAsPath === url;
          return (
            <MobileSingleMenu key={name} href={url} active={isActive}>
              {name}
            </MobileSingleMenu>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenuComponent;
