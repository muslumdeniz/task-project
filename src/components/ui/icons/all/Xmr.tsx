import * as React from "react";
import type { SVGProps } from "react";
const SvgXmr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.46 15.66a.75.75 0 0 1-.75-.75v-3.48L14 13v1.93a.75.75 0 1 1-1.5 0v-2.38a.75.75 0 0 1 .38-.65l4.2-2.42a.72.72 0 0 1 .75 0 .75.75 0 0 1 .38.65v4.78a.76.76 0 0 1-.75.75m-6-.79v-2.35a.75.75 0 0 0-.38-.65L6.92 9.45a.72.72 0 0 0-.75 0 .75.75 0 0 0-.38.64v4.78a.75.75 0 1 0 1.5 0v-3.48L10 13v1.92a.75.75 0 1 0 1.5 0zm.5 8.38A10.75 10.75 0 1 1 22.75 12.5 10.76 10.76 0 0 1 12 23.25zm0-20a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 3.25z"
    />
  </svg>
);
export default SvgXmr;
