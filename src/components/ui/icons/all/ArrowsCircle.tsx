import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4.73 10.59a.77.77 0 0 1-.73.61h-.17a.77.77 0 0 1-.59-.92 9.43 9.43 0 0 1 16-4.47V3.06a.77.77 0 0 1 .76-.78.78.78 0 0 1 .78.78v4.65a.78.78 0 0 1-.78.77h-4.73a.78.78 0 1 1 0-1.55h2.89a7.88 7.88 0 0 0-13.43 3.66m16.33 2.72a.76.76 0 0 0-.91.6A7.88 7.88 0 0 1 6.6 17.63h3a.78.78 0 0 0 .72-1.077.77.77 0 0 0-.72-.473H5.26a.77.77 0 0 0-.78.77v4.5a.78.78 0 1 0 1.55 0v-2.1a9.42 9.42 0 0 0 15.63-5 .76.76 0 0 0-.6-.94"
    />
  </svg>
);
export default SvgArrowsCircle;
