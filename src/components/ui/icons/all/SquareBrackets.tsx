import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareBrackets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.19 22.75H7.81a6.56 6.56 0 0 1-6.56-6.56V7.81a6.56 6.56 0 0 1 6.56-6.56h8.38a6.56 6.56 0 0 1 6.56 6.56v8.38a6.56 6.56 0 0 1-6.56 6.56m-8.38-20a5.07 5.07 0 0 0-5.06 5.06v8.38a5.07 5.07 0 0 0 5.06 5.06h8.38a5.07 5.07 0 0 0 5.06-5.06V7.81a5.07 5.07 0 0 0-5.06-5.06zm.94 14.11a.75.75 0 0 0 .2-1l-2.52-3.78L9 8.17a.74.74 0 0 0-.23-1 .74.74 0 0 0-1 .22L4.9 11.68a.76.76 0 0 0 0 .83l2.8 4.14a.74.74 0 0 0 .62.34.83.83 0 0 0 .43-.13m7.54-.21 2.8-4.14a.76.76 0 0 0 0-.83L16.3 7.36a.74.74 0 0 0-1-.22.74.74 0 0 0-.23 1l2.53 3.91-2.52 3.74a.75.75 0 0 0 .2 1 .83.83 0 0 0 .42.13.74.74 0 0 0 .59-.27m-4.52-.24 2.05-8.47a.75.75 0 0 0-1.46-.35l-2 8.47a.74.74 0 0 0 .55.9A1 1 0 0 0 11 17a.75.75 0 0 0 .77-.59"
    />
  </svg>
);
export default SvgSquareBrackets;
