import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.62 22.75H6.38a3.1 3.1 0 0 1-3.1-3.1V4.35a3.1 3.1 0 0 1 3.1-3.1h6.89a2.06 2.06 0 0 1 1.46.61l5.4 5.47c.378.384.59.901.59 1.44v10.88a3.1 3.1 0 0 1-3.1 3.1m-11.24-20a1.6 1.6 0 0 0-1.6 1.6v15.3a1.6 1.6 0 0 0 1.6 1.6h11.24a1.6 1.6 0 0 0 1.6-1.6V8.77a.6.6 0 0 0-.16-.39l-5.4-5.47a.55.55 0 0 0-.39-.16z"
    />
    <path
      fill={props.color}
      d="M19.94 9.25h-3.32a3.86 3.86 0 0 1-3.86-3.85V2a.74.74 0 0 1 .24-.55.73.73 0 0 1 .62-.16 2 2 0 0 1 1.08.57l5.4 5.47c.27.276.457.623.54 1a.74.74 0 0 1-.73.9zm-5.68-5.73V5.4a2.36 2.36 0 0 0 2.36 2.35h1.82zM16.25 17.24l-2.08-2c.47-.653.725-1.436.73-2.24a4 4 0 1 0-1.82 3.31l2.14 2a.75.75 0 0 0 .816.149.75.75 0 0 0 .214-1.219M8.52 13A2.44 2.44 0 1 1 11 15.44 2.45 2.45 0 0 1 8.52 13"
    />
  </svg>
);
export default SvgSearchList;
