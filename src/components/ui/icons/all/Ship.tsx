import * as React from "react";
import type { SVGProps } from "react";
const SvgShip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m20.5 11.52-.75-.3V7.79a3.55 3.55 0 0 0-3.54-3.54h-1v-1.1a1.9 1.9 0 0 0-1.9-1.9h-2.7a1.9 1.9 0 0 0-1.9 1.9v1.1h-1a3.55 3.55 0 0 0-3.46 3.54v3.43l-.75.3a3.05 3.05 0 0 0-1.92 2.85A8.39 8.39 0 0 0 10 22.75h4a8.39 8.39 0 0 0 8.38-8.38 3.05 3.05 0 0 0-1.88-2.85M10.25 3.15a.4.4 0 0 1 .4-.4h2.7a.4.4 0 0 1 .4.4v1.1h-3.5zm-4.5 4.64a2 2 0 0 1 2-2h8.42a2 2 0 0 1 2 2v2.83l-4.8-1.94a3.93 3.93 0 0 0-2.9 0l-4.8 1.94zM14 21.25h-4a6.89 6.89 0 0 1-6.88-6.88 1.56 1.56 0 0 1 1-1.46l7.05-2.84a2.4 2.4 0 0 1 1.78 0L20 12.91a1.56 1.56 0 0 1 1 1.46 6.89 6.89 0 0 1-7 6.88"
    />
  </svg>
);
export default SvgShip;
