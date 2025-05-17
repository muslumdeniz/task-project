import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17 1.25H7a4.23 4.23 0 0 0-4.25 4.22v13.06A4.23 4.23 0 0 0 7 22.75h10a4.23 4.23 0 0 0 4.22-4.22V5.47A4.23 4.23 0 0 0 17 1.25m2.72 17.28A2.72 2.72 0 0 1 17 21.25H7a2.72 2.72 0 0 1-2.72-2.72v-.6a2.19 2.19 0 0 1 2.18-2.18h13.29zM6.43 14.25a3.66 3.66 0 0 0-2.18.75V5.47A2.72 2.72 0 0 1 7 2.75h10a2.72 2.72 0 0 1 2.72 2.72v8.78zM16.58 7a.76.76 0 0 1-.75.75H8.15a.75.75 0 0 1 0-1.5h7.68a.76.76 0 0 1 .75.75m-2.89 3.57a.75.75 0 0 1-.75.75H8.15a.75.75 0 1 1 0-1.5h4.79a.76.76 0 0 1 .75.75"
    />
  </svg>
);
export default SvgBook;
