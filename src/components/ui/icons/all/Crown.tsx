import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17 21H7a5.79 5.79 0 0 1-5.79-5.78V5.34a1.57 1.57 0 0 1 2.71-1.13l3 3 4-3.77a1.59 1.59 0 0 1 2.2 0L17 7.18a.07.07 0 0 0 .1 0l3-3a1.57 1.57 0 0 1 2.67 1.13v9.91A5.79 5.79 0 0 1 17 21M2.87 5.29h-.12v9.91A4.29 4.29 0 0 0 7 19.53h10a4.29 4.29 0 0 0 4.29-4.28V5.34h-.12l-3 3a1.59 1.59 0 0 1-2.2 0l-3.92-3.85-4 3.77a1.57 1.57 0 0 1-2.2 0z"
    />
  </svg>
);
export default SvgCrown;
