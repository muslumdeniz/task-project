import * as React from "react";
import type { SVGProps } from "react";
const SvgAdditem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19 7.25h-5.46A3.73 3.73 0 0 0 9.82 11v8a3.73 3.73 0 0 0 3.72 3.72H19A3.73 3.73 0 0 0 22.75 19v-8A3.73 3.73 0 0 0 19 7.25M21.25 19A2.23 2.23 0 0 1 19 21.25h-5.46A2.23 2.23 0 0 1 11.32 19v-8a2.23 2.23 0 0 1 2.22-2.22H19A2.23 2.23 0 0 1 21.25 11zM8.33 16a.76.76 0 0 1-.75.75H5A3.73 3.73 0 0 1 1.25 13V5A3.73 3.73 0 0 1 5 1.25h5.49A3.73 3.73 0 0 1 14.18 5a.75.75 0 0 1-1.5 0 2.23 2.23 0 0 0-2.22-2.22H5A2.23 2.23 0 0 0 2.75 5v8A2.23 2.23 0 0 0 5 15.25h2.58a.76.76 0 0 1 .75.75m10.55-1a.75.75 0 0 1-.75.75h-.88v.88a.75.75 0 0 1-1.5 0v-.88h-.88a.75.75 0 0 1 0-1.5h.88v-.88a.75.75 0 1 1 1.5 0v.88h.88a.75.75 0 0 1 .75.75"
    />
  </svg>
);
export default SvgAdditem;
