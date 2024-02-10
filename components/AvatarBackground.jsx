import React from "react";

const AvatarBackground = () => {
  const style = {
    background: "#fcfbf4",
    backgroundImage:
      "radial-gradient(hsla(255, 100%, 0%, 0.75) 10%, transparent 10%)",
    backgroundSize: "20px 20px",
    width: "100%",
    height: "100%",
    zIndex: "1",
  };

  return <div style={style}></div>;
};

export default AvatarBackground;
