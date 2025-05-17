import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.74 5.71a.77.77 0 0 1 0 1.06L19.1 9.51a.76.76 0 0 1-.52.22.74.74 0 0 1-.51-.22.77.77 0 0 1 0-1.06l1.32-1.37h-2.67l-11 11.3a.7.7 0 0 1-.51.22H2.66a.75.75 0 1 1 0-1.5H4.9L9.84 12 4.9 6.93H2.66a.75.75 0 1 1 0-1.5H5.2a.7.7 0 0 1 .51.22L10.87 11l5-5.18a.77.77 0 0 1 .52-.22h3.1l-1.32-1.47a.77.77 0 0 1 0-1.06.71.71 0 0 1 1 0zm-2.56 8.78a.72.72 0 0 0-1 0 .77.77 0 0 0 0 1.06l1.32 1.37h-2.39l-2.5-2.57a.71.71 0 0 0-1 0 .76.76 0 0 0 0 1.06l2.72 2.79a.68.68 0 0 0 .5.22h2.66l-1.4 1.45a.75.75 0 0 0 0 1.06.68.68 0 0 0 .51.22.7.7 0 0 0 .51-.22l2.64-2.74a.77.77 0 0 0 0-1.06z"
    />
  </svg>
);
export default SvgArrowMix;
