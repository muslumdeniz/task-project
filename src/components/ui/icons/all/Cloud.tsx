import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19 18.75H5a3.75 3.75 0 0 1-.74-7.43V11a5.73 5.73 0 0 1 10.3-3.46A3.75 3.75 0 0 1 19.75 11q.015.16 0 .32a3.75 3.75 0 0 1-.75 7.43m-14-6a2.25 2.25 0 0 0 0 4.5h14a2.25 2.25 0 1 0 0-4.5h-.14a.75.75 0 0 1-.75-1c.089-.244.136-.5.14-.76A2.25 2.25 0 0 0 16 8.75a2.2 2.2 0 0 0-1.26.39.73.73 0 0 1-.59.11.76.76 0 0 1-.48-.36 4.24 4.24 0 0 0-7.83 2.97.78.78 0 0 1-.17.64.76.76 0 0 1-.6.26z"
    />
  </svg>
);
export default SvgCloud;
