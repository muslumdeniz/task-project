import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderlining = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.19 22.75H7.81a6.56 6.56 0 0 1-6.56-6.56V7.81a6.56 6.56 0 0 1 6.56-6.56h8.38a6.56 6.56 0 0 1 6.56 6.56v8.38a6.56 6.56 0 0 1-6.56 6.56m-8.38-20a5.07 5.07 0 0 0-5.06 5.06v8.38a5.07 5.07 0 0 0 5.06 5.06h8.38a5.07 5.07 0 0 0 5.06-5.06V7.81a5.07 5.07 0 0 0-5.06-5.06zm-.17 12.82 2.79-4.14a.76.76 0 0 0 0-.83L7.65 6.28a.76.76 0 0 0-1-.23.75.75 0 0 0-.22 1L8.91 11l-2.52 3.74a.75.75 0 0 0 .21 1 .76.76 0 0 0 .41.13.75.75 0 0 0 .63-.3m10.09 1.74a.75.75 0 0 0-.75-.75h-5.9a.75.75 0 1 0 0 1.5H17a.74.74 0 0 0 .73-.75"
    />
  </svg>
);
export default SvgUnderlining;
