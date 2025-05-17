import * as React from "react";
import type { SVGProps } from "react";
const SvgParcelTracking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.17 15.52a4.432 4.432 0 0 0-7.25-3.479 4.43 4.43 0 0 0-1.1 5.48l-1.54 1.29a.75.75 0 0 0 .48 1.32.72.72 0 0 0 .48-.13l1.47-1.23a4.41 4.41 0 0 0 7.46-3.21zm-4.42 2.93a2.93 2.93 0 1 1-.02-5.86 2.93 2.93 0 0 1 .02 5.86M18.21 3H8.57A4.53 4.53 0 0 0 4 7.55v2.84a.75.75 0 0 0 1.5 0V7.55a3 3 0 0 1 3-3h1v3.84A2.59 2.59 0 0 0 12.16 11h2.46a2.6 2.6 0 0 0 2.6-2.59V4.52h1a3 3 0 0 1 3 3v8.9a3 3 0 0 1-3 3H11.1a.75.75 0 0 0 0 1.5h7.11a4.53 4.53 0 0 0 4.53-4.53V7.55A4.53 4.53 0 0 0 18.21 3m-2.49 5.39a1.09 1.09 0 0 1-1.1 1.09h-2.46a1.09 1.09 0 0 1-1.09-1.09V4.52h4.65z"
    />
  </svg>
);
export default SvgParcelTracking;
