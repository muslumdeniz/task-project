import * as React from "react";
import type { SVGProps } from "react";
const SvgAirpod = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.18 1.25H6.82a5.07 5.07 0 0 0-5.07 5.07v11.36a5.07 5.07 0 0 0 5.07 5.07h10.36a5.07 5.07 0 0 0 5.07-5.07V6.32a5.07 5.07 0 0 0-5.07-5.07M6.82 2.75h10.36a3.57 3.57 0 0 1 3.57 3.57v1.55h-2.69A3.17 3.17 0 0 0 15 5.45H9a3.17 3.17 0 0 0-3.06 2.42H3.25V6.32a3.57 3.57 0 0 1 3.57-3.57m9.84 5.87A1.67 1.67 0 0 1 15 10.29H9A1.67 1.67 0 0 1 9 7h6a1.67 1.67 0 0 1 1.66 1.62m.52 12.63H6.82a3.57 3.57 0 0 1-3.57-3.57V9.37h2.69A3.17 3.17 0 0 0 9 11.79h6a3.17 3.17 0 0 0 3.07-2.42h2.69v8.31a3.57 3.57 0 0 1-3.58 3.57"
    />
  </svg>
);
export default SvgAirpod;
