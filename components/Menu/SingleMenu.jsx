import MyLink from "../MyLink";

const SingleMenu = (props) => {
  // TODO Highlight active menu

  return (
    <li className="menu text-primary">
      <MyLink {...props}>{props.children}</MyLink>
    </li>
  );
};

export default SingleMenu;
