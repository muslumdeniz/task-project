import * as React from "react";
import type { SVGProps } from "react";
const SvgLeftSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.19 22.75H7.81a6.56 6.56 0 0 1-6.56-6.56V7.81a6.56 6.56 0 0 1 6.56-6.56h8.38a6.56 6.56 0 0 1 6.56 6.56v8.38a6.56 6.56 0 0 1-6.56 6.56m-8.38-20a5.07 5.07 0 0 0-5.06 5.06v8.38a5.07 5.07 0 0 0 5.06 5.06h8.38a5.07 5.07 0 0 0 5.06-5.06V7.81a5.07 5.07 0 0 0-5.06-5.06zm5.9 13.54a1 1 0 0 0 0-1.41L10.94 12l2.92-2.8a1 1 0 0 0-1.38-1.44L8.83 11.2a1 1 0 0 0-.31.7 1 1 0 0 0 .28.71l3.49 3.65a1 1 0 0 0 1.42.03"
    />
  </svg>
);
export default SvgLeftSquare;
