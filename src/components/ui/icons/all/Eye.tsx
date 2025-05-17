import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 15.6a3.6 3.6 0 1 1 3.6-3.6 3.61 3.61 0 0 1-3.6 3.6m0-5.7a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2m0 11.41a11.42 11.42 0 0 1-7.27-3.06C2.55 16.34 1.25 14 1.25 12c0-4.44 5.63-9.31 10.75-9.31s10.75 5 10.75 9.31c0 4.52-5.53 9.31-10.75 9.31m0-17.12c-4.23 0-9.25 4.23-9.25 7.81 0 1.56 1.14 3.52 3 5.12A10.05 10.05 0 0 0 12 19.81c4.76 0 9.25-4.4 9.25-7.81 0-3.23-4.78-7.81-9.25-7.81"
    />
  </svg>
);
export default SvgEye;
