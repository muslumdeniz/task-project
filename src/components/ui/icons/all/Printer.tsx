import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10 11.75H7a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5M21.75 9.8v5.4a3.55 3.55 0 0 1-3.55 3.55h-1.45v.17a3.84 3.84 0 0 1-3.83 3.83h-1.84a3.84 3.84 0 0 1-3.83-3.83v-.17H5.8a3.55 3.55 0 0 1-3.55-3.55V9.8A3.55 3.55 0 0 1 5.8 6.25h.45v-1a4 4 0 0 1 4-4h3.5a4 4 0 0 1 4 4v1h.45a3.55 3.55 0 0 1 3.55 3.55m-14-3.55h8.5v-1a2.5 2.5 0 0 0-2.5-2.5h-3.5a2.5 2.5 0 0 0-2.5 2.5zm7.5 9.5h-6.5v3.17a2.34 2.34 0 0 0 2.33 2.33h1.84a2.34 2.34 0 0 0 2.33-2.33zm5-5.95a2.05 2.05 0 0 0-2.05-2.05H5.8a2.05 2.05 0 0 0-2 2.05v5.4a2.05 2.05 0 0 0 2 2.05h1.45v-1.5H7a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5h-.25v1.5h1.45a2.05 2.05 0 0 0 2.05-2.05z"
    />
  </svg>
);
export default SvgPrinter;
