import React from "react";
import MyULContainer from "./MyULContainer";

const MyUnorderListContainer = ({
  children,
  list = [],
  style = {},
  ...props
}) => {
  // If List is given
  if (list.length > 0) {
    return (
      <MyULContainer style={style} {...props}>
        {list.map((itemString, index) => {
          return (
            <div key={index}>
              <li>{itemString}</li>
              <br />
            </div>
          );
        })}
        {children}
      </MyULContainer>
    );
  }
  return (
    <MyULContainer style={style} {...props}>
      {children}
    </MyULContainer>
  );
};

export default MyUnorderListContainer;
