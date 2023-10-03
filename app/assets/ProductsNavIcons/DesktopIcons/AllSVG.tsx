import * as React from "react";
import { SVGProps } from "react";
const AllSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="34"
    height="34"
    {...props}
  >
    <path
      d="M6 4c-1.108 0-2 .892-2 2v8h10V4H6zm10 0v10h10V6c0-1.108-.892-2-2-2h-8zM4 16v8c0 1.108.892 2 2 2h8V16H4zm12 0v10h8c1.108 0 2-.892 2-2v-8H16z"
      style={{
        opacity: 1,
        fill: "#0369a1",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 2,
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
export default AllSVG;
