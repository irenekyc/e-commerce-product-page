import React, { FunctionComponent } from "react";

interface CloseIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const CloseIcon: FunctionComponent<CloseIconProps> = ({
  width,
  height,
  color,
}: CloseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
    >
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

CloseIcon.defaultProps = {
  width: "14",
  height: "15",
  color: "#69707D",
};

export default CloseIcon;
