import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 2.65a9.35 9.35 0 1 1 0 18.7 9.35 9.35 0 0 1 0-18.7m-.93 10.83L8 10.4a1 1 0 0 0-.66-.27.94.94 0 0 0-.66 1.6l3.73 3.74a1 1 0 0 0 1.33 0l5.6-5.61a.94.94 0 0 0-.66-1.6 1 1 0 0 0-.66.27l-4.94 5M12 1.25A10.75 10.75 0 1 0 22.75 12 10.76 10.76 0 0 0 12 1.25"
    />
  </svg>
);
export default SvgCheckCircle;
