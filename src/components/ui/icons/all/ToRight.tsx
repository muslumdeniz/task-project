import * as React from "react";
import type { SVGProps } from "react";
const SvgToRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.72 18.52a2.45 2.45 0 0 1-2.44-2.44V7.92a2.44 2.44 0 0 1 3.66-2.11l6.31 3.64a2.95 2.95 0 0 1 0 5.1l-6.31 3.64a2.43 2.43 0 0 1-1.22.33M8.73 7a1 1 0 0 0-.48.13.92.92 0 0 0-.47.81v8.16a.92.92 0 0 0 .47.81.94.94 0 0 0 .94 0l6.31-3.64a1.45 1.45 0 0 0 0-2.5L9.19 7.11A.9.9 0 0 0 8.73 7"
    />
  </svg>
);
export default SvgToRight;
