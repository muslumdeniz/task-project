import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDiagonal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.38 4.71h-4.2a.75.75 0 1 0 0 1.5h2.42L6.13 16.79v-2.45a.76.76 0 0 0-.75-.76.71.71 0 0 0-.75.75v4.2a.8.8 0 0 0 .22.54c.14.14.331.22.53.22h.1l4.11-.05a.74.74 0 0 0 .74-.76.75.75 0 0 0-.75-.74H7.29L17.62 7.35v2.31a.76.76 0 0 0 .74.76.76.76 0 0 0 .75-.75v-4.2a.75.75 0 0 0-.22-.54.87.87 0 0 0-.51-.22"
    />
  </svg>
);
export default SvgArrowDiagonal;
