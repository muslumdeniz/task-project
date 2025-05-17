import * as React from "react";
import type { SVGProps } from "react";
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M2 20a.75.75 0 0 1-.75-.75V4.72a.75.75 0 0 1 1.5 0v14.56A.75.75 0 0 1 2 20m20.75-.75V4.72a.75.75 0 1 0-1.5 0v14.56a.75.75 0 1 0 1.5 0zm-2.84-12.9v11.32a5 5 0 0 1-1.37 3.43 2 2 0 0 1-.13.16l-.15.13a5.12 5.12 0 0 1-3.45 1.36H9.19a5.12 5.12 0 0 1-3.45-1.36l-.15-.13a2 2 0 0 1-.13-.16 5 5 0 0 1-1.37-3.43V6.35a5.11 5.11 0 0 1 5.1-5.1h5.62a5.11 5.11 0 0 1 5.1 5.1m-5.12 14.9a3.63 3.63 0 0 0 2.45-1l.11-.09.09-.11a3.58 3.58 0 0 0 1-2.44v-1.17H5.59v1.21a3.58 3.58 0 0 0 1 2.44l.09.11.11.09a3.63 3.63 0 0 0 2.45 1zm3.62-6.31V6.35a3.6 3.6 0 0 0-3.6-3.6H9.19a3.6 3.6 0 0 0-3.6 3.6v8.59z"
    />
  </svg>
);
export default SvgSlider;
