import React from "react";

const PageTitle = ({ title, subtitle, titleStyle, subtitleStyle }) => {
  return (
    <div className="pl-10 w-full">
      <div className={subtitleStyle}>{subtitle}</div>
      <div className={titleStyle}>{title}</div>
    </div>
  );
};

export default PageTitle;
