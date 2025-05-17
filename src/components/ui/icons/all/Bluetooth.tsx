import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetooth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.15 19.32a.8.8 0 0 1-.33-.08.73.73 0 0 1-.42-.67v-4.49l-2.91 2.69a.75.75 0 0 1-1.06-1.06L11.4 12v-.1L7.48 8.44a.75.75 0 0 1 1-1.12l2.92 2.61V5.27a.751.751 0 0 1 1.21-.59l4.17 3.24a.76.76 0 0 1 .29.56.75.75 0 0 1-.24.58L13.68 12l3.14 2.81a.78.78 0 0 1 .25.58.8.8 0 0 1-.29.57l-4.17 3.23a.74.74 0 0 1-.46.13m.75-6V17l2.25-1.75zm0-6.48v3.85l2.26-2.09zm3.86 16H7.24a6 6 0 0 1-6-6V7.25a6 6 0 0 1 6-6h9.52a6 6 0 0 1 6 6v9.5a6 6 0 0 1-6 6zm-9.52-20a4.5 4.5 0 0 0-4.49 4.5v9.5a4.5 4.5 0 0 0 4.49 4.5h9.52a4.5 4.5 0 0 0 4.48-4.5V7.25a4.5 4.5 0 0 0-4.48-4.5z"
    />
  </svg>
);
export default SvgBluetooth;
