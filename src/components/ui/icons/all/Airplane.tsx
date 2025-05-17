import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.31 22.8a2.39 2.39 0 0 1-2.15-1.32L10 17.32a.72.72 0 0 1 1.27-.67l2.14 4.16a1 1 0 0 0 1.81-.12l6-16.64A1 1 0 0 0 21 3a1 1 0 0 0-1-.24L3.35 8.7a1 1 0 0 0-.13 1.84l5.85 3.07a.39.39 0 0 0 .48-.07l6.52-6.23a.71.71 0 0 1 1 0 .74.74 0 0 1 0 1l-6.5 6.21a1.82 1.82 0 0 1-2.14.32l-5.87-3.01a2.43 2.43 0 0 1-1.3-2.35 2.4 2.4 0 0 1 1.61-2.15l16.64-5.94A2.38 2.38 0 0 1 22 2a2.44 2.44 0 0 1 .56 2.57l-6 16.64a2.4 2.4 0 0 1-2.12 1.61z"
    />
  </svg>
);
export default SvgAirplane;
