import * as React from "react";
import type { SVGProps } from "react";
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.05 1H8a6.71 6.71 0 0 0-6.7 6.7v8.1A6.71 6.71 0 0 0 8 22.45h8.1a6.71 6.71 0 0 0 6.7-6.7v-8.1A6.71 6.71 0 0 0 16.05 1m5.2 14.8a5.22 5.22 0 0 1-5.2 5.2H8a5.22 5.22 0 0 1-5.2-5.2V7.65A5.21 5.21 0 0 1 8 2.45h8.1a5.21 5.21 0 0 1 5.2 5.2zM16 7.18a.75.75 0 0 1-.75.75h-1.82l-1.34 8.14h1.75a.75.75 0 1 1 0 1.5H8.9a.75.75 0 1 1 0-1.5h1.67l1.34-8.14h-1.59a.75.75 0 0 1 0-1.5h4.94a.76.76 0 0 1 .74.75"
    />
  </svg>
);
export default SvgTextItalic;
