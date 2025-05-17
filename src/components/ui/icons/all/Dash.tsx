import * as React from "react";
import type { SVGProps } from "react";
const SvgDash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 23.25A10.75 10.75 0 1 1 22.75 12.5 10.76 10.76 0 0 1 12 23.25m0-20a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 3.25m6 10.44h-.81a5 5 0 0 0 .08-.87v-.45a5.7 5.7 0 0 0-.13-1.18H18a.75.75 0 1 0 0-1.5h-1.39a5.64 5.64 0 0 0-4.94-2.95H7.48a.76.76 0 0 0-.75.75v2.2H6a.75.75 0 0 0 0 1.5h.75v2.5H6a.75.75 0 1 0 0 1.5h.75v2.32a.76.76 0 0 0 .75.75h4.38a5.44 5.44 0 0 0 4.88-3.07H18a.75.75 0 1 0 0-1.5M8.23 8.24h3.44a4.07 4.07 0 0 1 3.1 1.45H8.23zm0 2.95h7.37c.12.382.184.78.19 1.18v.45a4 4 0 0 1-.1.87H8.23zm3.63 5.57H8.23v-1.57H15a3.94 3.94 0 0 1-3.14 1.57"
    />
  </svg>
);
export default SvgDash;
