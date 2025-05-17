import * as React from "react";
import type { SVGProps } from "react";
const SvgExitRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.33 22.75H6.89a4.81 4.81 0 0 1-4.95-4.64V5.89a4.81 4.81 0 0 1 4.95-4.64h4.44a4.8 4.8 0 0 1 4.94 4.64.76.76 0 1 1-1.52 0 3.29 3.29 0 0 0-3.42-3.12H6.89a3.28 3.28 0 0 0-3.42 3.12v12.22a3.28 3.28 0 0 0 3.42 3.12h4.44a3.29 3.29 0 0 0 3.42-3.12.76.76 0 0 1 1.52 0 4.8 4.8 0 0 1-4.94 4.64M7.88 12a.76.76 0 0 0 .76.76h10.07L17 14.43a.76.76 0 0 0 1.07 1.08l3-3a.76.76 0 0 0 0-1.08l-3-3a.75.75 0 0 0-1.07 0 .76.76 0 0 0 0 1.08l1.67 1.67H8.64a.76.76 0 0 0-.76.82"
    />
  </svg>
);
export default SvgExitRight;
