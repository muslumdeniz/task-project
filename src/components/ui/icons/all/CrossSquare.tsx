import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.92 2.65a5.43 5.43 0 0 1 5.43 5.43v7.84a5.43 5.43 0 0 1-5.43 5.43H8.08a5.43 5.43 0 0 1-5.43-5.43V8.08a5.43 5.43 0 0 1 5.43-5.43zm-3.92 8L9.36 8A1 1 0 0 0 8 8a1 1 0 0 0 0 1.36L10.68 12 8 14.64A1 1 0 0 0 8 16a1 1 0 0 0 1.33 0L12 13.32 14.64 16A1 1 0 0 0 16 16a1 1 0 0 0 0-1.33L13.32 12 16 9.36A1 1 0 0 0 16 8a1 1 0 0 0-1.33 0L12 10.68m3.92-9.43H8.08a6.83 6.83 0 0 0-6.83 6.83v7.84a6.83 6.83 0 0 0 6.83 6.83h7.84a6.83 6.83 0 0 0 6.83-6.83V8.08a6.83 6.83 0 0 0-6.83-6.83"
    />
  </svg>
);
export default SvgCrossSquare;
