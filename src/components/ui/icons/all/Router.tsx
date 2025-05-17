import * as React from "react";
import type { SVGProps } from "react";
const SvgRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M6 15.42a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6-3.75h-2.15V3.33a.75.75 0 1 0-1.5 0v8.34H4a2.75 2.75 0 0 0-2.75 2.75v4a2.74 2.74 0 0 0 2.14 2.68 1.75 1.75 0 0 0 3.19.07h10.84a1.75 1.75 0 0 0 3.19-.07 2.75 2.75 0 0 0 2.14-2.68v-4A2.75 2.75 0 0 0 20 11.67m1.25 6.75A1.25 1.25 0 0 1 20 19.67a.76.76 0 0 0-.75.75c0 .28-.5.28-.5 0a.76.76 0 0 0-.75-.75H6a.76.76 0 0 0-.75.75c0 .28-.5.28-.5 0a.76.76 0 0 0-.75-.75 1.25 1.25 0 0 1-1.25-1.25v-4A1.25 1.25 0 0 1 4 13.17h16a1.25 1.25 0 0 1 1.25 1.25z"
    />
  </svg>
);
export default SvgRouter;
