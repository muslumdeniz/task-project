import * as React from "react";
import type { SVGProps } from "react";
const SvgNotepadBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.46 9.69h-9a.76.76 0 1 1 0-1.52h9a.76.76 0 1 1 0 1.52M11 12.92H7.52a.76.76 0 0 0 0 1.52H11a.76.76 0 1 0 0-1.52m10.73.89-7.88 8.27a.66.66 0 0 1-.53.22h-5a6.21 6.21 0 0 1-6.2-6.2V8.73a6.24 6.24 0 0 1 5.45-6.17v-.12a.75.75 0 0 1 1.5 0v.09h5.8v-.09a.75.75 0 1 1 1.5 0v.12a6.19 6.19 0 0 1 5.53 6.17v4.56a.74.74 0 0 1-.2.52zM12.5 17.7a5 5 0 0 1 4.84-5.15h3.06V8.73a4.65 4.65 0 0 0-4-4.64v.18a.75.75 0 1 1-1.5 0V4H9.07v.24a.75.75 0 0 1-1.5 0v-.15a4.72 4.72 0 0 0-4 4.64v7.4a4.71 4.71 0 0 0 4.7 4.7h4.26zm4.9-3.7a3.49 3.49 0 0 0-3.4 3.56v2.14l5.4-5.7z"
    />
  </svg>
);
export default SvgNotepadBookmark;
