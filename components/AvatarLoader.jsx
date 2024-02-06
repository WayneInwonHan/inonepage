import { forwardRef } from "react";
import "./AvatarLoader.css";

export const AvatarSpinner = () => (
  <div
    style={{
      border: "4px solid rgba(0, 0, 0, 0.1)",
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      borderTopColor: "black",
      animation: "spin 1s ease-in-out infinite",
      position: "absolute",
      left: "50%",
      top: "50%",
      marginLeft: "-32px", // Half of width
      marginTop: "-32px", // Half of height
    }}
  ></div>
);

export const AvatarContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="voxel-avatar"
    style={{
      margin: "auto",
      width: "640px",
      height: "640px",
      position: "relative",
    }}
  >
    {children}
  </div>
));

const Loader = () => {
  return (
    <AvatarContainer>
      <AvatarSpinner />
    </AvatarContainer>
  );
};

export default Loader;
