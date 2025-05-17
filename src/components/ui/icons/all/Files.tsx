import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.86 10.49a.6.6 0 0 0 0-.14.74.74 0 0 0-.19-.71l-8-8a1 1 0 0 0-.21-.15h-.08a.6.6 0 0 0-.19 0H7.7a6.38 6.38 0 0 0-6.37 6.3v8.42a6.38 6.38 0 0 0 6.37 6.37h8.82a6.38 6.38 0 0 0 6.37-6.37zm-8-6.49 5.44 5.42h-2.91a2.54 2.54 0 0 1-2.53-2.53zm1.66 17.1H7.7a4.88 4.88 0 0 1-4.87-4.87V7.79A4.88 4.88 0 0 1 7.7 2.92h5.66v4a4 4 0 0 0 4 4h4v5.29a4.87 4.87 0 0 1-4.84 4.87z"
    />
  </svg>
);
export default SvgFiles;
