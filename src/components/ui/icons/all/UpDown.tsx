import * as React from "react";
import type { SVGProps } from "react";
const SvgUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m14.34 17.83-1.59 1.62-.05-14.66 1.61 1.64a.73.73 0 0 0 .53.22.77.77 0 0 0 .53-.21.75.75 0 0 0 0-1.06l-2.94-3a.79.79 0 0 0-1.07 0l-2.94 3a.75.75 0 0 0 1.06 1.06l1.7-1.74.05 14.9-1.7-1.77a.75.75 0 0 0-1.07 1.05l2.94 3a.76.76 0 0 0 .53.23.78.78 0 0 0 .54-.23l2.94-3a.75.75 0 1 0-1.07-1.05"
    />
  </svg>
);
export default SvgUpDown;
