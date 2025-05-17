import * as React from "react";
import type { SVGProps } from "react";
const SvgScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.92 1.25H6.08a4.84 4.84 0 0 0-4.83 4.83v7.51a4.84 4.84 0 0 0 4.83 4.83h5.17v2.12H7.67a.75.75 0 1 0 0 1.5h8.66a.75.75 0 1 0 0-1.5h-3.58v-2.12h5.17a4.84 4.84 0 0 0 4.83-4.83V6.08a4.84 4.84 0 0 0-4.83-4.83m0 15.67H6.08a3.33 3.33 0 0 1-3.28-2.83h18.4a3.33 3.33 0 0 1-3.28 2.83m3.33-4.33H2.75V6.08a3.33 3.33 0 0 1 3.33-3.33h11.84a3.33 3.33 0 0 1 3.33 3.33z"
    />
  </svg>
);
export default SvgScreen;
