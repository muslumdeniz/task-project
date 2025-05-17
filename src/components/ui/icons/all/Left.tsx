import * as React from "react";
import type { SVGProps } from "react";
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.41 19a1 1 0 0 1-.71-.3l-5.92-5.95a1 1 0 0 1 0-1.41l5.92-5.93a1.004 1.004 0 1 1 1.42 1.42L9.9 12l5.22 5.22a1 1 0 0 1-.71 1.78"
    />
  </svg>
);
export default SvgLeft;
