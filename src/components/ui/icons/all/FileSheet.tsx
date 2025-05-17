import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSheet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 10.49a.6.6 0 0 0 0-.14.74.74 0 0 0-.19-.71l-8-8a.9.9 0 0 0-.22-.15h-.07a.7.7 0 0 0-.19 0H7.59a6.38 6.38 0 0 0-6.37 6.3v8.42a6.38 6.38 0 0 0 6.37 6.37h8.82a6.38 6.38 0 0 0 6.37-6.37zm-8-6.49 5.44 5.44h-2.91a2.54 2.54 0 0 1-2.53-2.53zm1.66 17.1H7.59a4.88 4.88 0 0 1-4.87-4.87V7.79a4.88 4.88 0 0 1 4.87-4.87h5.66v4a4 4 0 0 0 4 4h4v5.29a4.88 4.88 0 0 1-4.84 4.87zM14.2 20H9.58a5.29 5.29 0 0 1-5.29-5.29V10a5.3 5.3 0 0 1 5.29-5.25h1.68a.75.75 0 1 1 0 1.5H9.58A3.79 3.79 0 0 0 5.79 10v4.62a3.79 3.79 0 0 0 3.79 3.79h4.62a3.79 3.79 0 0 0 3.8-3.75V13a.75.75 0 1 1 1.5 0v1.68A5.3 5.3 0 0 1 14.2 20"
    />
  </svg>
);
export default SvgFileSheet;
