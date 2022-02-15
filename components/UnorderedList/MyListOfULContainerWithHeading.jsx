import React from "react";
import MyUnorderListWithHeading from "./MyUnorderListWithHeading";

const MyListOfULContainerWithHeading = ({ list = [], ...liProps }) => {
  return (
    <>
      {list.map((olWithHeadingObj) => {
        const heading = olWithHeadingObj.heading;
        const liList = olWithHeadingObj.list;
        return (
          <MyUnorderListWithHeading
            key={heading + JSON.stringify(liList)}
            heading={heading}
            list={liList}
            {...liProps}
          />
        );
      })}
    </>
  );
};

export default MyListOfULContainerWithHeading;
