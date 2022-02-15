import React from "react";
import MyImageComponent from "../Image/MyImageComponent";

const DiversityAndInclusionCard = ({ src, heading, description }) => {
  return (
    <div className="diversity-card">
      <MyImageComponent src={src} />
      <h4>{heading}</h4>
      <p>{description}</p>
    </div>
  );
};

export default DiversityAndInclusionCard;
