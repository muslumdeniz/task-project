import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.36 21.8a2.9 2.9 0 0 1-1.14-.25c-2.34-1.07-10-5.12-9.87-12.49a6.83 6.83 0 0 1 5.09-6.61 7.28 7.28 0 0 1 5.8.9.08.08 0 0 0 .11 0 7.25 7.25 0 0 1 6.31-.75A6.88 6.88 0 0 1 23.23 9c-.14 8.25-7.61 11.73-9.89 12.61a2.8 2.8 0 0 1-.98.19m-4-18.09a6.2 6.2 0 0 0-1.53.19 5.34 5.34 0 0 0-4 5.19c-.11 6.45 6.86 10.12 9 11.09a1.23 1.23 0 0 0 1 0c2.07-.78 8.81-3.91 8.93-11.22A5.4 5.4 0 0 0 18.2 4a5.79 5.79 0 0 0-5 .59 1.58 1.58 0 0 1-1.73 0 5.65 5.65 0 0 0-3.13-.88z"
    />
  </svg>
);
export default SvgHeart;
