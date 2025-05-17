import * as React from "react";
import type { SVGProps } from "react";
const SvgHandcart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22 3.63a3 3 0 0 0-2.19-1H7.85a3 3 0 0 0-.85.18l-.69-1.14a.81.81 0 0 0-.71-.42H2.08a.85.85 0 0 0 0 1.69h3.05l.45.8a3.08 3.08 0 0 0-.71 1.75l-.64 8.89A3.13 3.13 0 0 0 5 16.69a3 3 0 0 0 2.2 1h11.9a3 3 0 0 0 3-2.84l.64-8.89A3.14 3.14 0 0 0 22 3.63m-2.19.72a1.33 1.33 0 0 1 1.276.895c.06.171.085.353.074.535l-.14 2H6.36l.16-2.17a1.34 1.34 0 0 1 1.33-1.26zM19.12 16H7.22a1.34 1.34 0 0 1-1-.44 1.4 1.4 0 0 1-.35-1l.36-5h14.6l-.37 5.23A1.36 1.36 0 0 1 19.12 16m-8.3 5a1.74 1.74 0 1 1-1.74-1.77A1.75 1.75 0 0 1 10.82 21m7.8 0a1.73 1.73 0 1 1-1.73-1.77A1.75 1.75 0 0 1 18.62 21"
    />
  </svg>
);
export default SvgHandcart;
