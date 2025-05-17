import * as React from "react";
import type { SVGProps } from "react";
const SvgDownSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 7.81v8.38a6.56 6.56 0 0 1-6.56 6.56H7.81a6.56 6.56 0 0 1-6.56-6.56V7.81a6.56 6.56 0 0 1 6.56-6.56h8.38a6.56 6.56 0 0 1 6.56 6.56m-20 8.38a5.07 5.07 0 0 0 5.06 5.06h8.38a5.07 5.07 0 0 0 5.06-5.06V7.81a5.07 5.07 0 0 0-5.06-5.06H7.81a5.07 5.07 0 0 0-5.06 5.06zm13.54-5.9a1 1 0 0 0-1.41 0L12 13.06l-2.8-2.92a1 1 0 1 0-1.44 1.38l3.49 3.65a1 1 0 0 0 .7.31 1 1 0 0 0 .71-.28l3.65-3.49a1 1 0 0 0 .31-.73 1 1 0 0 0-.33-.69"
    />
  </svg>
);
export default SvgDownSquare;
