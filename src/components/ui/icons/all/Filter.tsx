import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.37 1.23H5.63a3 3 0 0 0-3 3v2.45a3 3 0 0 0 .86 2.08l3.76 3.81a3.08 3.08 0 0 1 .89 2.18V20a2.78 2.78 0 0 0 1.51 2.48 2.81 2.81 0 0 0 2.9-.2l1.36-1a2.67 2.67 0 0 0 1.13-2.18v-4.2a3.12 3.12 0 0 1 1-2.32l4.23-3.77a3 3 0 0 0 1-2.22v-2.4a3 3 0 0 0-2.9-2.96M4.16 6.68V4.19a1.46 1.46 0 0 1 1.47-1.46h4.79l-4.23 6.6-1.6-1.62a1.44 1.44 0 0 1-.43-1.03m15.67-.09a1.48 1.48 0 0 1-.48 1.1l-4.24 3.77a4.6 4.6 0 0 0-1.54 3.44v4.22a1.17 1.17 0 0 1-.49.95l-1.37 1a1.29 1.29 0 0 1-2-1.05v-5.27a4.6 4.6 0 0 0-1.32-3.23l-1.12-1.09 4.94-7.7h6.16a1.46 1.46 0 0 1 1.46 1.46z"
    />
  </svg>
);
export default SvgFilter;
