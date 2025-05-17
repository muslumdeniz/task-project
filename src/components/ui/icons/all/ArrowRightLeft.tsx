import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.93 17.19a.75.75 0 0 1-.74.75L4.46 18l1.61 1.72a.75.75 0 0 1 0 1.06.8.8 0 0 1-.5.2.77.77 0 0 1-.57-.28l-2.77-3a.75.75 0 0 1 0-1l2.7-2.7A.77.77 0 0 1 6 14a.74.74 0 0 1 0 1l-1.44 1.46h16.62a.75.75 0 0 1 .75.73m-3-12.83a.72.72 0 0 0-1 0 .75.75 0 0 0 0 1l1.48 1.5H2.73a.75.75 0 0 0 0 1.49h16.76L18 9.91A.74.74 0 0 0 18 11a.7.7 0 0 0 .52.23A.7.7 0 0 0 19 11l2.68-2.69a.75.75 0 0 0 .22-.53.83.83 0 0 0-.21-.54z"
    />
  </svg>
);
export default SvgArrowRightLeft;
