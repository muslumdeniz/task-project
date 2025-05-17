import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.51 6.88a1 1 0 0 0-.38-.08H7.74a1 1 0 0 0 0 2h6L7 15.49a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l6.69-6.68v6a1 1 0 1 0 2 0V7.8a1 1 0 0 0-.62-.92z"
    />
  </svg>
);
export default SvgArrowUpRight;
