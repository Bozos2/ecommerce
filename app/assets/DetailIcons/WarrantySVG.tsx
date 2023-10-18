import * as React from "react";
import { SVGProps } from "react";
const WarrantyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-4 0 64 64"
    width={40}
    height={40}
    {...props}
  >
    <title>{"Shield-check"}</title>
    <g fill="none" fillRule="evenodd" stroke="#0369a1" strokeWidth={2}>
      <path d="M55 13.1C55 47 33.4 63 28 63 22.6 63 1 47 1 13.1 1 2.2 17.8 1 28 1s27 1.1 27 12.1Z" />
      <path d="M28 59c-3.8-.8-22.9-14.6-22.9-45.9C5.1 9.3 10.4 5 28 5c17.6 0 22.9 4.3 22.9 8.1C50.9 44.4 31.8 58.2 28 59Z" />
      <path d="m39 25.1-2.8-2.8c-.4-.4-1-.4-1.4 0L27 30.1l-3.5-3.5c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l11.3-11.3c.3-.5.3-1.1-.1-1.5Z" />
    </g>
  </svg>
);
export default WarrantyIcon;
