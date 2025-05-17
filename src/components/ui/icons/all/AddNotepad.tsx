import * as React from "react";
import type { SVGProps } from "react";
const SvgAddNotepad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.12 4.33a6.2 6.2 0 0 0-3.72-1.78v-.12a.75.75 0 0 0-1.5 0v.09H9.1v-.09a.75.75 0 1 0-1.5 0v.12a6.22 6.22 0 0 0-5.53 6.17v7.4a6.21 6.21 0 0 0 6.2 6.2h7.46a6.21 6.21 0 0 0 6.2-6.2v-7.4a6.2 6.2 0 0 0-1.81-4.39m.31 11.79a4.71 4.71 0 0 1-4.7 4.7H8.27a4.71 4.71 0 0 1-4.7-4.7v-7.4a4.71 4.71 0 0 1 4-4.64v.18a.75.75 0 1 0 1.5 0V4h5.8v.24a.75.75 0 1 0 1.5 0v-.16a4.65 4.65 0 0 1 4 4.64zM15 12.49a.7.7 0 0 1-.71.7h-1.56v1.53a.72.72 0 0 1-.69.74.72.72 0 0 1-.71-.7v-1.59H9.71a.72.72 0 0 1 0-1.43h1.54V10.2a.71.71 0 0 1 .69-.73.69.69 0 0 1 .73.69v1.59h1.6a.71.71 0 0 1 .73.74"
    />
  </svg>
);
export default SvgAddNotepad;
