const MyForm = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default MyForm;
