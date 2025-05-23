import * as React from "react";
import type { SVGProps } from "react";
const SvgJs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.52 17.3a.8.8 0 0 1-.22 0l-3.11-.93a.76.76 0 0 1-.51-.94.75.75 0 0 1 .93-.51l2.15.64V7.73a.76.76 0 1 1 1.51 0v8.81a.77.77 0 0 1-.3.61.74.74 0 0 1-.45.15m3.06-.23 3-.88a.75.75 0 0 0 .54-.72v-3a.77.77 0 0 0-.25-.57.76.76 0 0 0-.6-.18l-2.15.28V8.61l2.6-.41a.76.76 0 0 0 .63-.86.77.77 0 0 0-.87-.63l-3.23.51a.75.75 0 0 0-.64.75v4.92a.73.73 0 0 0 .26.56.71.71 0 0 0 .59.18l2.19-.27v1.54l-2.49.72a.76.76 0 0 0 .43 1.45zM12 22.75a3 3 0 0 1-.9-.13l-4.75-1.36A3.26 3.26 0 0 1 4 18.47L2.59 4.84a3.3 3.3 0 0 1 .82-2.51 3.25 3.25 0 0 1 2.42-1.08h12.34a3.25 3.25 0 0 1 3.24 3.58L20 18.46a3.23 3.23 0 0 1-2.34 2.8l-4.78 1.36c-.285.087-.582.13-.88.13m-6.17-20a1.77 1.77 0 0 0-1.75 1.93L5.5 18.31a1.75 1.75 0 0 0 1.26 1.5l4.75 1.37a1.8 1.8 0 0 0 1 0l4.78-1.37a1.74 1.74 0 0 0 1.26-1.5l1.4-13.63a1.77 1.77 0 0 0-1.75-1.93z"
    />
  </svg>
);
export default SvgJs;
