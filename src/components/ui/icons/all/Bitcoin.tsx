import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 23.25A10.75 10.75 0 1 1 22.75 12.5 10.76 10.76 0 0 1 12 23.25m0-20a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 3.25M16.42 12a2.83 2.83 0 0 0 .48-1.57v-.16a2.83 2.83 0 0 0-2.83-2.87h-.84V6.09a.75.75 0 1 0-1.5 0v1.28h-1.27V6.05a.75.75 0 1 0-1.5 0v1.29h-2.4a.75.75 0 0 0-.75.74.76.76 0 0 0 .74.76h1.28v2.91H6.55a.75.75 0 1 0 0 1.5h1.28v2.83H6.55a.75.75 0 1 0 0 1.5H9v1.35a.75.75 0 1 0 1.5 0v-1.37h1.27V19a.75.75 0 1 0 1.5 0v-1.44h2.06A2.92 2.92 0 0 0 16.42 12M9.33 8.84l4.73.06a1.34 1.34 0 0 1 1.34 1.33v.16a1.35 1.35 0 0 1-1.34 1.34H9.33zm6 7.22h-6v-2.83h6a1.42 1.42 0 0 1 0 2.83"
    />
  </svg>
);
export default SvgBitcoin;
