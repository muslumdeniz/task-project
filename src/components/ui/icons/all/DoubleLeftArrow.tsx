import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.32 18.52a2.43 2.43 0 0 1-1.22-.33l-2.4-1.39a.75.75 0 1 1 .75-1.3l2.4 1.39a.94.94 0 0 0 .94 0 .92.92 0 0 0 .47-.81V7.92a.92.92 0 0 0-.47-.81.94.94 0 0 0-.94 0l-2.4 1.39a.75.75 0 1 1-.75-1.3l2.4-1.39a2.44 2.44 0 0 1 3.66 2.11v8.16a2.45 2.45 0 0 1-2.44 2.44m-6.86-.33a2.41 2.41 0 0 0 1.21-2.11V7.92A2.43 2.43 0 0 0 10 5.81L3.71 9.45a2.95 2.95 0 0 0 0 5.1L10 18.19a2.42 2.42 0 0 0 2.44 0zM10.77 7.11a.94.94 0 0 1 1.281.342.9.9 0 0 1 .119.468v8.16a.91.91 0 0 1-.46.81.94.94 0 0 1-.94 0l-6.31-3.64a1.45 1.45 0 0 1 0-2.5z"
    />
  </svg>
);
export default SvgDoubleLeftArrow;
