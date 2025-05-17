import * as React from "react";
import type { SVGProps } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.05 22.75H8a6.71 6.71 0 0 1-6.7-6.7V8A6.71 6.71 0 0 1 8 1.25h8.1A6.71 6.71 0 0 1 22.75 8v8.1a6.71 6.71 0 0 1-6.7 6.65M8 2.75A5.2 5.2 0 0 0 2.75 8v8.1A5.2 5.2 0 0 0 8 21.25h8.1a5.21 5.21 0 0 0 5.2-5.2V8a5.21 5.21 0 0 0-5.2-5.2zm10.67 5.17a.75.75 0 0 0-.75-.75H6.08a.75.75 0 0 0 0 1.5h11.84a.76.76 0 0 0 .75-.75m-2 4.25a.75.75 0 0 0-.75-.75H8.08a.75.75 0 1 0 0 1.5h7.84a.76.76 0 0 0 .75-.75m-2.79 4.25a.75.75 0 0 0-.75-.75h-2.26a.75.75 0 1 0 0 1.5h2.26a.76.76 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgSort;
