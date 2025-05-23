import * as React from "react";
import type { SVGProps } from "react";
const SvgColorSwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.87 13.25h-2.4l1.7-1.7a2.89 2.89 0 0 0 0-4.07l-2.65-2.65a2.89 2.89 0 0 0-4.07 0l-1.7 1.7v-2.4a2.88 2.88 0 0 0-2.88-2.88H4.13a2.88 2.88 0 0 0-2.88 2.88V18A4.75 4.75 0 0 0 6 22.75h13.87a2.88 2.88 0 0 0 2.88-2.88v-3.74a2.88 2.88 0 0 0-2.88-2.88m-9.12-4.6 2.76-2.75a1.38 1.38 0 0 1 2 0l2.59 2.64a1.38 1.38 0 0 1 0 2l-2.75 2.76-4.6 4.6zM9.25 18a3.25 3.25 0 0 1-1.92 3h-.07q-.24.09-.49.15a.5.5 0 0 1-.12 0 2.8 2.8 0 0 1-.65.07A3.26 3.26 0 0 1 2.75 18V4.13a1.38 1.38 0 0 1 1.38-1.38h3.74a1.38 1.38 0 0 1 1.38 1.38zm12 1.87a1.38 1.38 0 0 1-1.38 1.38H9.47l.5-.5 6-6h3.9a1.38 1.38 0 0 1 1.38 1.38z"
    />
    <path
      fill={props.color}
      d="M6 20.12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-2.56a.53.53 0 1 0 0 1.06.53.53 0 0 0 0-1.06"
    />
  </svg>
);
export default SvgColorSwatch;
