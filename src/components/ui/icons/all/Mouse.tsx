import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75m-.69 15.31h-.05A2.33 2.33 0 0 1 9 16.38l-1.88-6.29a2.44 2.44 0 0 1 3.06-3L16.35 9A2.35 2.35 0 0 1 18 11.22a2.33 2.33 0 0 1-1.57 2.27l-1.75.63a.82.82 0 0 0-.5.51l-.64 1.84a2.32 2.32 0 0 1-2.23 1.59M9.44 8.44a.94.94 0 0 0-.89 1.22l1.92 6.28a.85.85 0 0 0 .82.62.83.83 0 0 0 .84-.58l.63-1.84a2.35 2.35 0 0 1 1.41-1.43l1.76-.63a.83.83 0 0 0 .57-.83.84.84 0 0 0-.61-.82L9.73 8.49a1 1 0 0 0-.29-.05"
    />
  </svg>
);
export default SvgMouse;
