import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.66 14.2a7.25 7.25 0 0 1-1.21-4.2v-.15a6.34 6.34 0 0 0-5.72-6.3V2.38a.75.75 0 1 0-1.5 0v1.21A6.4 6.4 0 0 0 10.6 4a6.18 6.18 0 0 0-3.8 5.84 7.3 7.3 0 0 1-1.43 4.4l-.67.92A2.86 2.86 0 0 0 7 19.73h3.28v.33a2.7 2.7 0 0 0 5.35 0v-.33H19a2.91 2.91 0 0 0 2.39-4.51zm-6.5 5.69a1.21 1.21 0 0 1-2.37 0v-.16h2.37zM19 18.23H7a1.37 1.37 0 0 1-1.1-2.18l.68-.92A8.87 8.87 0 0 0 8.3 9.77a4.66 4.66 0 0 1 2.85-4.36 5.4 5.4 0 0 1 2-.38A4.81 4.81 0 0 1 18 9.84V10a8.84 8.84 0 0 0 1.46 5l.68 1c.157.24.238.523.23.81A1.37 1.37 0 0 1 19 18.23"
    />
  </svg>
);
export default SvgNotification;
