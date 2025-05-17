import * as React from "react";
import type { SVGProps } from "react";
const SvgPurchase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.1 8a4.64 4.64 0 0 0-3.48-1.68 5.66 5.66 0 0 0-11.24 0 4.7 4.7 0 0 0-3.46 1.62 4.84 4.84 0 0 0-1.08 3.89L3 18.76a4.71 4.71 0 0 0 4.65 4h8.65a4.73 4.73 0 0 0 4.64-3.93l1.23-6.93A4.77 4.77 0 0 0 21.1 8M12 2.79a4.19 4.19 0 0 1 4.1 3.49H7.9A4.19 4.19 0 0 1 12 2.79m8.67 8.85-1.24 6.93a3.23 3.23 0 0 1-3.16 2.69H7.62a3.22 3.22 0 0 1-3.17-2.74l-1.13-6.93a3.36 3.36 0 0 1 .74-2.68 3.2 3.2 0 0 1 2.43-1.13h11A3.18 3.18 0 0 1 20 8.93a3.31 3.31 0 0 1 .67 2.71m-12.6-.73a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9.84 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgPurchase;
