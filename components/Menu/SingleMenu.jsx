import MyLink from "../MyLink";

const SingleMenu = ({ active, ...props }) => {
  // TODO Highlight active menu
  const newClass = "menu text-primary " + (active ? "active" : "");

  return (
    <li className={newClass}>
      <MyLink {...props}>{props.children}</MyLink>
    </li>
  );
};

export default SingleMenu;
