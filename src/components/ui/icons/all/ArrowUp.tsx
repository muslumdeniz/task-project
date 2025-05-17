import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m18.53 11.35-5.94-5.93a1 1 0 0 0-.7-.3 1 1 0 0 0-.71.3l-5.94 5.93a1.004 1.004 0 0 0 1.42 1.42l4.23-4.23V18a1 1 0 1 0 2 0V8.54l4.23 4.23a1 1 0 0 0 1.41-1.42"
    />
  </svg>
);
export default SvgArrowUp;
