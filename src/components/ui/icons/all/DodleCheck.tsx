import * as React from "react";
import type { SVGProps } from "react";
const SvgDodleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21 7.6A1 1 0 0 1 21 9l-7.35 7.4a1 1 0 0 1-1.41 0l-1.7-1.71-1.71 1.71a1 1 0 0 1-1.41 0l-4.59-4.59a1 1 0 1 1 1.42-1.41l3.87 3.87 1-1-1.47-1.46a1 1 0 1 1 1.42-1.41l1.47 1.46 4.25-4.26A1 1 0 1 1 16.21 9L12 13.28l1 1 6.62-6.68a1 1 0 0 1 1.38 0"
    />
  </svg>
);
export default SvgDodleCheck;
