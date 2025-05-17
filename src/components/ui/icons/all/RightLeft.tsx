import * as React from "react";
import type { SVGProps } from "react";
const SvgRightLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.73 8.65a.75.75 0 0 0-1.06 1.06l1.69 1.66H4.55l1.73-1.62a.75.75 0 1 0-1-1.07l-3 2.94a.74.74 0 0 0-.23.54H2a.71.71 0 0 0 .32.59l2.91 2.85a.7.7 0 0 0 .52.22.75.75 0 0 0 .53-1.29l-1.67-1.6h14.75l-1.68 1.65a.75.75 0 1 0 1.05 1.07l3-2.94a.72.72 0 0 0 .23-.53.74.74 0 0 0-.23-.54z"
    />
  </svg>
);
export default SvgRightLeft;
