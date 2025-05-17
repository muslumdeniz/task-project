import * as React from "react";
import type { SVGProps } from "react";
const SvgDubleCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.2 22.87A10.75 10.75 0 1 1 23 12.12a10.76 10.76 0 0 1-10.8 10.75m0-20a9.25 9.25 0 1 0 9.25 9.25 9.26 9.26 0 0 0-9.25-9.25M9.53 15.72l5.54-5.55a.923.923 0 0 0-1.3-1.31l-4.9 4.9-3-3A.93.93 0 0 0 4.52 12l3.7 3.7a.93.93 0 0 0 1.31 0zM19.88 9a.93.93 0 0 0-1.31 0l-4.89 4.9-.62-.62-1.31 1.3L13 15.83a.92.92 0 0 0 1.3 0l5.55-5.55A.93.93 0 0 0 19.88 9m-10.5 3.19 1.31-1.31-.06-.06a.92.92 0 0 0-1.57.655c0 .245.097.48.27.655z"
    />
  </svg>
);
export default SvgDubleCheckCircle;
