import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m22.14 17.23-1.23-6.8a4.7 4.7 0 0 0-3.75-3.76v-2a3.42 3.42 0 0 0-3.42-3.41H10a3.42 3.42 0 0 0-3.38 3.4v2A4.68 4.68 0 0 0 3 10.5l-1.16 6.8a4.69 4.69 0 0 0 4.65 5.45h11a4.7 4.7 0 0 0 3.62-1.68 4.65 4.65 0 0 0 1.03-3.84M10 2.74h3.7a1.92 1.92 0 0 1 1.92 1.92v1.92h-7.5V4.66A1.92 1.92 0 0 1 10 2.74m7.5 18.52h-11a3.2 3.2 0 0 1-3.17-3.72l1.13-6.79a3.18 3.18 0 0 1 2.16-2.51v.09a.75.75 0 0 0 1.5 0v-.26h7.54v.26a.75.75 0 1 0 1.5 0v-.12a3.18 3.18 0 0 1 2.27 2.49l1.1 6.05H11a.75.75 0 0 0 0 1.5h9.75a3.17 3.17 0 0 1-.75 1.86 3.21 3.21 0 0 1-2.5 1.15"
    />
  </svg>
);
export default SvgPackage;
