import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#050505"
      d="M16.82 22.75H3A1.77 1.77 0 0 1 1.25 21V7.18a5.94 5.94 0 0 1 5.93-5.93h9.64a5.94 5.94 0 0 1 5.93 5.93v9.64a5.94 5.94 0 0 1-5.93 5.93m-9.64-20a4.44 4.44 0 0 0-4.43 4.43V21a.27.27 0 0 0 .27.27h13.8a4.44 4.44 0 0 0 4.43-4.43V7.18a4.44 4.44 0 0 0-4.43-4.43zM17.51 9.5a.76.76 0 0 0-.75-.75H7.24a.75.75 0 0 0 0 1.5h9.52a.76.76 0 0 0 .75-.75m-3.17 5a.76.76 0 0 0-.75-.75H7.24a.75.75 0 1 0 0 1.5h6.35a.76.76 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgMessageText;
