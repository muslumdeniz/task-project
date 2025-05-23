import * as React from "react";
import type { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.08 4.84a2.82 2.82 0 0 0-1.89 4.85 2.82 2.82 0 0 0 3.9-4.07 2.87 2.87 0 0 0-2.01-.78m1 3.73a1.319 1.319 0 1 1-1.9-1.82 1.3 1.3 0 0 1 .92-.41c.34 0 .667.132.91.37a1.28 1.28 0 0 1 .4.92c.02.343-.095.68-.32.94zM22 2a2.46 2.46 0 0 0-2.17-.67l-3.59.63a11.25 11.25 0 0 0-5.07 2.9A19.5 19.5 0 0 0 9 7.71C5.11 7.36 1.51 13 1.36 13.29a.69.69 0 0 0 0 .72.74.74 0 0 0 .64.36h3.59a2 2 0 0 0 .62 1.58l2.07 1.94a2 2 0 0 0 2 .47l.37 3.77a.72.72 0 0 0 .72.64.77.77 0 0 0 .44-.14c.24-.18 5.64-4.25 4.91-8a23 23 0 0 0 2.48-1.95 10.17 10.17 0 0 0 2.86-5.3l.64-3.27A2.36 2.36 0 0 0 22 2M6 13H3.35C4.46 11.49 6.27 9.57 8 9.17l-.75 1.47c-.45.86-.86 1.65-1.17 2.29zm6 7.62-.26-2.68 3.63-2.24c-.26 1.75-2.03 3.7-3.37 4.92m9.31-16.8-.64 3.3a8.86 8.86 0 0 1-2.43 4.51A43 43 0 0 1 10 17a.63.63 0 0 1-.71-.1l-2.07-2a.6.6 0 0 1-.13-.69l.07-.15A1 1 0 0 0 7.2 14l1.39-2.72a27 27 0 0 1 3.67-5.43 9.8 9.8 0 0 1 4.31-2.49l3.56-.63A1 1 0 0 1 21 3a.92.92 0 0 1 .28.82z"
    />
  </svg>
);
export default SvgRocket;
