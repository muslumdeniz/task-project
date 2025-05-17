import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.05 22.64A9.69 9.69 0 0 1 9 3.49a.75.75 0 0 1 .89.57.74.74 0 0 1-.61.94 8.19 8.19 0 1 0 9.79 9.65.75.75 0 1 1 1.47.3 9.73 9.73 0 0 1-9.49 7.69M20.3 11.7h-4.49a3.51 3.51 0 0 1-3.51-3.51V3.7a2.33 2.33 0 0 1 .87-1.82 2.26 2.26 0 0 1 1.92-.46 9.68 9.68 0 0 1 7.49 7.49 2.26 2.26 0 0 1-.46 1.92 2.33 2.33 0 0 1-1.82.87m-5.69-8.84a.83.83 0 0 0-.5.18.88.88 0 0 0-.31.66v4.49a2 2 0 0 0 2 2h4.5a.88.88 0 0 0 .7-.3.79.79 0 0 0 .16-.67 8.3 8.3 0 0 0-6.34-6.34z"
    />
  </svg>
);
export default SvgChartPieSimple;
