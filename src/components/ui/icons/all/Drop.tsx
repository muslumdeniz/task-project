import * as React from "react";
import type { SVGProps } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 21.8a7.23 7.23 0 0 1-7.23-7.23c0-2.67 3-7.67 5.56-11.4A2 2 0 0 1 12 2.29a2 2 0 0 1 1.67.88c2.54 3.73 5.56 8.73 5.56 11.4A7.23 7.23 0 0 1 12 21.8m0-18a.51.51 0 0 0-.43.23c-3.32 4.87-5.3 8.82-5.3 10.55a5.73 5.73 0 1 0 11.46 0c0-1.73-2-5.68-5.3-10.55a.51.51 0 0 0-.43-.24z"
    />
  </svg>
);
export default SvgDrop;
