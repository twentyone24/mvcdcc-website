const MyLink = ({ href, ...props }) => {
  // console.log({ ...props });
  return (
    <a className="text-primary" href={href} {...props}>
      {props.children}
    </a>
  );
};

export default MyLink;
