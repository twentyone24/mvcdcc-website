const MyLink = ({ href, ...props }) => {
  // console.log({ ...props });
  const className = "my-link " + (props?.className ? props.className : "");
  return (
    <a className={className} href={href} {...props}>
      {props.children}
    </a>
  );
};

export default MyLink;
