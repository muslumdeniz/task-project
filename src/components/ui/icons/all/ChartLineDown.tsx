import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLineDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.78 22.8H7.59a6.36 6.36 0 0 1-6.34-6.35V2.22a.81.81 0 1 1 1.62 0v14.23a4.73 4.73 0 0 0 4.72 4.73h14.19a.81.81 0 0 1 0 1.62m.53-6.13a.82.82 0 0 0 .09-1.15L18.52 11a2.92 2.92 0 0 0-4.11-.34l-1.1.93a1.29 1.29 0 0 1-1.79-.12L7.06 6.54a.81.81 0 0 0-1.2 1.09l4.46 4.9a2.91 2.91 0 0 0 4 .27l1.1-.93a1.3 1.3 0 0 1 1.82.15l3.89 4.56a.83.83 0 0 0 .61.28.8.8 0 0 0 .57-.19"
    />
  </svg>
);
export default SvgChartLineDown;
