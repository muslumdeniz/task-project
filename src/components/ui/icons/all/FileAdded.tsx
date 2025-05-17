import * as React from "react";
import type { SVGProps } from "react";
const SvgFileAdded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4 21.17a.73.73 0 0 1-.58-.29l-1.69-2.17a.78.78 0 0 1 .13-1.07.73.73 0 0 1 1 .13L4 19.17l1.7-2.23a.72.72 0 0 1 1-.13.78.78 0 0 1 .13 1.07l-2.28 3a.73.73 0 0 1-.58.29zm18.8-4.89a6.38 6.38 0 0 1-6.27 6.47H10a.76.76 0 0 1 0-1.52h6.44a4.88 4.88 0 0 0 4.79-4.95V10.9h-3.89a4 4 0 0 1-4-4.09v-4H7.8a5.34 5.34 0 0 0-5.08 5.1v4.9a.74.74 0 1 1-1.48 0v-5c.34-3.76 3.15-6.56 6.56-6.56h6.62q.12.047.21.14l7.88 8.21a.78.78 0 0 1 .18.72.7.7 0 0 1 0 .15zm-2.6-6.9-5.35-5.53v3a2.54 2.54 0 0 0 2.49 2.57z"
    />
  </svg>
);
export default SvgFileAdded;
