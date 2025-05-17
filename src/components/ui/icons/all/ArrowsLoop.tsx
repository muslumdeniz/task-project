import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLoop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20 12.54v2.57A3.83 3.83 0 0 1 16.27 19H6.4l1.4 1.6a.77.77 0 0 1 0 1.06.67.67 0 0 1-.49.2.7.7 0 0 1-.53-.24l-2.65-3a.77.77 0 0 1 0-1l2.65-2.7a.7.7 0 0 1 1 0 .77.77 0 0 1 0 1.06l-1.54 1.53h10a2.36 2.36 0 0 0 2.31-2.4v-2.57a.72.72 0 0 1 1.44 0zM17 2.35a.71.71 0 0 0-1 0 .76.76 0 0 0 0 1.06l1.46 1.51h-9.8a3.84 3.84 0 0 0-3.76 3.9v2.42a.73.73 0 1 0 1.45 0V8.82a2.35 2.35 0 0 1 2.31-2.4h10l-1.47 1.5a.76.76 0 0 0 .237 1.225.7.7 0 0 0 .283.055.68.68 0 0 0 .49-.2l2.65-2.7a.74.74 0 0 0 .21-.53.76.76 0 0 0-.21-.54z"
    />
  </svg>
);
export default SvgArrowsLoop;
