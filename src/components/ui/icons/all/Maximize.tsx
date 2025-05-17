import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M2.67 10.25a.75.75 0 0 1-.75-.75v-2a5.6 5.6 0 0 1 5.59-5.58h1.92a.75.75 0 0 1 0 1.5H7.51a4.09 4.09 0 0 0-4.09 4.09v2a.76.76 0 0 1-.75.74m7.65 11.08a.75.75 0 0 0-.75-.75H7.51a4.09 4.09 0 0 1-4.09-4.09v-2a.75.75 0 0 0-1.5 0v2a5.6 5.6 0 0 0 5.59 5.59h2.06a.74.74 0 0 0 .75-.75m11.76-4.84v-2.14a.75.75 0 0 0-1.5 0v2.14a4.09 4.09 0 0 1-4.09 4.09h-1.92a.75.75 0 0 0 0 1.5h1.92a5.6 5.6 0 0 0 5.59-5.59m0-7.15V7.51a5.6 5.6 0 0 0-5.59-5.59h-2.06a.75.75 0 1 0 0 1.5h2.06a4.09 4.09 0 0 1 4.09 4.09v1.83a.75.75 0 1 0 1.5 0"
    />
  </svg>
);
export default SvgMaximize;
