import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4.68 18.52a2.45 2.45 0 0 1-2.44-2.44V7.92A2.44 2.44 0 0 1 5.9 5.81L8.3 7.2a.75.75 0 0 1 .28 1 .76.76 0 0 1-1 .28L5.15 7.11a.94.94 0 0 0-.94 0 .92.92 0 0 0-.47.81v8.16a.92.92 0 0 0 .47.81.94.94 0 0 0 .94 0l2.4-1.39a.75.75 0 1 1 .75 1.3l-2.4 1.39a2.43 2.43 0 0 1-1.22.33m9.3-.33 6.31-3.64a2.95 2.95 0 0 0 0-5.1L14 5.81a2.44 2.44 0 0 0-3.66 2.11v8.16a2.42 2.42 0 0 0 1.22 2.11 2.46 2.46 0 0 0 1.22.33c.429 0 .85-.114 1.22-.33zm-.75-11.08 6.31 3.64a1.45 1.45 0 0 1 0 2.5l-6.31 3.64a.94.94 0 0 1-.94 0 .92.92 0 0 1-.47-.81V7.92a.92.92 0 0 1 .47-.81 1 1 0 0 1 .48-.11.87.87 0 0 1 .46.11"
    />
  </svg>
);
export default SvgDoubleRightArrow;
