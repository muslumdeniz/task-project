import * as React from "react";
import type { SVGProps } from "react";
const SvgNotepad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.36 10.12a.77.77 0 0 1-.77.78H7.45a.78.78 0 0 1 0-1.56h9.14a.77.77 0 0 1 .77.78m-4 4.09H7.5a.78.78 0 1 0 0 1.56h5.88a.78.78 0 0 0 0-1.56zm8.55-5.49v7.4a6.21 6.21 0 0 1-6.2 6.2H8.27a6.21 6.21 0 0 1-6.2-6.2v-7.4A6.22 6.22 0 0 1 7.6 2.55v-.12a.75.75 0 0 1 1.5 0v.08h5.8v-.08a.75.75 0 1 1 1.5 0v.12a6.19 6.19 0 0 1 5.53 6.17zm-1.5 0a4.65 4.65 0 0 0-4-4.64v.18a.75.75 0 1 1-1.5 0V4H9.1v.25a.75.75 0 1 1-1.5 0v-.17a4.71 4.71 0 0 0-4 4.64v7.4a4.71 4.71 0 0 0 4.7 4.7h7.46a4.71 4.71 0 0 0 4.7-4.7z"
    />
  </svg>
);
export default SvgNotepad;
