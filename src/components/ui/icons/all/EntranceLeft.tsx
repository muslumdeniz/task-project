import * as React from "react";
import type { SVGProps } from "react";
const SvgEntranceLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m15.46 12.54-3 3a.77.77 0 0 1-1.246-.247.76.76 0 0 1 .166-.833l1.67-1.67H3a.76.76 0 0 1 0-1.52h10.08l-1.67-1.7a.764.764 0 0 1 1.08-1.08l3 3a.76.76 0 0 1-.03 1.05m6.28 5.57V5.89a4.8 4.8 0 0 0-4.94-4.64h-4.44a4.81 4.81 0 0 0-4.95 4.64.78.78 0 0 0 .77.77.77.77 0 0 0 .76-.77 3.28 3.28 0 0 1 3.42-3.12h4.44a3.28 3.28 0 0 1 3.42 3.12v12.22a3.28 3.28 0 0 1-3.42 3.12h-4.44a3.28 3.28 0 0 1-3.42-3.12.77.77 0 0 0-.76-.77.78.78 0 0 0-.77.77 4.81 4.81 0 0 0 4.95 4.64h4.44a4.8 4.8 0 0 0 4.94-4.64"
    />
  </svg>
);
export default SvgEntranceLeft;
