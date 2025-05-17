import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.73 14.85a4.2 4.2 0 0 1-1.52 3.22l-4.59 3.74a4.17 4.17 0 0 1-5.25 0l-1.56-1.27a.77.77 0 0 1 .443-1.346.76.76 0 0 1 .557.186l1.56 1.27a2.66 2.66 0 0 0 3.35 0l4.59-3.75a2.63 2.63 0 0 0 1-2V8.38a.75.75 0 1 1 1.5 0zM21.25 4 3.8 21.39a.75.75 0 0 1-1.06-1.06L5 18.17l-.12-.1a4.15 4.15 0 0 1-1.58-3.22V7.52a4.18 4.18 0 0 1 2.38-3.78l4.59-2.09a4.08 4.08 0 0 1 3.45 0l4.59 2.09q.36.173.68.41L20.19 3a.75.75 0 1 1 1.06 1M6 17.1 17.89 5.24a.7.7 0 0 0-.21-.13L13.1 3a2.66 2.66 0 0 0-2.21 0L6.31 5.11a2.65 2.65 0 0 0-1.55 2.41v7.33a2.7 2.7 0 0 0 1 2z"
    />
  </svg>
);
export default SvgShieldSlash;
