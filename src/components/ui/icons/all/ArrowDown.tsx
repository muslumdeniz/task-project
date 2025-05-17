import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m17.12 11.35-4.23 4.23V6.12a1 1 0 0 0-2 0v9.46l-4.23-4.23a1.005 1.005 0 0 0-1.714.71 1 1 0 0 0 .294.71l5.94 5.93a1 1 0 0 0 .32.22c.124.047.257.071.39.07a1 1 0 0 0 .38-.07 1 1 0 0 0 .32-.22l5.94-5.93a1.002 1.002 0 0 0-.705-1.71 1 1 0 0 0-.705.29"
    />
  </svg>
);
export default SvgArrowDown;
